import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-gray-400 pt-20 pb-10 px-6 md:px-16">
      <div className="container mx-auto w-10/12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 mb-16">
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-black text-white tracking-tight">
              DigiTools
            </h2>
            <p className="text-sm leading-relaxed max-w-xs">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>
          <div className="flex gap-16">
            <div>
              <h4 className="text-white font-bold mb-6">Product</h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Feature
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Templates
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Company</h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Press
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Resources</h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">       
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:ml-20">
            <h4 className="text-white font-bold ml-3 mb-6">Social Links</h4>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer">
                <i class="fa-brands fa-youtube"></i>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer">
                <i class="fa-brands fa-square-facebook"></i>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer">
                <i class="fa-brands fa-square-x-twitter"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 DigiTools. All rights reserved.</p>
          <div className="flex gap-8 ">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
