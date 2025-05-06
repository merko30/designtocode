import { Link } from "react-router";

const ITEMS = [
  {
    label: "First",
    link: "/first",
  },
];

const Home = () => {
  return (
    <div>
      <header className="bg-gray-50 py-8">
        <div className="container mx-auto flex justify-between items-center">
          <Link
            to="/"
            className="uppercase text-xl font-medium tracking-widest"
          >
            Design to code
          </Link>
          <nav className="flex gap-4">
            {ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.link}
                className="uppercase text-sm text-gray-700 hover:text-gray-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Home;
