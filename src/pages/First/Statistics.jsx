const ITEMS = [
  {
    label: "Users",
    value: "90",
    icon: () => <img src="/user.svg" alt="User Icon" className="w-6 h-6" />,
  },
  {
    label: "Locations",
    value: "30",
    icon: () => <img src="/maptag.svg" alt="maptag" className="w-6 h-6" />,
  },
  {
    label: "Servers",
    value: "50",
    icon: () => <img src="/server.svg" alt="Server Icon" className="w-6 h-6" />,
  },
];

const Item = ({ icon: Icon, value, label }) => (
  <div className="flex flex-1 py-8 items-center justify-center gap-9 border-b sm:border-b-0 sm:border-r border-gray-200 last:border-0">
    <div className="p-4 rounded-full bg-primary/10 text-primary">
      <Icon />
    </div>
    <div>
      <p className="text-3xl sm:text-2xl font-semibold text-gray-800">
        {value}+
      </p>
      <p className="text-base sm:text-sm text-gray-500">{label}</p>
    </div>
  </div>
);

const Statistics = () => (
  <div className="container px-4 sm:px-0 pb-20">
    <div className="w-full gap-12 sm:gap-0 py-8 px-8 sm:px-0 flex flex-col sm:flex-row justify-between bg-white rounded-xl drop-shadow-[0_4px_4px_rgba(0,0,0,0.05)]">
      {ITEMS.map((item) => (
        <Item {...item} />
      ))}
    </div>
  </div>
);

export default Statistics;
