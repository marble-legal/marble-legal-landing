import Image from "next/image";
import { Outfit } from "next/font/google";
import clsx from "clsx";
import Button from "@/components/button";
import FaqCard from "@/components/faq-card";
import Hero from "./components/hero";
import About from "./components/about";
import Features from "./components/features";
import VS from "./components/vs";
import Lara from "./components/lara";
import Contract from "./components/contract";
import Faqs from "./components/faq";
import Testimonials from "./components/testimontials";
import Contactus from "./components/contactus";
import Footer from "./components/footer";

const outfit = Outfit({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />
      <About />
      <Features />
      <VS />
      <Lara />
      <Contract />
      <Faqs />
      {/* <Testimonials /> */}
      <Contactus />
      <Footer />
    </main>
  );
}
