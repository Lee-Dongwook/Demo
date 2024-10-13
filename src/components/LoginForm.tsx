"use client";

import { useState, useEffect } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [, setError] = useState<string>("");

  const router = useRouter();

  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");

    if (savedEmail) {
      setEmail(savedEmail);
    } else {
      setEmail("");
    }

    if (savedPassword) {
      setPassword(savedPassword);
    } else {
      setPassword("");
    }
  }, []);

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleGoogleLogin = () => {
    signIn("google", { redirect: true, callbackUrl: "/protected" });
  };

  const handleGithubLogin = () => {
    signIn("github", { redirect: true, callbackUrl: "/protected" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    const response = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (response?.error) {
      setError(response.error);
    } else {
      router.push("/protected");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-left">로그인</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-lg font-medium">
              이메일
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={handleChangeEmail}
              placeholder="your-email@example.com"
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-lg font-medium">
              비밀번호
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={password}
              onChange={handleChangePassword}
              placeholder="비밀번호를 입력하세요"
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-md"
          >
            로그인
          </button>
        </form>
        <div className="flex flex-col">
          <button
            className="w-full px-4 py-2 border text-black bg-transparent rounded-md"
            onClick={handleGoogleLogin}
          >
            Sign in with Google
          </button>
          <button
            className="w-full px-4 py-2 mt-4 border text-black bg-transparent rounded-md"
            onClick={handleGithubLogin}
          >
            Sign in with GitHub
          </button>
        </div>
      </div>
    </div>
  );
};
