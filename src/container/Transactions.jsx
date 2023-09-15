import { useState } from "react";
import Select from "../components/Select";
import styles from "../container/Transactions.module.css";
import { ReactComponent as Person } from "../assets/person.svg";
import { ReactComponent as Shopping } from "../assets/shopping.svg";
import { ReactComponent as Drinks } from "../assets/foodDrink.svg";

const Transactions = () => {
  const TYPE_OPTIONS = [
    { label: "Credit/Debit", value: "both" },
    { label: "Credit", value: "credit" },
    { label: "Debit", value: "debit" },
  ];
  const FILTER_OPTIONS = generateMonthOptions();
  const Categories = [
    { label: "All", value: "all" },
    { label: "Food", value: "food" },
    {
      label: "Shopping",
      value: "shopping",
    },
    { value: "movies", label: "Movies" },
    { value: "travel", label: "Travel" },
  ];

  const [monthFilter, setMonthFilter] = useState(FILTER_OPTIONS[0]);
  const [typeFilter, setTypeFilter] = useState(TYPE_OPTIONS[0]);
  const [categoryFilter, setCategoryFilter] = useState(Categories[0]);
  const handleMonthFilterChange = (value) => setMonthFilter(value);
  const handleTypeFilterChange = (value) => setTypeFilter(value);
  const handleCategoryFilterChange =(value)=>setCategoryFilter(value)

  const tableHeader = [
    { header: "Reciever", accessor: "name" },
    { header: "Type", accessor: "type" },
    { header: "Category", accessor: "category" },
    { header: "Date", accessor: "date" },
    { header: "Amount", accessor: "amount" },
    { header: "Bank", accessor: "bank" },
  ];

  const tableData = [
    {
      name: "Ram Kumar",
      category: "Bank Transfer",
      type: "credit",
      date: "12-12-2023",
      amount: "Rs.1504",
      bank: "SBI",
    },
    {
      name: "Lulu international",
      category: "Shopping",
      type: "Debit",
      date: "12-12-2023",
      amount: "Rs.1256",
      bank: "ICICI",
    },
    {
      name: "ElectroMen Market",
      category: "Shopping",
      type: "Debit",
      date: "01-12-2023",
      amount: "Rs.2604",
      bank: "SBI",
    },
    {
      name: "Paragon",
      category: "Food",
      type: "debit",
      date: "12-01-2023",
      amount: "Rs.1134",
      bank: "SBI",
    },
    {
      name: "Chiyang",
      category: "Food",
      type: "Debit",
      date: "15-07-2023",
      amount: "Rs.834",
      bank: "SBI",
    },
    {
      name: "Jaison",
      category: "Bank Transfer",
      type: "Credit",
      date: "11-10-2023",
      amount: "Rs.1300",
      bank: "SBI",
    },
    {
      name: "Jaison",
      category: "Bank Transfer",
      type: "Credit",
      date: "11-10-2023",
      amount: "Rs.1230",
      bank: "ICICI",
    },
    {
      name: "Just tiffins",
      category: "Food",
      type: "Debit",
      date: "11-10-2023",
      amount: "Rs.1000",
      bank: "SBI",
    },
    {
      name: "Kumar varma",
      category: "Bank Transfer",
      type: "Credit",
      date: "11-10-2023",
      amount: "Rs.534",
      bank: "ICICI",
    },
  ];

  const icons = {
    shopping: <Shopping />,
    food: <Drinks />,
    sport: <Person />,
  };
  function generateMonthOptions() {
    const today = new Date();
    const options = [];

    for (let i = 0; i <= 10; i++) {
      const date = new Date(today.getFullYear(), today.getMonth() - i, 1);
      const label = date.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      });
      const value = date
        .toLocaleDateString("en-US", { month: "short", year: "numeric" })
        .toLowerCase()
        .replace(" ", "_");

      options.push({ label, value });
    }

    return options;
  }

  return (
    <div className="px-44 pt-16 bg-[#F4F7FC]  ">
      <div className="shadow-[0_10px_25px_-10px_rgba(0,0,0,0.3)] rounded-[20px] bg-white ">
        <div className="flex justify-end gap-5 py-4 px-10 text-[#464F60]">
          <div>
            {" "}
            <Select
              value={monthFilter}
              options={FILTER_OPTIONS}
              onChange={handleMonthFilterChange}
            />
          </div>
          <div>
            <Select
              value={typeFilter}
              options={TYPE_OPTIONS}
              onChange={handleTypeFilterChange}
            />
          </div>
          <div> <Select
              value={categoryFilter}
              options={Categories}
              onChange={handleCategoryFilterChange}
            /></div>
        </div>
        <div
          className={`mb-16 mt-4  w-full  overflow-auto rounded-[20px]  ${styles.scrollbar}`}
          style={{ height: "600px" }}
        >
          <table className="relative w-full">
            <tr className="bg-white sticky top-0">
              <th className="text-base font-semibold w-[100px] text-primary leading-4 px-5 uppercase py-3 text-left">
                #
              </th>
              {tableHeader.map((item) => (
                <th
                  className="text-base bg-white font-semibold min-w-[180px] text-primary leading-5 px-5 uppercase py-3 text-left"
                  key={item.header}
                >
                  {item.header}
                </th>
              ))}
            </tr>

            {tableData.map((item, index) => (
              <tr
                key={`${index}_${item.name}`}
                className={`${
                  (index + 1) % 2 == 0 ? "bg-white" : "bg-white"
                } w-full mx-4 `}
              >
                <td className=" px-5 py-3 text-left w-[100px] text-base text-[#AEAEAE]">
                  {index + 1}
                </td>
                <td className="w-[250px]  px-5 py-3 text-left text-sm font-normal">
                  <div className="flex gap-2 items-center">
                    <div className="bg-[#EFEFEF] rounded-full h-5 w-5 flex items-center justify-center text-base">
                      {icons[item.category.toLowerCase()] ? (
                        icons[item.category.toLowerCase()]
                      ) : (
                        <Person />
                      )}
                    </div>

                    {item.name}
                  </div>
                </td>
                <td className="w-[180px]  px-5 py-3 text-left text-[#AEAEAE] text-base">
                  <div
                    className={`px-2 py-1  w-fit rounded-full ${
                      item.type.toLowerCase() === "credit"
                        ? "bg-[#E9EDF5] text-[#14804A]"
                        : " bg-[#FAF0F3] text-[#D12953]"
                    }`}
                  >
                    {item.type}
                  </div>
                </td>
                <td className="w-[180px]  px-5 py-3 text-left text-[#AEAEAE] text-base">
                  {item.category}
                </td>
                <td className="w-[180px]  px-5 py-3 text-left text-[#AEAEAE] text-base">
                  {item.date}
                </td>
                <td className="w-[180px]  px-5 py-3 text-left text-[#AEAEAE] text-base">
                  {item.amount}
                </td>
                <td className="w-[180px]  px-5 py-3 text-left text-[#AEAEAE] text-base">
                  {item.bank}
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
