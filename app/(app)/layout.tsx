import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-[#FDF6F0] w-screen overflow-x-hidden min-h-screen">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default layout;
