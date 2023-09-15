import MoneyFlow from "../components/MoneyFlow";
import { ReactComponent as FoodIcon } from "../assets/food.svg";
import { ReactComponent as FuelIcon } from "../assets/fuel.svg";
import { ReactComponent as ShoppingIcon } from "../assets/shoppingBag.svg";
import { ReactComponent as EntertainmentIcon } from "../assets/xbox.svg";
import SpendingPie from "../components/SpendingPie";
import SpendCards from "../components/SpendCard";
import AccountInfoCard from "../components/AccountInfoCard";
import SuggestionCard from "../components/SuggestionCard";

const Dashboard = () => {
  const userName = "Linette";

  return (
    <section className="flex flex-col h-full">
      <h1 className="text-4xl mb-2 font-semibold"> Hi, {userName}! </h1>
      <p className="text-secondary mb-3">
        welcome back, track what you are spending
      </p>
      <div className="flex-1 h-[45%]">
        <div className="flex gap-x-10 flex-1 mb-6">
        <div className="flex-1"><AccountInfoCard/></div>
          <MoneyFlow />
        </div>
        <div className="flex h-[45%] gap-x-8">
          <SpendingPie />
          <div className="grid grid-cols-2 w-[450px] gap-5">
            <SpendCards
              total={4521}
              category={"Food"}
              logo={<FoodIcon />}
              percentage={29}
            />
            <SpendCards
              total={1500}
              category={"Fuel"}
              logo={<FuelIcon className="w-7 h-7" />}
              percentage={14}
            />
            <SpendCards
              total={6259}
              category={"Shopping"}
              logo={<ShoppingIcon />}
              percentage={38}
            />
            <SpendCards
              total={1250}
              category={"Entertainment"}
              logo={<EntertainmentIcon />}
              percentage={10}
            />
          </div>
          <div className="flex-1">
            <SuggestionCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
