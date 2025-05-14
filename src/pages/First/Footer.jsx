import Button from "./Button";

const Footer = () => (
  <footer className="bg-gray-100">
    <div className="container relative">
      <div className="absolute -top-20 w-full flex justify-between items-center bg-white rounded-md shadow-lg px-17.5 py-15.5">
        <div className="flex-1">
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">
            Subscribe Now for Get Special Features!
          </h1>
          <p className="text-gray-600 text-sm mb-4">
            Let's subscribe with us and find the fun.
          </p>
        </div>
        <Button>Subscribe Now</Button>
      </div>
    </div>
    <div className="pt-40 container flex gap-10 mt-20">
      <div className="flex-1/3">
        <img src="/logo_1.svg" alt="Logo" className="w-32 h-auto mb-4" />
        <p className="text-gray-600 text-xs mb-4 w-2/3">
          <b>LaslesVPN</b> is a private virtual network that has unique features
          and has high security.
        </p>
      </div>
      <div className="flex-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h2 className="font-semibold text-gray-800 mb-4">Product</h2>
          <ul className="text-gray-600 text-xs">
            <li className="mb-2">Download</li>
            <li className="mb-2">Pricing</li>
            <li className="mb-2">Locations</li>
            <li className="mb-2">Server</li>
            <li className="mb-2">Countries</li>
            <li className="mb-2">Blog</li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold text-gray-800 mb-4">Engage</h2>
          <ul className="text-gray-600 text-xs">
            <li className="mb-2">LaslesVPN ?</li>
            <li className="mb-2">FAQ</li>
            <li className="mb-2">Tutorials</li>
            <li className="mb-2">About Us</li>
            <li className="mb-2">Privacy Policy</li>
            <li className="mb-2">Terms of Service</li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold text-gray-800 mb-4">Earn Money</h2>
          <ul className="text-gray-600 text-xs">
            <li className="mb-2">Affiliate</li>
            <li className="mb-2">Become Partner</li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold text-gray-800 mb-4">Follow Us</h2>
          <ul className="text-gray-600 text-xs">
            <li className="mb-2">Facebook</li>
            <li className="mb-2">Instagram</li>
            <li className="mb-2">Twitter</li>
            <li className="mb-2">YouTube</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
