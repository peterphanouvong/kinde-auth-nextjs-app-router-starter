import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

export default function NotAuthorized() {
  return (
    <main>
      not authorized, please <LoginLink>Login</LoginLink> or{" "}
      <RegisterLink>Create an account</RegisterLink>
    </main>
  );
}
