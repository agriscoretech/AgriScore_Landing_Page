import { Metadata } from "next"
import { getCredentialById, getAllCredentialIds } from "@/lib/internship-registry"
import { CredentialDetailView } from "@/components/credential-detail-view"

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return getAllCredentialIds().map((id) => ({
    id,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const credential = getCredentialById(id)

  if (!credential) {
    return {
      title: `Credential Verification - ${id} | AgriScore Registry`,
      description: "Official credential verification portal for AgriScore Private Limited.",
    }
  }

  return {
    title: `Verified Certificate: ${credential.name} (${credential.id}) | AgriScore`,
    description: `Official verification record for ${credential.name} - ${credential.role} at AgriScore Research Labs. Authenticated via Cryptographic Registry.`,
  }
}

export default async function VerifyDetailPage({ params }: PageProps) {
  const { id } = await params
  const credential = getCredentialById(id)

  return <CredentialDetailView credential={credential} id={id} />
}
