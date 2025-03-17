import React from "react";
import Link from 'next/link';

const Contact = () => {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold">Contact Page</h1>
        <p>This is the contact page linked from the homepage.</p>
        <Link href="/">
        <p className="text-blue-500 underline cursor-pointer mt-2">Back to Home</p>
      </Link>
      </div>
    );
  };
  
  export default Contact;