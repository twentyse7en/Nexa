import MoneyFlow from "../components/MoneyFlow";
import SpendingPie from "../components/SpendingPie";

const Dashboard = () => {
  const userName = 'Linette';

  return (
    <section className="flex flex-col h-full">
      <h1 className="text-4xl mb-2"> Hi, {userName}! </h1>
      <p className="text-secondary mb-8">welcome back, track what you are spending</p>
      <div className="border-2 flex-1">
      <div className="flex gap-x-10 h-[45%] mb-6">
          <div className="border-4 flex-1"></div>
          <SpendingPie />
        </div>
        <div className="flex h-[50%]">
          <div className="flex-1"> space for main card </div>
          <MoneyFlow />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
