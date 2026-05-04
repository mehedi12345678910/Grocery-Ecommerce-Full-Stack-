import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-orange-600 text-white">
      {/* Main Footer Content */}
      <div className="footer sm:footer-horizontal p-10 max-w-7xl mx-auto">
        <aside className="flex flex-col gap-2">
          <Logo />
          <p className="font-bold text-lg text-yellow-400">
            Khaas O Shuddho Bazar
          </p>
          <p className="max-w-xs opacity-80">
            Amra apnader dicchi shuddho moshla, premium morich er gura ebong 
            shustho thakar jonno proyojoniyo grocery item. 
            <br />
            Prokritir shad, ekhon apnar rannaghor-e.
          </p>
        </aside>

        <nav>
          <h6 className="footer-title text-yellow-400 opacity-100">Amader Ponno</h6>
          <a className="link link-hover">Khati Morich Gura</a>
          <a className="link link-hover">Holud & Ada Gura</a>
          <a className="link link-hover">Gura Moshla Mix</a>
          <a className="link link-hover">Premium Groceries</a>
        </nav>

        <nav>
          <h6 className="footer-title text-yellow-400 opacity-100">Quick Links</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Delivery Charge</a>
          <a className="link link-hover">Refund Policy</a>
          <a className="link link-hover">Contact</a>
        </nav>

        <nav>
          <h6 className="footer-title text-yellow-400 opacity-100">Jogajog</h6>
          <p className="flex items-center gap-2">📍 Dhaka, Bangladesh</p>
          <p className="flex items-center gap-2">📞 +880 1XXX-XXXXXX</p>
          <p className="flex items-center gap-2">✉️ info@yourgrocery.com</p>
          
          <div className="grid grid-flow-col gap-4 mt-2">
             {/* Social Icons Placeholder */}
             <span className="cursor-pointer hover:text-yellow-400">Facebook</span>
             <span className="cursor-pointer hover:text-yellow-400">WhatsApp</span>
          </div>
        </nav>
      </div>

      {/* Bottom Copyright Section */}
      {/* <div className="footer-center p-4 bg-green-950 text-white/60 border-t border-green-800"> */}
      <div className="footer-center p-4 bg-green-950 text-white/60 border-t border-primary">
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All right reserved by Your Grocery Brand</p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;