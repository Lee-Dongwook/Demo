"use client";
import Link from "next/link";

export const ErrorForm = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          접근 권한 없음
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          이 페이지를 보려면 로그인이 필요합니다.
        </p>
        <Link href="/" legacyBehavior>
          <a className="px-4 py-2 bg-blue-500 text-white text-xl font-semibold rounded">
            로그인하기
          </a>
        </Link>
      </div>
    </div>
  );
};
