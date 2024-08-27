import Contactus from "../components/contactus";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
export default function TermsAndServices() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Navbar />

      <h1 className="text-4xl font-bold text-center mt-10">
        Terms and Services
      </h1>
      <p className="text-center mt-4 text-lg max-w-[600px] mb-10">
        Marble Legal Solutions Inc provides self-help services at your specific
        direction. We are not a law firm or a substitute for an attorney or law
        firm. Communications between you and Marble Legal Solutions Inc are
        protected by our Privacy Policy but not by the attorney-client privilege
        or as work product. We cannot provide any kind of advice, explanation,
        opinion, or recommendation about possible legal rights, remedies,
        defenses, options, selection of forms, or strategies. Your access to our
        website is subject to our Terms of Service.
      </p>

      <Contactus />
      <Footer />
    </main>
  );
}
