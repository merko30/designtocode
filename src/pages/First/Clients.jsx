const CLIENTS = [
  {
    imageUrl: "/netflix.svg",
    name: "Netflix",
  },
  {
    imageUrl: "/discord.svg",
    name: "Discord",
  },
  {
    imageUrl: "/spotify.svg",
    name: "Spotify",
  },
  {
    imageUrl: "/amazon.svg",
    name: "Amazon",
  },
  {
    imageUrl: "/reddit.svg",
    name: "Reddit",
  },
];

const Clients = () => (
  <div className="container px-4 md:px-0 py-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
    {CLIENTS.map((client) => (
      <img
        key={client.name}
        src={client.imageUrl}
        alt={client.name}
        className="h-32 w-auto mx-auto"
      />
    ))}
  </div>
);

export default Clients;
