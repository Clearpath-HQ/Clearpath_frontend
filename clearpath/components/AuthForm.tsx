/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from "next/image";

interface AuthFormProps {
  title: string;
  buttonText: string;
  buttonIcon: string;
  buttonAltText: string;
  buttonLink: string;
}

const AuthForm: React.FC<AuthFormProps> = ({ title, buttonText, buttonIcon, buttonAltText, buttonLink }) => {
  return (
    <div className="text-center max-w-md mx-auto p-5 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-5 text-green-600">
        {title}
      </h1>
      <p className="font-medium text-sm mb-5 text-gray-700">
        Welcome back, you can enter your email or login with your google account
      </p>
      <input
        type="email"
        placeholder="Email"
        className="w-[90%] px-4 py-2 mb-5 rounded-lg border-2 border-gray-300"
      />
      <Link href="#" passHref className="flex">
          <Image
            alt={buttonAltText}
            height={20}
            src={buttonIcon}
            width={20}
            className="mr-3"
          />
          <span className="text-sm font-medium text-gray-900">
            {buttonText}
          </span>
        
      </Link>
      <p className="text-xs text-[#888] mt-[10px]">
        Don't have an account?{" "}
        <Link href={buttonLink} className="text-black font-bold">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default AuthForm;