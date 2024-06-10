import { getUser } from "@/lib/auth-helper";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

async function LoginLayout({ children }: { children: ReactNode }) {
  const user = await getUser();
  
  if (user !== null) {
    return redirect("/blog/new");
  }
  return children;
}

export default LoginLayout;
