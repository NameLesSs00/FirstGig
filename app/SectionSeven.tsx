import React from "react";
import { Instagram, Bookmark, Linkedin, Mail, MapPin } from "lucide-react";

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <a
    href={href}
    className="text-gray-300 hover:text-white transition-colors duration-200 block mt-2 text-sm md:text-base"
  >
    {children}
  </a>
);

const SectionSeven: React.FC = () => {
  return (
    <footer className="w-full bg-neutral-900 text-gray-200 font-['Inter']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Column 1: Branding */}
          <div>
            <h3 className="text-xl font-bold mb-3">
              Maria Willem – Interior & Décor Designer
            </h3>
            <p className="text-gray-400 text-sm">
              Designing spaces that tell your story.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-1">
              {[
                { name: "Home", href: "#Home" },
                { name: "About Me", href: "#About" },
                { name: "Services", href: "#Services" },
                { name: "Portfolio", href: "#Portfolio" },
                { name: "Testimonials", href: "#Testimonials" },
                { name: "Contact", href: "#Contact" },
              ].map((item) => (
                <FooterLink key={item.name} href={item.href}>
                  {item.name}
                </FooterLink>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Details</h4>
            <div className="flex flex-col space-y-3">
              <FooterLink href="mailto:hello@mariawillem.com">
                <div className="flex items-center">
                  <Mail size={16} className="mr-2 text-gray-400" />
                  <span className="text-sm">hello@mariawillem.com</span>
                </div>
              </FooterLink>
              <FooterLink href="#Contact">
                <div className="flex items-center">
                  <MapPin size={16} className="mr-2 text-gray-400" />
                  <span className="text-sm">Amsterdam, Netherlands</span>
                </div>
              </FooterLink>
            </div>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Social Media</h4>
            <div className="flex flex-col space-y-3">
              <FooterLink href="#Instagram">
                <div className="flex items-center group">
                  <Instagram
                    size={20}
                    className="mr-3 text-gray-400 group-hover:text-white transition-colors"
                  />
                  <span className="text-sm">Instagram</span>
                </div>
              </FooterLink>

              <FooterLink href="#Pinterest">
                <div className="flex items-center group">
                  <Bookmark
                    size={20}
                    className="mr-3 text-gray-400 group-hover:text-white transition-colors"
                  />
                  <span className="text-sm">Pinterest</span>
                </div>
              </FooterLink>

              <FooterLink href="#LinkedIn">
                <div className="flex items-center group">
                  <Linkedin
                    size={20}
                    className="mr-3 text-gray-400 group-hover:text-white transition-colors"
                  />
                  <span className="text-sm">LinkedIn</span>
                </div>
              </FooterLink>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="w-full border-t border-gray-700/50 py-4 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-xs md:text-sm">
            © 2025 Maria Willem. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SectionSeven;
