"use client";

import { useRef } from "react";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex bg-white text-black min-h-screen">
      <Header />
      <main className="ml-64 p-6 w-full ">
        <h1 className="text-2xl font-bold">Productos</h1>
      </main>
    </div>
  );
}
