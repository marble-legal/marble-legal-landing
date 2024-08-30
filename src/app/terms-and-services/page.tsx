import Contactus from "../components/contactus";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Image from "next/image";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

export default function TermsAndServices() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Navbar />
      <div className="relative w-full flex flex-col items-center justify-center pb-[150px]">
        <h1
          className={`text-2xl md:text-[52px] font-bold md:w-[600px] max-w-[600px] text-left mt-10 text-[#0A100B] ${outfit.className}`}
        >
          Terms & conditions
        </h1>
        <p className="text-center md:text-left mt-8 px-4 md:px-0 text-base max-w-[600px] mb-10">
          Marble Legal Solutions Inc provides self-help services at your
          specific direction. We are not a law firm or a substitute for an
          attorney or law firm. Communications between you and Marble Legal
          Solutions Inc are protected by our Privacy Policy but not by the
          attorney-client privilege or as work product. We cannot provide any
          kind of advice, explanation, opinion, or recommendation about possible
          legal rights, remedies, defenses, options, selection of forms, or
          strategies. Your access to our website is subject to our Terms of
          Service.
        </p>

        <Image
          src="/Section-2-bg.png"
          alt="background"
          layout="intrinsic"
          height={267}
          width={1920}
          objectFit="none"
          className="absolute bottom-0 left-0 hidden md:block h-[267px] w-full"
          priority
        />
      </div>
      <Contactus />
      <Footer />
    </main>
  );
}
