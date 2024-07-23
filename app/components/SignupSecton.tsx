"use client";
import { useState } from "react";
import { Loading } from "./Loading";
import { AuthService } from "../services/auth.service";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SignupSection = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [passwordConfirmError, setPasswordConfirmError] = useState<
    string | null
  >(null);

  const login = async () => {
    try {
      const res = await AuthService.login(email, password);
      console.log(res);
    } catch (error: any) {
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  };

  const createAccount = async () => {
    setLoading(true);
    try {
      const res = await AuthService.createUser(email, password);
      login();
      console.log(res);
    } catch (error: any) {
      throw new Error(error);
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

    if (password !== passwordConfirm) {
      setPasswordConfirmError("Passwords do not match.");
      valid = false;
    } else {
      setPasswordConfirmError(null);
    }

    if (valid) {
      createAccount();
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="w-full flex flex-col gap-10">
      <div className="flex flex-col w-full gap-2">
        <h2 className="text-2xl font-bold">Create account</h2>
        <p className="text-[#727272] text-base font-normal font-['Instrument Sans'] leading-normal">
          Let&apos;s get you started sharing your links!
        </p>
      </div>
      <div className="w-full">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full h-full gap-6"
        >
          <div className="flex flex-col w-full gap-1">
            <label htmlFor="email" className="text-xs leading-[18px]">
              Email address
            </label>
            <div className="h-12 px-4 py-3 bg-white rounded-lg border border-[#d9d9d9] justify-start items-center gap-3 inline-flex">
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
            {emailError && <p className="text-red-500 text-xs">{emailError}</p>}
          </div>
          <div className="flex flex-col w-full gap-1">
            <label htmlFor="password" className="text-xs leading-[18px]">
              Password
            </label>
            <div className="h-12 px-4 py-3 bg-white rounded-lg border border-[#d9d9d9] justify-start items-center gap-3 inline-flex">
              <FontAwesomeIcon
                icon={faLock}
                className="w-4 h-4 text-[#737373]"
              />
              <input
                type="password"
                name="password"
                id="password"
                className="w-full"
                placeholder="At least 8 characters"
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
          <div className="flex flex-col w-full gap-1">
            <label
              htmlFor="password-confirm"
              className="text-[#333333] text-xs font-normal font-['Instrument Sans'] leading-[18px]"
            >
              Confirm password
            </label>
            <div className="h-12 px-4 py-3 bg-white rounded-lg border border-[#d9d9d9] justify-start items-center gap-3 inline-flex">
              <FontAwesomeIcon
                icon={faLock}
                className="w-4 h-4 text-[#737373]"
              />
              <input
                type="password"
                name="password-confirm"
                id="password-confirm"
                className="w-full"
                placeholder="At least 8 characters"
                value={passwordConfirm}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPasswordConfirm(e.target.value)
                }
              />
            </div>
            {passwordConfirmError && (
              <p className="text-red-500 text-xs">{passwordConfirmError}</p>
            )}
          </div>
          <span className="text-[#727272] text-xs font-normal leading-[18px]">
            Password must contain at least 8 characters
          </span>
          <button
            type="submit"
            className="bg-[#633CFF] text-white py-3 rounded-lg"
          >
            Create new account
          </button>
        </form>
      </div>
    </section>
  );
};
