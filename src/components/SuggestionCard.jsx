import { ReactComponent as BulbIcon } from "../assets/bulb.svg";
import { ReactComponent as ThinkingIcon } from "../assets/bro.svg";
import { ReactComponent as ExportIcon } from "../assets/export.svg";

const ADVICE =
  "Grow your money by diversifying investments in stocks, bonds, and real estate to reduce risk.";

const SuggestionCard = () => {
  return (
    <div className="flex flex-col p-6 rounded-xl bg-white h-full shadow-card text-[#757575] justify-between">
      <div>
        <div className="flex">
          <div className="w-5 h-5 mr-4 mt-1">
            <BulbIcon />
          </div>
          <p>{ADVICE}</p>
        </div>
        <div className="h-[1px] bg-secondary my-4 mx-10" />
        <div className="flex">
          <div className="w-5 h-5 mr-4 mt-1">
            <ExportIcon />
          </div>
          <p>
            Your spending have reduced upto{" "}
            <span className="text-green-500 font-semibold">45%</span> in the
            last two weeks{" "}
          </p>
        </div>
      </div>
      <div className="">
        <ThinkingIcon className="mx-auto" />
      </div>
    </div>
  );
};

export default SuggestionCard;
