import { getUser } from "@/lib/auth-helper";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

async function AuthLayout({ children }: { children: ReactNode }) {
  const existingUser = await getUser();
  if (!existingUser) {
    return redirect("/login");
  }

  return children;
}

export default AuthLayout;
