import { redirect } from "next/navigation"

interface PageProps {
  searchParams: Promise<{ id?: string; credential?: string; verify?: string }>
}

export default async function VerifyRootPage({ searchParams }: PageProps) {
  const params = await searchParams
  const credentialId = params.id || params.credential || params.verify

  if (credentialId) {
    redirect(`/verify/${encodeURIComponent(credentialId.trim().toUpperCase())}`)
  }

  redirect("/careers#internship-validation")
}
