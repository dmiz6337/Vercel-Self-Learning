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
      <div className="relative w-screen h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(https://strata-management-vercel.vercel.app/statics/banner.jpeg)',
            zIndex: 0
          }}
        />
        <div className="relative z-10">
          <Hero />
        </div>
      </div>
      <div className="h-20" ></div>
        <main>
          <Features/> 
          <div className="h-20" ></div>
          <Reviews />
        </main>
      <Footer />
    </div>
  );
}
