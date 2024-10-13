"use client";
import { signOut } from "next-auth/react";

export const ProtectedForm = () => {
  const handleLogout = async () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    await signOut({ redirect: true, callbackUrl: "/" });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">보호된 페이지</h1>
        <p className="text-lg text-gray-600 mb-4">
          이 페이지는 로그인 된 사용자만 볼 수 있습니다.
        </p>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-blue-500 text-white text-xl font-semibold rounded hover:bg-blue-600 transition-colors"
        >
          로그아웃
        </button>
      </div>
    </div>
  );
};
