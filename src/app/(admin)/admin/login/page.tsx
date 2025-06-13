"use client";
import Image from "next/image";
import { login } from "./actions";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useState } from "react";

export default function LoginPage() {
  const [captchaToken, setCaptchaToken] = useState<string>("");
  return (
    <div className="bg-gradient-to-br from-[#2C2C2C] via-[#3D3D3D] to-[#1A1A1A]  w-screen h-screen flex justify-center items-center flex-col">
      <div className="relative w-[25%] bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-2xl">
        <Image
          className="drop-shadow-2xl"
          src="/logo.png"
          width={300}
          height={350}
          alt="Company Logo"
          style={{
            filter: "drop-shadow(0 10px 30px rgba(127, 100, 86, 0.3))",
          }}
        />
        {/* Decorative Corner Elements */}
        <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-[#7F6456]/40"></div>
        <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-[#7F6456]/40"></div>
        <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-[#7F6456]/40"></div>
        <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-[#7F6456]/40"></div>
      </div>
      <form className="p-4 w-[25%]">
        <div className="group">
          <div className="group">
            <label
              htmlFor="email"
              className="block text-[#D4C4B0] font-medium mb-2 transition-colors duration-300 group-focus-within:text-[#7F6456]"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full bg-transparent border-b-2 border-white/30 pb-3 text-white text-lg placeholder:text-white/50 focus:outline-none focus:border-[#7F6456] transition-colors duration-300"
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <HCaptcha
            theme={"dark"}
            sitekey={"5b709758-01c8-42cc-b5c6-ac0a15eadb74"}
            onVerify={(token) => {
              setCaptchaToken(token);
            }}
          />
        </div>
        <button
          formAction={(e) => login(e, captchaToken)}
          className="px-6 py-2 mt-10 w-full bg-[#7F6456]/20 backdrop-blur-xl border border-[#7F6456]/30 rounded-lg text-amber-100 font-semibold hover:bg-[#7F6456]/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 "
        >
          Login
        </button>
        {/* <form>
          <label htmlFor="email">Email:</label>
          <input id="email" name="email" type="email" required />
          <label htmlFor="password">Password:</label>
          <input id="password" name="password" type="password" required />
          <button formAction={login}>Log in</button>
        </form> */}
      </form>
    </div>
  );
}
