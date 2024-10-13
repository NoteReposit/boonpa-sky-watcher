import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
            <p className="text-2xl text-black mb-4">โอ๊ะ! ไม่พบหน้าเพจ.</p>
            <Link to="/" className="text-sky-800 hover:text-sky-900 text-lg">
            กลับไปยังหน้าแรก
            </Link>
        </div>
    )
}

export default NotFoundPage;