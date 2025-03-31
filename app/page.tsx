import Header from "components/Header";
import Hero from "components/Hero";
import Features from "components/Features";
import Section from "components/Section";
import Footer from "components/Footer";
import Customers from "components/Customers";
import Image from "next/image";
import Accordion from "components/Accordion";
import Reviews from "components/Reviews";
import Download from "components/Download";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Header />
      <div
          className="w-screen h-screen bg-cover bg-center bg-top"
          style={{ backgroundImage: "url('/statics/banner.jpeg')" }}
        >
        <Hero />
      </div>
      <div className="h-20" ></div>
        <main>
          <Features/> 
          <Reviews />
        </main>
      <Footer />
    </div>
  );
}
