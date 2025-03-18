import Header from "components/Header";
import Features from "components/Features";
import Section from "components/Section";
import Footer from "components/Footer";
import Image from "next/image";
import React from "react";
import Link from 'next/link';

const Contact = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-black">
            <Header />
            <main>
                <Section
                    leftHalf={
                    <>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                        Contacts
                        </h2>
                        <p className="text-xl font-light">
                        Reach out for any building-related queries!
                        </p>
                    </>
                    }
                    rightHalf={
                    <Image src={"/products/phone.png"} alt="section-image" width={500} height={100} className="w-1/2 h-auto" />
                    }
                />
                <div className="flex justify-center space-x-6">
                    <Link
                    href="/"
                    className="bg-black text-white dark:bg-white dark:text-black px-5 py-2 rounded-md text-base font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition duration-300"
                    >
                    Learn More
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    );
  };
  
  export default Contact;