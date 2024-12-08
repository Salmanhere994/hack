import Link from "next/link";

// components/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand & Vision */}
            <div>
              <h2 className="text-lg font-bold text-blue-600">MORENT</h2>
              <p className="mt-2 text-sm text-gray-500">
                Our vision is to provide convenience and help increase your sales business.
              </p>
            </div>
  
            {/* About Links */}
            <div>
              <h3 className="text-sm font-bold text-gray-700">Routes</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/categories" className="text-sm text-gray-500 hover:text-black hover:underline underline-offset-2">
                    Categories
                  </Link>
                </li>
                <li>
                <Link href="/dasboard" className="text-sm text-gray-500 hover:text-black hover:underline underline-offset-2">
                    Dashboard
                  </Link>
                </li>
                <li>
                <Link href="/booking" className="text-sm text-gray-800 hover:text-black hover:underline underline-offset-2">
                    Bookings
                  </Link>
                </li>
                
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-700">About</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-sm text-gray-500 hover:text-black">
                    How it works
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-500 hover:text-black">
                    Featured
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-500 hover:text-black">
                    Partnership
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-500 hover:text-black">
                    Business Relation
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Community Links */}
            <div>
              <h3 className="text-sm font-bold text-gray-700">Community</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-sm text-gray-500 hover:text-black">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-500 hover:text-black">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-500 hover:text-black">
                    Podcast
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-500 hover:text-black">
                    Invite a friend
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Socials Links */}
            <div>
              <h3 className="text-sm font-bold text-gray-700">Socials</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-sm text-gray-500 hover:text-black">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-500 hover:text-black">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-500 hover:text-black">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-500 hover:text-black">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
  
          {/* Footer Bottom Section */}
          <div className="mt-8 border-t border-gray-200 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>©2022 MORENT. All rights reserved</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-black">
                Privacy & Policy
              </a>
              <a href="#" className="hover:text-black">
                Terms & Condition
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  