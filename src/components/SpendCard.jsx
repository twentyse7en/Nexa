const SpendCards = ({ percentage, category, logo, total }) => {
    return (
      <div className="text-primary bg-white rounded-[28px] px-6 py-6 flex flex-col justify-between shadow-card">
        <div>
          <div className=" text-2xl font-semibold">₹{total}</div>
          <div className="text-[#979699] text-sm font-medium">{percentage}%</div>
        </div>
        <div className="rounded-full flex items-center justify-st w-10 h-10">
          <div className="h-4">{logo}</div>
        </div>
        <div>
          <div className="text-primary text-base capitalize font-bold">
            {category}
          </div>
        </div>
      </div>
    );
  };

  export default SpendCards;