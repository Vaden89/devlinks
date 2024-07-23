"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Loading } from "./components/Loading";
import { AuthService } from "./services/auth.service";
import { LoginSection } from "./components/LoginSection";
import { SignupSection } from "./components/SignupSecton";

export default function Home() {
  const [showCreateAccount, setShowCreateAccount] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    checkForSession();
  }, []);

  const checkForSession = async () => {
    try {
      const res = await AuthService.getLoggedInUser();
      console.log(res);
    } catch (error: any) {
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-8 gap-16">
      <h1 className="w-full flex items-center gap-2">
        <Image
          src={"/devlinkslogo.png"}
          width={24}
          height={24}
          alt=""
          className="w-10 aspect-square"
        />
        <Image
          src={"/devlinks.png"}
          width={50}
          height={50}
          alt=""
          className="w-[135px] h-full"
        />
      </h1>
      <div className="w-full flex flex-col gap-6">
        {showCreateAccount ? <SignupSection /> : <LoginSection />}
        <div className="flex flex-col items-center text-[#737373] leading-6">
          {showCreateAccount ? (
            <span>Already have an account?</span>
          ) : (
            <span>Don&apos;t have an account?</span>
          )}
          <button
            onClick={() => setShowCreateAccount((prev) => !prev)}
            className="text-[#633CFF]"
          >
            {showCreateAccount ? "Login" : "Create account"}
          </button>
        </div>
      </div>
    </main>
  );
}
