import { ReactComponent as RightArrow } from "../assets/chevronRight.svg";
import { ReactComponent as LeftArrow } from "../assets/chevronLeft.svg";
import BankCard from "./BankCard";

const AccountInfoCard = () => {

  return (
    
    <div
      className="w-full rounded-3xl py-6 shadow-card flex px-10 h-full bg-white"
      style={{ background: "linear-gradient(180deg, #FFF 0%, #FFF 100%);" }}
    >
        
      <div className="w-[70%] border-r border-[#E8E8E8] flex justify-between items-center pr-6 gap-4">
        <div className="cursor-pointer">
          <LeftArrow />
        </div>
        <BankCard accountType={'Savings account'} bankName={'ICICI BANK'} endNumbers={'2 7 8 9'} startNumbers={'4 7 5 8'}/>
        <div className="cursor-pointer">
          <RightArrow />
        </div>
      </div>
      <div className="w-[30%] pt-[52px] ">
        <div className="font-semibold text-3xl text-primary text-right">
          ₹ 12,44,556
        </div>
        <div className="text-sm font-normal text-[#AEAEAE] text-right">
          Current balance
        </div>
        <div className="text-lg font-normal leading-9  text-[#439A86] pt-5 text-right">
          ₹ 44,556
        </div>
        <div className="text-sm font-normal text-[#AEAEAE] text-right">
          Total spending
        </div>
      </div>
    </div>
  );
};

export default AccountInfoCard;
