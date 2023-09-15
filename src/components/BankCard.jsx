
import { ReactComponent as Overlay } from "../assets/overlay.svg";

const BankCard = ({bankName,accountType,startNumbers,endNumbers}) => {
  return (
    <div className=" h-[247px] w-[340px] bg-[#197BBD] rounded-[26px] py-5 px-6 relative">
    <div className="text-white font-bold text-base">{bankName}</div>
    <div className="text-[#FFFFFF] text-opacity-70 text-[10px]">{accountType}</div>
    <div className="pt-12 whitespace-nowrap text-white font-semibold text-[20px] flex gap-2 space-x-4 items-center">
        <div>{startNumbers}</div>
        <div className="flex items-start">* * * *</div>
        <div className="flex items-start">* * * *</div>
        <div>{endNumbers}</div>
    </div>
    <div className="absolute right-0 bottom-0"><Overlay/></div>
</div>
  )
}

export default BankCard