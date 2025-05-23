"use client";

import { useRef } from "react";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="flex">
      <Header />
      <main className="ml-64 p-6 w-full">
        <h1 className="text-2xl font-bold">Bienvenido al Dashboard</h1>
      </main>
    </div>
  );
}
