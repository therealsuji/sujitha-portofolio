"use client";

import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { loginUser } from "./login-action";
import { useStateAction } from "next-safe-action/hooks";
import { toast } from "sonner";
import { getFirstZodError } from "@/lib/action-utils";

function Login() {
  const { execute } = useStateAction(loginUser, {
    onError: (e) => {
      const error = getFirstZodError(e.error.validationErrors);
      if (error) {
        toast.error(error);
      }
    },
    onSuccess: (data) => {
      if (data.data.error) {
        toast.error(data.data.error);
      } else {
        toast.success(data.data.success);
      }
    },
  });

  return (
    <div className="h-screen flex place-items-center place-content-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <form action={execute}>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" placeholder="m@example.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input name="password" id="password" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              Sign in
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

export default Login;
