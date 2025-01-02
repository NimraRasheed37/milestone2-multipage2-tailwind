import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-full bg-[#0f0f0f] text-white p-4 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="footer-section">
        <p className="title text-3xl font-extrabold text-white mb-2 opacity-100 text-shadow-lg">
          Foodily.com
        </p>
        <p className="opacity-90 mb-2">
          Foodily Ever After is a place where you can please your soul and tummy
          with delicious food recipes of all cuisines. And our service is
          absolutely free.
        </p>
        <p className="opacity-90">&copy; 2021 | All Rights Reserved</p>
      </div>
      <div className="footer-section">
        <p className="heading text-xl font-extrabold text-white mb-3 opacity-100">
          Contact Us
        </p>
        <p className="opacity-90">foodily@gmail.com</p>
        <p className="opacity-90">+92 309 4782394</p>
        <p className="opacity-90">F-12 Sector V Islamabad</p>
      </div>
      <div className="footer-section">
        <p className="heading text-xl font-extrabold text-white mb-3 opacity-100">
          Socials
        </p>
        <div className="social-icons flex justify-start gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-white bg-blue-600 rounded " size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-white bg-blue-400 rounded " size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white bg-red-600 rounded " size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}
