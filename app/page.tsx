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
  const router = useRouter();

  useEffect(() => {
    checkForSession();
  }, []);

  const checkForSession = async () => {
    try {
      const res = await AuthService.getLoggedInUser();
      router.replace("/homepage");
    } catch (error: any) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <main className="flex lg:h-screen bg-[#FAFAFA] min-h-screen flex-col sm:justify-center sm:items-center p-8 gap-16">
      <div className="sm:w-[476px] flex flex-col gap-16">
        <div className="w-full flex sm:justify-center items-center gap-2">
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
        </div>
        <div className="w-full flex flex-col gap-6  sm:bg-white sm:p-10 rounded-xl">
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
      </div>
    </main>
  );
}
