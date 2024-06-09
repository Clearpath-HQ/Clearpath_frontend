"use client";

/* eslint-disable react/no-unescaped-entities */
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface AuthFormProps {
  title: string;
  subTitle: string;
  buttonText: string;
  redirect: string;
  footerText: string;
  footerLinkText: string;
}

const AuthForm: React.FC<AuthFormProps> = ({
  title,
  subTitle,
  buttonText,
  redirect,
  footerText,
  footerLinkText,
}) => {
  const router = useRouter();

  const handleGoogleLogin = async (credentialResponse: any) => {
    const idToken = credentialResponse.credential; // Get the ID token from the response

    // Send the ID token to your backend
    try {
      const res = await fetch("http://127.0.0.1:8000/google_auth/google/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ auth_token: idToken }),
      });

      if (res.ok) {
        // Handle successful login (e.g., redirect to the user's dashboard)
        console.log("Login successful!");
        router.push("/dashboard/terminal"); // Redirect to the dashboard or another page
      } else {
        // Handle errors
        console.error("Login failed:", res.status);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  // Ensure environment variables are defined
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  if (!clientId) {
    throw new Error("NEXT_PUBLIC_GOOGLE_CLIENT_ID is not defined");
  }

  console.log(clientId);

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="text-center max-w-md mx-auto p-5 flex flex-col items-center ">
        <h1 className="text-3xl font-bold mb-5 text-green-600">{title}</h1>
        <p className="font-medium text-sm mb-5 text-gray-700">{subTitle}</p>
        <input
          type="email"
          placeholder="Email"
          className="w-[90%] px-4 py-2 mb-5 rounded-lg border-2 border-gray-300"
        />
        <GoogleLogin
          onSuccess={handleGoogleLogin}
          onError={() => console.error("Login failed")}
        />
      </div>
      <div>
        <p className="text-xs text-[#888] mt-[10px] mb-10">
          {footerText}{" "}
          <Link href={redirect} className="text-black font-bold">
            {footerLinkText}
          </Link>
        </p>
      </div>
    </GoogleOAuthProvider>
  );
};

export default AuthForm;
