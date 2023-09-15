import { ReactComponent as Dashboard } from "../assets/dashboard.svg";
import { ReactComponent as Chat } from "../assets/chat.svg";
import { ReactComponent as Transaction } from "../assets/transfer.svg";
import { ReactComponent as LeftArrow } from "../assets/LeftArrow.svg";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const Navbar = () => {
  const menuItems = [
    {
      headIcon: <Dashboard />,
      title: "Dashboard",
      href: "/dashboard",
    },
    {
      headIcon: <Transaction />,
      title: "Transactions",
      href: "/transactions",
    },
    {
      headIcon: <Transaction />,
      title: "Insights",
      href: "/transactions",
    },
    {
      headIcon: <Transaction />,
      title: "Investments",
      href: "/transactions",
    },
    {
      headIcon: <Transaction />,
      title: "Offers",
      href: "/transactions",
    }
  ];
  const currentPath = useLocation().pathname;

  const renderNavabrItems = (headIcon, title, href) => {
    return (
      <Link to={{ pathname: `${href}` }}>
        <button
          className={`flex cursor-pointer hover:bg-[#E4E3FF] hover:text-primary  px-7 py-4 gap-4 w-full rounded-md ${currentPath==href ? 'text-primary':"text-[#A1A0BD]"}`}
          key={title}
        >
          <div>{headIcon}</div>
          <div className="font-bold">{title}</div>
        </button>
      </Link>
    );
  };

  return (
    <div className="w-[17%] h-[100vh] bg-white left-0 top-0 rounded-r-[26px]  py-7 px-6 ">
      <div className="text-primary text-center font-extrabold">NEXA</div>
      <div className="flex flex-col justify-between h-[90%]">
        <div className="flex flex-col gap-5 pt-[73px]">
          {menuItems.map((item) =>
            renderNavabrItems(item.headIcon, item.title, item.href)
          )}
        </div>

        <div>
          <button className="flex items-center cursor-pointer hover:bg-[#E4E3FF] hover:text-primary text-[#A1A0BD] px-7 py-4 gap-4 rounded-md">
            <div>
              <LeftArrow />
            </div>
            <div className="font-bold">Contact us</div>
          </button>
          <button className="flex items-center cursor-pointer hover:bg-[#E4E3FF] hover:text-primary text-[#A1A0BD] px-7 py-4 gap-4 rounded-md">
            <div>
              <LeftArrow />
            </div>
            <div className="font-bold">Logout</div>
          </button>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
