// src/components/Footer.jsx
import React, { useState } from 'react';
import { footerData } from '../static';
import { FaTelegramPlane, FaInstagram, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email.trim() === '') {
      alert('Iltimos, email manzilingizni kiriting.');
      return;
    }
    alert(`Obuna bo‘lganingiz uchun rahmat, ${email}!`);
    setEmail('');
  };

  return (
    <footer className="bg-[#0f1117] text-white border-t border-[#2c2f36] py-10">
      <div className="container mx-auto px-4 grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

        {/* Column 1: Company Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">{footerData[0].title}</h3>
          <ul className="space-y-2">
            {footerData[0].links.map((item, idx) => (
              <li key={idx} className="text-sm text-[#a0a4ac] hover:text-blue-500 transition-colors cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2: Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Bog‘lanish</h3>
          <ul className="space-y-4 text-sm text-[#a0a4ac]">
            <li className="flex items-center gap-3 hover:text-blue-500 transition-colors">
              <FaPhoneAlt size={16} />
              <a href="tel:+998949398596" className="underline">+998 94 939 85 96</a>
            </li>
            <li className="flex items-center gap-3 hover:text-blue-500 transition-colors">
              <FaTelegramPlane size={16} />
              <a
                href="https://t.me/example_channel"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                @example_channel
              </a>
            </li>
            <li className="flex items-center gap-3 hover:text-blue-500 transition-colors">
              <FaInstagram size={16} />
              <a
                href="https://instagram.com/example_profile"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                @example_profile
              </a>
            </li>
          </ul>

          {/* Email Subscription */}
          <div className="mt-6">
            <p className="text-sm text-[#a0a4ac] mb-2">Email orqali yangiliklarga yoziling:</p>
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Email manzilingiz"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow px-3 py-2 rounded-md bg-[#1a1d23] border border-[#3b82f6] text-white placeholder:text-[#6b7280] focus:outline-none focus:border-blue-400"
              />
              <button
                onClick={handleSubscribe}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold transition"
              >
                Yuborish
              </button>
            </div>
          </div>
        </div>

        {/* Column 3: Payments */}
        <div>
          <h3 className="text-lg font-semibold mb-4">{footerData[1].title}</h3>
          <ul className="space-y-2">
            {footerData[1].links.map((item, idx) => (
              <li key={idx} className="text-sm text-[#a0a4ac] hover:text-blue-500 cursor-pointer transition-colors">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Products */}
        <div>
          <h3 className="text-lg font-semibold mb-4">{footerData[2].title}</h3>
          <ul className="space-y-2">
            {footerData[2].links.map((item, idx) => (
              <li key={idx} className="text-sm text-[#a0a4ac] hover:text-blue-500 cursor-pointer transition-colors">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-[#2c2f36] pt-6 text-center text-xs text-[#6b7280]">
        &copy; {new Date().getFullYear()} Storé. Barcha huquqlar himoyalangan.
      </div>
    </footer>
  );
};

export default React.memo(Footer);
