/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from "next/image";

interface AuthFormProps {
  title: string;
  subTitle: string;
  buttonText: string;
  redirect: string;
}

const AuthForm: React.FC<AuthFormProps> = ({
  title,
  subTitle,
  buttonText,
  redirect,
}) => {
  return (
    <>
      <div></div>
      <div className="text-center max-w-md mx-auto p-5 flex flex-col items-center ">
        <h1 className="text-3xl font-bold mb-5 text-green-600">{title}</h1>
        <p className="font-medium text-sm mb-5 text-gray-700">{subTitle}</p>
        <input
          type="email"
          placeholder="Email"
          className="w-[90%] px-4 py-2 mb-5 rounded-lg border-2 border-gray-300"
        />
        <Link href="#" passHref className="flex">
          <Image
            alt="google-icon"
            height={20}
            src='/google.png'
            width={20}
            className="mr-3"
          />
          <span className="text-sm font-medium text-gray-900">
            {buttonText}
          </span>
        </Link>
      </div>
      <div>
        <p className="text-xs text-[#888] mt-[10px] mb-10">
          Don't have an account?{" "}
          <Link href={redirect} className="text-black font-bold">
            Sign Up
          </Link>
        </p>
      </div>
    </>
  );
};

export default AuthForm;
