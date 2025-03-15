"use client";

import Image from "next/image";
import { NextPage } from "next";
import Sidebar from "~~/components/Sidebar";

const Agents: NextPage = () => {
  return (
    <div className="flex h-screen bg-black text-white">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-[84px] border-b border-neutral-800 flex items-center justify-between px-6">header</header>

        {/* Content */}
        <main className="flex-1 p-6 bg-neutral-900">ask</main>
      </div>
    </div>
  );
};

export default Agents;
