import Header from "components/Header";
import Contacts from "components/Contacts";
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
                    <Image src={"/statics/contact_icon.png"} alt="section-image" width={500} height={100} className="w-1/2 h-auto" />
                    }
                />
                <Contacts/>
            </main>
            <div className="h-20" ></div>
            <Footer />
        </div>
    );
  };
  
  export default Contact;