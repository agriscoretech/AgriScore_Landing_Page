"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function InquiryPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    product: "",
    address: "",
    state: "",
    pincode: "",
    country: "India",
    purpose: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleProductChange = (value: string) => {
    setFormData((prev) => ({ ...prev, product: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.product) {
      toast({
        title: "Product Required",
        description: "Please select a product from the list.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/submit-inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Inquiry Submitted",
          description: "Thank you for reaching out. Our team will get back to you shortly.",
        });
        // Clear form
        setFormData({
          name: "",
          email: "",
          whatsapp: "",
          product: "",
          address: "",
          state: "",
          pincode: "",
          country: "India",
          purpose: "",
        });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "There was a problem submitting your inquiry. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 relative overflow-hidden">
      {/* Background blobs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-emerald-900/10 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-amber-900/10 blur-[120px]" />
      </div>

      <div className="w-full max-w-2xl mx-auto relative z-10 pt-12 pb-24">
        <Link 
          href="/analysis" 
          className="inline-flex items-center text-sm text-zinc-400 hover:text-white transition-colors mb-8"
        >
          <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          Back to Analysis
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
        >
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-amber-200 to-amber-500">
              Sales & Business Inquiries
            </h1>
            <p className="text-zinc-400 mt-2">
              Interested in AgriScore Nano or Terra? Fill out the form below.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-zinc-300">Name</Label>
                <Input 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name" 
                  className="bg-white/5 border-white/10 text-white placeholder:text-zinc-500 focus-visible:ring-amber-500/50" 
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-zinc-300">Email ID</Label>
                <Input 
                  id="email" 
                  type="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com" 
                  className="bg-white/5 border-white/10 text-white placeholder:text-zinc-500 focus-visible:ring-amber-500/50" 
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="whatsapp" className="text-zinc-300">WhatsApp No.</Label>
                <Input 
                  id="whatsapp" 
                  type="tel" 
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="+91 00000 00000" 
                  className="bg-white/5 border-white/10 text-white placeholder:text-zinc-500 focus-visible:ring-amber-500/50" 
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="product" className="text-zinc-300">Select Product</Label>
                <Select value={formData.product} onValueChange={handleProductChange} required>
                  <SelectTrigger className="bg-white/5 border-white/10 text-white focus:ring-amber-500/50">
                    <SelectValue placeholder="Select a product" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-900 border-white/10 text-white">
                    <SelectItem value="AgriScore Nano">AgriScore Nano</SelectItem>
                    <SelectItem value="AgriScore Terra">AgriScore Terra</SelectItem>
                    <SelectItem value="Both Nano & Terra">Both</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-white/10">
              <h3 className="text-lg font-medium text-zinc-200">Address Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2 md:col-span-3">
                  <Label htmlFor="address" className="text-zinc-300">Street Address</Label>
                  <Input 
                    id="address" 
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="123 Farm Road..." 
                    className="bg-white/5 border-white/10 text-white placeholder:text-zinc-500 focus-visible:ring-amber-500/50" 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state" className="text-zinc-300">State</Label>
                  <Input 
                    id="state" 
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="e.g. Maharashtra" 
                    className="bg-white/5 border-white/10 text-white placeholder:text-zinc-500 focus-visible:ring-amber-500/50" 
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pincode" className="text-zinc-300">Pincode</Label>
                  <Input 
                    id="pincode" 
                    value={formData.pincode}
                    onChange={handleChange}
                    placeholder="e.g. 400001" 
                    className="bg-white/5 border-white/10 text-white placeholder:text-zinc-500 focus-visible:ring-amber-500/50" 
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country" className="text-zinc-300">Country</Label>
                  <Input 
                    id="country" 
                    value={formData.country}
                    className="bg-white/5 border-white/10 text-zinc-300 focus-visible:ring-amber-500/50 cursor-not-allowed" 
                    readOnly
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-4 border-t border-white/10">
              <Label htmlFor="purpose" className="text-zinc-300">Purpose</Label>
              <Textarea 
                id="purpose" 
                value={formData.purpose}
                onChange={handleChange}
                placeholder="Why are you interested in our products? Please provide details..." 
                className="min-h-30 bg-white/5 border-white/10 text-white placeholder:text-zinc-500 focus-visible:ring-amber-500/50" 
                required
              />
            </div>

            <div className="pt-6">
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full h-14 text-lg bg-linear-to-r from-amber-500 to-[#D4AF37] hover:from-amber-600 hover:to-amber-500 text-black font-bold border-none transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit Inquiry"}
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}