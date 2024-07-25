"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loading } from "./Loading";
import { AuthService } from "../services/auth.service";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export const LoginSection = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [loginError, setLoginError] = useState<string | null>(null);
  const router = useRouter();

  const login = async () => {
    setLoading(true);
    window.sessionStorage.clear();
    try {
      window.sessionStorage.clear();
      const res = await AuthService.login(email, password);
      console.log(res);
      router.replace("/homepage");
    } catch (error: any) {
      setLoginError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let valid = true;

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      valid = false;
    } else {
      setEmailError(null);
    }

    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
      valid = false;
    } else {
      setPasswordError(null);
    }

    if (valid) {
      login();
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <section className="w-full flex flex-col gap-10">
        <div className="flex flex-col w-full gap-2">
          <h2 className="text-2xl font-bold">Login</h2>
          <p className="text-[#727272] text-base font-normal font-['Instrument Sans'] leading-normal">
            Add your details below to get back into the app
          </p>
        </div>
        <div className="w-full">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full h-full gap-6 text-[#333333]"
          >
            <div className="flex flex-col w-full gap-1">
              <label htmlFor="email" className="text-xs leading-[18px]">
                Email address
              </label>
              <div className="h-12 px-4 py-3 bg-white rounded-lg border border-[#d9d9d9] justify-start items-center gap-3 inline-flex hover:border hover:border-[#623bff] hover-effect">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="w-4 h-4 text-[#737373]"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full"
                  placeholder="e.g. alex@email.com"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                />
              </div>
              {emailError && (
                <p className="text-red-500 text-xs">{emailError}</p>
              )}
            </div>
            <div className="flex flex-col w-full gap-1">
              <label htmlFor="password" className="text-xs leading-[18px]">
                Password
              </label>
              <div className="h-12 px-4 py-3 bg-white rounded-lg border border-[#d9d9d9] justify-start items-center gap-3 inline-flex hover:border hover:border-[#623bff] hover-effect">
                <FontAwesomeIcon
                  icon={faLock}
                  className="w-4 h-4 text-[#737373]"
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="w-full"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value)
                  }
                />
              </div>
              {passwordError && (
                <p className="text-red-500 text-xs">{passwordError}</p>
              )}
            </div>
            <button
              type="submit"
              className="bg-[#633CFF] text-white py-3 rounded-lg hover:bg-[#BEADFF]"
            >
              Login
            </button>
            {loginError && <p className="text-red-500 text-xs">{loginError}</p>}
          </form>
        </div>
      </section>
    </div>
  );
};
