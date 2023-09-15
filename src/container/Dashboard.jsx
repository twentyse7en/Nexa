import { ReactComponent as Shops } from "../assets/shop.svg";
import { ReactComponent as House } from "../assets/house.svg";
import { ReactComponent as Movies } from "../assets/Entertainment.svg";
import { ReactComponent as Travel } from "../assets/Travel.svg";


const Dashboard = () => {
  const SpendCards = (Percentage, category, logo, total) => {
    return (
      <div className="bg-white w-[160px] h-[200px] rounded-[28px] px-6 py-6">
        <div className=" text-2xl font-semibold">{Percentage}</div>
        <div className="text-[#979699] text-sm font-medium">₹{total}</div>
        <div className="rounded-full flex items-center justify-st w-16 h-16">
          <div className="h-5">{logo}</div>
        </div>
        <div>
          <div className="text-primary text-base capitalize font-bold">
            {category}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      Dashboard
      <div className="flex flex-wrap w-[500px] gap-5">
      <div>{SpendCards("55%", "Shopping", <Shops />, "2016")}</div>
      <div>{SpendCards("75%", "Renovation", <House/>, "1500")}</div>
      <div>{SpendCards("25%", "Entertainment", <Movies />, "1116")}</div>
      <div>{SpendCards("45%", "Travel", <Travel />, "2156")}</div>
      </div>
    </div>
  );
};

export default Dashboard;
