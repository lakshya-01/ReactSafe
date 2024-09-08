import React from 'react';
import {FaHome, FaPhone, FaMailBulk} from "react-icons/fa";

const containerClasses = "flex items-center text-zinc-700 dark:text-zinc-300";
const inputClasses = "w-full p-3 border border-zinc-300 dark:border-zinc-700 rounded-lg text-zinc-900 dark:text-zinc-100 bg-zinc-50 dark:bg-zinc-700";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-100 dark:bg-zinc-900 p-4">
      <h1 className="text-4xl font-bold text-center mb-10 text-zinc-900 dark:text-zinc-100">CONTACT</h1>
      <div className="w-full max-w-4xl bg-white dark:bg-zinc-800 shadow-md rounded-lg p-6 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
        <MessageForm />
        <ContactInfo />
      </div>
    </div>
  );
};

const MessageForm = () => {
  return (
    <div className="flex-1">
      <h2 className="text-xl text-zinc-700 dark:text-zinc-300 mb-2">Leave a Message</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Your Name..." className={inputClasses} />
        <input type="email" placeholder="Your Email..." className={inputClasses} />
        <input type="text" placeholder="Subject..." className={inputClasses} />
        <textarea placeholder="Messages..." className={`${inputClasses} h-24`}></textarea>
        <button type="submit" className="w-full text-white p-3 rounded-lg hover:bg-blue-600 bg-blue-700">SEND</button>
      </form>
    </div>
  );
};

const ContactInfo = () => {
  return (
    <div className="flex-1">
      <h2 className="text-xl text-zinc-700 dark:text-zinc-300 mb-2">CONTACT US</h2>
      <hr className="border-t-2 border-blue-500 mb-4" />
      <div className="space-y-2">
        <ContactDetail icon={<FaHome />} text="IIT Hyderabad" />
        <ContactDetail text="Kandi, Sangareddy" />
        <ContactDetail icon={<FaPhone />} text="+91 94884 87853" />
        <ContactDetail icon={<FaMailBulk />} text="giridesigns5@gmail.com" />
      </div>
    </div>
  );
};

const ContactDetail = ({ icon, text }) => {
  return (
    <div className={containerClasses}>
      {icon && <span className="w-5 h-5 mr-2">{icon}</span>}
      <span>{text}</span>
    </div>
  );
};

export default Contact;