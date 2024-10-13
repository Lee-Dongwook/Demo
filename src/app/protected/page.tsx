import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { ErrorForm } from "@/components/ErrorForm";
import { ProtectedForm } from "@/components/ProtectedForm";

export default async function ProtectedPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <ErrorForm />;
  }

  return <ProtectedForm />;
}
