import { ReactComponent as Overlay } from "../assets/overlay.svg";
import { ReactComponent as SbiIcon } from "../assets/sbi.svg";
import { ReactComponent as MasterCard } from "../assets/mastercard.svg";

const BankCard = ({ bankName, accountType, startNumbers, endNumbers }) => {
  return (
    <div className=" h-[247px] w-[340px] bg-[#202a50] rounded-[26px] py-5 px-6 relative">
      <div className="text-white font-bold text-base gap-x-2 flex items-center">
        <SbiIcon className="h-4 w-4"/>
        <p className="mt-1">
          {bankName}
        </p>
      </div>
      <div className="text-[#FFFFFF] text-opacity-70 text-[11px]">
        {accountType}
      </div>
      <div className="pt-12 whitespace-nowrap text-white font-semibold text-[20px] flex gap-2 space-x-4 items-center">
        <div>{startNumbers}</div>
        <div className="flex items-start">* * * *</div>
        <div className="flex items-start">* * * *</div>
        <div>{endNumbers}</div>
      </div>
      <div className="absolute right-0 bottom-0">
        <Overlay />
      </div>
      <MasterCard className="h-12 w-12 absolute right-6 bottom-4" />
    </div>
  );
};

export default BankCard;
