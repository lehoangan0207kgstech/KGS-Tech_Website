import React, { useState } from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">About Us</h4>
            <p className="text-sm">
              We provide the best solutions for lifting and storage equipment for
              stone and glass slabs.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-sm">Email: lehoangan.0207.kgstech@gmail.com</p>
            <p className="text-sm">Phone: +84 123 456 79</p>
          </div>

          {/* Social Media Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://facebook.com"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 text-center py-4">
        <p className="text-sm">&copy; Create By Hoang An 2024 KGS-Tech </p>
      </div>
    </footer>
  );
};

export default Footer;
