import MoneyFlow from "../components/MoneyFlow";
import { ReactComponent as Shops } from "../assets/shop.svg";
import { ReactComponent as House } from "../assets/house.svg";
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
              total={2016}
              category={"Shopping"}
              logo={<Shops />}
              percentage={25}
            />
            <SpendCards
              total={2016}
              category={"Renovation"}
              logo={<House />}
              percentage={25}
            />
            <SpendCards
              total={2016}
              category={"Shopping"}
              logo={<Shops />}
              percentage={25}
            />
            <SpendCards
              total={2016}
              category={"Shopping"}
              logo={<Shops />}
              percentage={25}
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
