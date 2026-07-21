"use client";

import dynamic from "next/dynamic";

// ⛔ Prevent SSR
const Spline = dynamic(
    () => import("@splinetool/react-spline"),
    { ssr: false }
);

export default function SplineScene() {
    return (
        <div className="w-full h-75 md:h-100 relative">
            <Spline scene="https://prod.spline.design/YOUR-REMIX-ID/scene.splinecode" />
            <div className="bg-black absolute bottom-3 h-6"></div>
        </div>
    );
}
