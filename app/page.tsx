"use client";
import { useState } from "react";
import Image from "next/image";
import { LoginSection } from "./components/LoginSection";
import { SignupSection } from "./components/SignupSecton";

export default function Home() {
  const [showCreateAccount, setShowCreateAccount] = useState<boolean>(false);

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
            width={120}
            height={120}
            alt=""
            className=""
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
