"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { toast } from "sonner"
import * as Lucide from "lucide-react"
import Link from "next/link"

const { 
  ArrowRight, 
  ArrowLeft, 
  Upload, 
  X, 
  CheckCircle2, 
  User, 
  Briefcase, 
  FileText,
  GraduationCap,
  Code,
  Award,
  Target
} = Lucide as any

// Form schemas for each step
const step1Schema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  location: z.string().min(2, "Location is required"),
})

const step2Schema = z.object({
  position: z.string().min(1, "Please select a position"),
  experience: z.string().min(1, "Please select your experience level"),
  linkedIn: z.string().url("Invalid LinkedIn URL").optional().or(z.literal("")),
  portfolio: z.string().url("Invalid portfolio URL").optional().or(z.literal("")),
})

const step3Schema = z.object({
  hasResume: z.enum(["yes", "no"]),
  resume: z.any().optional(),
})

const step4ManualSchema = z.object({
  education: z.string().min(10, "Please provide education details"),
  workExperience: z.string().min(20, "Please describe your work experience"),
  skills: z.string().min(10, "Please list your skills"),
  certifications: z.string().optional(),
  projects: z.string().optional(),
})

const step5Schema = z.object({
  coverLetter: z.string().min(50, "Cover letter must be at least 50 characters"),
})

const formSchema = step1Schema
  .merge(step2Schema)
  .merge(step3Schema)
  .merge(
    z.object({
      education: z.string().optional(),
      workExperience: z.string().optional(),
      skills: z.string().optional(),
      certifications: z.string().optional(),
      projects: z.string().optional(),
    })
  )
  .merge(step5Schema)
  .superRefine((data, ctx) => {
    if (data.hasResume === "no") {
      if (!data.education || data.education.length < 10) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Please provide education details", path: ["education"] })
      }
      if (!data.workExperience || data.workExperience.length < 20) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Please describe your work experience", path: ["workExperience"] })
      }
      if (!data.skills || data.skills.length < 10) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Please list your skills", path: ["skills"] })
      }
    }
  });

type FormData = z.infer<typeof step1Schema> & 
                 z.infer<typeof step2Schema> & 
                 z.infer<typeof step3Schema> & 
                 z.infer<typeof step4ManualSchema> & 
                 z.infer<typeof step5Schema>

const positions = [
  { value: "soil-scientist", label: "Soil Scientist" },
  { value: "bio-security", label: "Bio-Security Specialist" },
  { value: "data-engineer", label: "Data Engineer" },
  { value: "ai-ml-engineer", label: "AI/ML Engineer" },
  { value: "field-engineer", label: "Field Engineer" },
  { value: "outreach-manager", label: "Outreach Manager" },
  { value: "product-manager", label: "Product Manager" },
  { value: "full-stack-developer", label: "Full Stack Developer" },
  { value: "other", label: "Other" },
]

export default function ApplyPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [hasResume, setHasResume] = useState<"yes" | "no" | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    getValues,
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      position: "",
      experience: "",
      linkedIn: "",
      portfolio: "",
      hasResume: "yes",
      education: "",
      workExperience: "",
      skills: "",
      certifications: "",
      projects: "",
      coverLetter: "",
    }
  })

  const totalSteps = hasResume === "no" ? 5 : 4

  const handleNext = async () => {
    let isValid = false
    
    if (currentStep === 1) {
      isValid = await trigger(["fullName", "email", "phone", "location"])
    } else if (currentStep === 2) {
      isValid = await trigger(["position", "experience"])
    } else if (currentStep === 3) {
      if (hasResume === "yes" && !resumeFile) {
        toast.error("Please upload your resume")
        return
      }
      isValid = true
    } else if (currentStep === 4 && hasResume === "no") {
      isValid = await trigger(["education", "workExperience", "skills"])
    }

    if (isValid) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps))
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error("File size must be less than 5MB")
        return
      }
      if (!["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(file.type)) {
        toast.error("Only PDF and Word documents are accepted")
        return
      }
      setResumeFile(file)
      setValue("resume", file)
      toast.success("Resume uploaded successfully!")
    }
  }

  const removeFile = () => {
    setResumeFile(null)
    setValue("resume", null)
  }

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    
    try {
      const formData = new FormData()
      Object.entries(data).forEach(([key, value]) => {
        if (value) formData.append(key, value)
      })
      if (resumeFile) {
        formData.append("resume", resumeFile)
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      console.log("Application submitted:", data)
      
      setIsSubmitted(true)
      toast.success("Application submitted successfully!")
      window.scrollTo({ top: 0, behavior: "smooth" })
      
    } catch (error) {
      toast.error("Failed to submit application. Please try again.")
      console.error("Submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderStepContent = () => {
    if (currentStep === 1) {
      return (
        <motion.div
          key="step1"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                <User className="w-6 h-6 text-emerald-500" />
              </div>
              <div>
                <h2 className="text-3xl font-serif font-light">Personal Information</h2>
                <p className="text-white/60">Let's start with the basics</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-white/80">Full Name *</Label>
              <Input
                id="fullName"
                {...register("fullName")}
                placeholder="Enter your name"
                className="h-14 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-emerald-500 text-lg"
              />
              {errors.fullName && (
                <p className="text-red-400 text-sm">{errors.fullName.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-white/80">Email Address *</Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                placeholder="Enter your email"
                className="h-14 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-emerald-500 text-lg"
              />
              {errors.email && (
                <p className="text-red-400 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-white/80">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                {...register("phone")}
                placeholder="Enter your phone number"
                className="h-14 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-emerald-500 text-lg"
              />
              {errors.phone && (
                <p className="text-red-400 text-sm">{errors.phone.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="location" className="text-white/80">Location *</Label>
              <Input
                id="location"
                {...register("location")}
                placeholder="Enter your address"
                className="h-14 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-emerald-500 text-lg"
              />
              {errors.location && (
                <p className="text-red-400 text-sm">{errors.location.message}</p>
              )}
            </div>
          </div>
        </motion.div>
      )
    }

    if (currentStep === 2) {
      return (
        <motion.div
          key="step2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-emerald-500" />
              </div>
              <div>
                <h2 className="text-3xl font-serif font-light">Professional Background</h2>
                <p className="text-white/60">Tell us about your expertise</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="position" className="text-white/80">Position of Interest *</Label>
              <Select onValueChange={(value) => setValue("position", value)}>
                <SelectTrigger className="h-14 bg-white/5 border-white/10 text-white focus:border-emerald-500 text-lg">
                  <SelectValue placeholder="Select a position" />
                </SelectTrigger>
                <SelectContent className="bg-[#0a0a0a] border-white/10 text-white">
                  {positions.map(pos => (
                    <SelectItem key={pos.value} value={pos.value}>{pos.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.position && (
                <p className="text-red-400 text-sm">{errors.position.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience" className="text-white/80">Years of Experience *</Label>
              <Select onValueChange={(value) => setValue("experience", value)}>
                <SelectTrigger className="h-14 bg-white/5 border-white/10 text-white focus:border-emerald-500 text-lg">
                  <SelectValue placeholder="Select experience level" />
                </SelectTrigger>
                <SelectContent className="bg-[#0a0a0a] border-white/10 text-white">
                  <SelectItem value="0-1">0-1 years</SelectItem>
                  <SelectItem value="1-3">1-3 years</SelectItem>
                  <SelectItem value="3-5">3-5 years</SelectItem>
                  <SelectItem value="5-10">5-10 years</SelectItem>
                  <SelectItem value="10+">10+ years</SelectItem>
                </SelectContent>
              </Select>
              {errors.experience && (
                <p className="text-red-400 text-sm">{errors.experience.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="linkedIn" className="text-white/80">LinkedIn Profile</Label>
              <Input
                id="linkedIn"
                type="url"
                {...register("linkedIn")}
                placeholder="https://linkedin.com/in/yourprofile"
                className="h-14 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-emerald-500 text-lg"
              />
              {errors.linkedIn && (
                <p className="text-red-400 text-sm">{errors.linkedIn.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="portfolio" className="text-white/80">Portfolio/Website</Label>
              <Input
                id="portfolio"
                type="url"
                {...register("portfolio")}
                placeholder="https://yourportfolio.com"
                className="h-14 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-emerald-500 text-lg"
              />
              {errors.portfolio && (
                <p className="text-red-400 text-sm">{errors.portfolio.message}</p>
              )}
            </div>
          </div>
        </motion.div>
      )
    }

    if (currentStep === 3) {
      return (
        <motion.div
          key="step3"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                <FileText className="w-6 h-6 text-emerald-500" />
              </div>
              <div>
                <h2 className="text-3xl font-serif font-light">Resume</h2>
                <p className="text-white/60">Do you have a resume ready?</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => {
                  setHasResume("yes")
                  setValue("hasResume", "yes")
                }}
                className={`p-8 rounded-2xl border-2 transition-all ${
                  hasResume === "yes"
                    ? "border-emerald-500 bg-emerald-500/10"
                    : "border-white/10 bg-white/5 hover:bg-white/10"
                }`}
              >
                <Upload className="w-8 h-8 mb-4 text-emerald-500" />
                <h3 className="text-xl font-medium mb-2">Upload Resume</h3>
                <p className="text-white/60 text-sm">I have a resume file ready to upload</p>
              </button>

              <button
                type="button"
                onClick={() => {
                  setHasResume("no")
                  setValue("hasResume", "no")
                }}
                className={`p-8 rounded-2xl border-2 transition-all ${
                  hasResume === "no"
                    ? "border-emerald-500 bg-emerald-500/10"
                    : "border-white/10 bg-white/5 hover:bg-white/10"
                }`}
              >
                <FileText className="w-8 h-8 mb-4 text-emerald-500" />
                <h3 className="text-xl font-medium mb-2">Fill Details Manually</h3>
                <p className="text-white/60 text-sm">I'll provide my information directly</p>
              </button>
            </div>

            {hasResume === "yes" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <Label className="text-white/80">Upload Resume (PDF or Word, max 5MB)</Label>
                {!resumeFile ? (
                  <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-white/20 rounded-2xl cursor-pointer hover:bg-white/5 transition-colors">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="w-12 h-12 mb-4 text-white/40" />
                      <p className="mb-2 text-lg text-white/60">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-sm text-white/40">PDF or DOC (MAX. 5MB)</p>
                    </div>
                    <input
                      type="file"
                      className="hidden"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                    />
                  </label>
                ) : (
                  <div className="flex items-center justify-between p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-emerald-500/20 rounded-xl">
                        <FileText className="w-6 h-6 text-emerald-500" />
                      </div>
                      <div>
                        <p className="text-lg text-white font-medium">{resumeFile.name}</p>
                        <p className="text-sm text-white/60">
                          {(resumeFile.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={removeFile}
                      className="p-2 hover:bg-white/10 rounded-full transition-colors"
                    >
                      <X className="w-6 h-6 text-white/60" />
                    </button>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </motion.div>
      )
    }

    if (currentStep === 4 && hasResume === "no") {
      return (
        <motion.div
          key="step4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-emerald-500" />
              </div>
              <div>
                <h2 className="text-3xl font-serif font-light">Resume Details</h2>
                <p className="text-white/60">Share your background with us</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="education" className="text-white/80 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                Education *
              </Label>
              <Textarea
                id="education"
                {...register("education")}
                placeholder="E.g., B.Tech in Computer Science, IIT Delhi (2018-2022)"
                rows={3}
                className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-emerald-500 resize-none text-lg"
              />
              {errors.education && (
                <p className="text-red-400 text-sm">{errors.education.message}</p>
              )}
              <p className="text-xs text-white/40">List your degrees, institutions, and years</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="workExperience" className="text-white/80 flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                Work Experience *
              </Label>
              <Textarea
                id="workExperience"
                {...register("workExperience")}
                placeholder="E.g., Software Engineer at TechCorp (2022-Present) - Built scalable APIs..."
                rows={5}
                className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-emerald-500 resize-none text-lg"
              />
              {errors.workExperience && (
                <p className="text-red-400 text-sm">{errors.workExperience.message}</p>
              )}
              <p className="text-xs text-white/40">Include job titles, companies, dates, and key responsibilities</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="skills" className="text-white/80 flex items-center gap-2">
                <Code className="w-4 h-4" />
                Skills *
              </Label>
              <Textarea
                id="skills"
                {...register("skills")}
                placeholder="E.g., Python, React, Machine Learning, Data Analysis, Soil Science..."
                rows={3}
                className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-emerald-500 resize-none text-lg"
              />
              {errors.skills && (
                <p className="text-red-400 text-sm">{errors.skills.message}</p>
              )}
              <p className="text-xs text-white/40">List your technical and soft skills</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="certifications" className="text-white/80 flex items-center gap-2">
                <Award className="w-4 h-4" />
                Certifications (Optional)
              </Label>
              <Textarea
                id="certifications"
                {...register("certifications")}
                placeholder="E.g., AWS Certified Solutions Architect, Google Data Analytics..."
                rows={2}
                className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-emerald-500 resize-none text-lg"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="projects" className="text-white/80 flex items-center gap-2">
                <Target className="w-4 h-4" />
                Notable Projects (Optional)
              </Label>
              <Textarea
                id="projects"
                {...register("projects")}
                placeholder="E.g., Developed a crop yield prediction system using ML..."
                rows={3}
                className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-emerald-500 resize-none text-lg"
              />
              <p className="text-xs text-white/40">Highlight significant projects or achievements</p>
            </div>
          </div>
        </motion.div>
      )
    }

    const finalStep = hasResume === "no" ? 5 : 4

    if (currentStep === finalStep) {
      return (
        <motion.div
          key="stepFinal"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                <FileText className="w-6 h-6 text-emerald-500" />
              </div>
              <div>
                <h2 className="text-3xl font-serif font-light">Your Story</h2>
                <p className="text-white/60">Why AgriScore? Share your passion</p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="coverLetter" className="text-white/80">
              Cover Letter / Why do you want to join the mission? *
            </Label>
            <Textarea
              id="coverLetter"
              {...register("coverLetter")}
              placeholder="Tell us about your passion for agriculture, technology, and sustainability. What drives you? Why AgriScore? What unique perspective will you bring to the mission?..."
              rows={10}
              className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-emerald-500 resize-none text-lg"
            />
            {errors.coverLetter && (
              <p className="text-red-400 text-sm">{errors.coverLetter.message}</p>
            )}
            <p className="text-xs text-white/40">Minimum 50 characters - We value authenticity over formality</p>
          </div>

          <div className="p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl">
            <p className="text-white/80 leading-relaxed">
              <span className="font-medium text-emerald-500">Pro tip:</span> We're more interested in your 
              obsession than your credentials. Show us what makes you tick, what problems keep you up at night, 
              and how your unique perspective can help us engineer the biological resilience of our planet.
            </p>
          </div>
        </motion.div>
      )
    }
  }

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-black text-white">
        <Navbar />
        <div className="min-h-screen flex items-center justify-center px-6 pt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center space-y-8"
          >
            <div className="w-24 h-24 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
              <CheckCircle2 className="h-12 w-12 text-emerald-500" />
            </div>
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-serif font-light">Application Received</h1>
              <p className="text-xl text-white/60 font-light max-w-lg mx-auto leading-relaxed">
                Thank you for your interest in joining the mission. Our team will review your 
                application and reach out to you soon.
              </p>
            </div>
            <Link
              href="/careers"
              className="inline-block mt-8 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              Back to Careers
            </Link>
          </motion.div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-6 mb-16"
          >
            <span className="inline-block px-6 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-[10px] uppercase tracking-[0.5em] text-emerald-500 font-bold">
              Mission Enrollment
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-light leading-tight">
              Join the <span className="italic text-[#D4AF37]">Architects</span>
            </h1>
            <p className="text-xl text-white/60 font-light max-w-2xl mx-auto">
              Ready to engineer the biological resilience of our planet? Let's start your journey.
            </p>
          </motion.div>

          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-white/60">Step {currentStep} of {totalSteps}</span>
              <span className="text-sm text-emerald-500 font-medium">
                {Math.round((currentStep / totalSteps) * 100)}% Complete
              </span>
            </div>
            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-emerald-500 to-[#D4AF37]"
                initial={{ width: 0 }}
                animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 mb-8">
              <AnimatePresence mode="wait">
                {renderStepContent()}
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4">
              {currentStep > 1 && (
                <Button
                  type="button"
                  onClick={handlePrevious}
                  disabled={isSubmitting}
                  className="flex-1 h-16 rounded-full bg-zinc-800 text-white hover:bg-zinc-700 font-bold border border-white/5 text-lg transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Previous Step
                </Button>
              )}
              
              {currentStep < totalSteps ? (
                <Button
                  type="button"
                  onClick={handleNext}
                  className="flex-1 h-16 rounded-full bg-[#D4AF37] text-[#1A3C34] hover:bg-[#C49F2E] font-bold text-lg"
                >
                  Next Step
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 h-16 rounded-full bg-[#D4AF37] text-[#1A3C34] hover:bg-[#C49F2E] font-bold text-lg disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                  <CheckCircle2 className="w-5 h-5 ml-2" />
                </Button>
              )}
            </div>
          </form>

          {/* Help Text */}
          <div className="mt-8 text-center">
            <p className="text-white/40 text-sm">
              Need help? Email us at{" "}
              <a href="mailto:careers@myagriscore.com" className="text-emerald-500 hover:text-emerald-400">
                careers@myagriscore.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
