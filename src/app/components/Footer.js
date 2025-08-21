import Image from "next/image";
import Link from "next/link";
import { InstagramIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-white text-sm text-gray-600 pt-10 pb-6 px-4 sm:px-10 overflow-hidden">
      {/* Background image */}
      <div className="absolute right-0 top-0 translate-y-[-20%] opacity-20 pointer-events-none z-0">
        <Image
          src="/images/background-image-footer.png"
          alt="Footer background"
          width={600}
          height={400}
          className="object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 relative z-10">
        {/* Logo & Description & Social */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-800 flex items-center">
            Exventuro
          </h2>
          <p>Exventuro helps plan and manage your tours easily.</p>
          <div className="flex space-x-4 text-blue-500 text-lg">
            <a
              href="https://www.instagram.com/exventuro?igsh=MXFuazQwNDlyazV5aQ=="
              aria-label="Instagram"
            >
              <InstagramIcon className="hover:scale-110 transition" />
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-800">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:text-blue-500">
                About Us
              </Link>
            </li>
            {/* temporarily removed: to be added later */}
            {/* <li>
              <Link href="#" className="hover:text-blue-500">
                Blog
              </Link>
            </li> */}
            <li>
              <Link
                href="https://wa.me/14038351646"
                className="hover:text-blue-500"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Destinations */}
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-800">Destinations</h3>
          <ul className="space-y-2">
            <li>
              <p>British Colombia</p>
            </li>
            <li>
              <p>Banff national park</p>
            </li>
            <li>
              <p>Saskatchewan</p>
            </li>
            <li>
              <p>Edmonton</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="my-6 border-t border-gray-200" />

      {/* Copyright */}
      <p className="text-center text-xs text-gray-500 relative z-10">
        Copyright © XYZ 2025. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
