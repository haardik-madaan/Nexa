import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Nexa</h2>
          <p className="text-sm text-gray-400">
            Building reliable, scalable, and elegant digital solutions with 
            a streamlined workflow from idea to execution.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            {/* <li><a href="#services" className="hover:text-white">Services</a></li> */}
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="https://x.com/haardik_madaan" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: <a href="haardikmadaan@gmail.com" className="hover:text-white">haardikmadaan@gmail.com</a></li>
            <li>Phone: +91 8168113108</li>
            <li>Address: Bennett University, Greater Noida, India</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            {/* <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
              <FaFacebookF />
            </a> */}
            <a href="https://x.com/haardik_madaan" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/haardik-madaan-2040ba25b/" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
              <FaLinkedinIn />
            </a>
            {/* <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
              <FaInstagram />
            </a> */}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Nexa. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
