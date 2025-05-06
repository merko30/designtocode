import { Link } from "react-router";

const LINKS = ["About", "Features", "Pricing", "Testimonials", "Help"];

const Header = () => (
  <header className="pt-12.5">
    <div className="px-4 sm:px-0 container mx-auto flex justify-between items-center">
      <Link to="/">
        <img src="/logo_1.svg" alt="Logo" className="h-12 w-auto" />
      </Link>
      <nav className="hidden lg:block">
        <ul className="flex flex-col lg:flex-row gap-10">
          {LINKS.map((link) => (
            <li key={link}>
              <Link
                to="/#"
                className="text-sm text-gray-600 hover:text-gray-800"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <ul className="hidden lg:flex items-center gap-10">
        <li className="ml-auto">
          <Link
            to="/#"
            className="text-sm font-medium text-gray-600 hover:text-gray-800"
          >
            Sign In
          </Link>
        </li>
        <li>
          <Link
            to="/#"
            className="px-11 py-3 text-sm font-medium text-primary border border-primary rounded-full"
          >
            Sign Up
          </Link>
        </li>
      </ul>
      <button className="lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </div>
  </header>
);

export default Header;
