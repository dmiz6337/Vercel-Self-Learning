import Header from "components/Header";
import Features from "components/Features";
import Section from "components/Section";
import Footer from "components/Footer";
import DownloadButton from 'components/DownloadButton';
import Image from "next/image";
import React from "react";
import Link from 'next/link';

const Information = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-black">
            <Header />
            <main>
                <Section
                    leftHalf={
                    <>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                        Information Board
                        </h2>
                        <p className="text-xl font-light">
                        Portal for relevant building files.
                        </p>
                    </>
                    }
                    rightHalf={
                    <Image src={"/products/phone.png"} alt="section-image" width={500} height={100} className="w-1/2 h-auto" />
                    }
                />
                <Section
                    leftHalf={
                    <>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                        2024 Financial Report
                        </h2>
                        <p className="text-xl font-light">
                        Financial reports for the financial year ending in 2024.
                        </p>
                    </>
                    }
                    rightHalf={
                        <DownloadButton/>
                    }
                />
                <Section
                    leftHalf={
                    <>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                        Building Management & Insurance Certificates
                        </h2>
                        <p className="text-xl font-light">
                        Insurance certificates for building facilities & management staff.
                        </p>
                    </>
                    }
                    rightHalf={
                        <DownloadButton/>
                    }
                />
                <div className="flex justify-center space-x-6">
                    <Link
                    href="/"
                    className="bg-black text-white dark:bg-white dark:text-black px-5 py-2 rounded-md text-base font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition duration-300"
                    >
                    Return Home
                    </Link>
                </div>
            </main>
            <div className="h-20" ></div>
            <Footer />
        </div>
    );
  };
  
  export default Information;