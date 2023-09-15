import { useState } from 'react';
import ReactSelect from 'react-select'

const options = [
  { value: 'day', label: 'Day' },
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month' }
]

// import { ReactComponent as CalendarIcon } from '../assets/calendar.svg';
// import { ReactComponent as DownArrowIcon } from '../assets/downArrow.svg';

// return (
//     <div className="flex px-4 py-2.5 text-secondary  gap-x-2 rounded-xl border border-secondary">
//         <CalendarIcon />
//         Month
//         <DownArrowIcon />
//     </div>
// )

const Select = () => {
    const [selectedOption, setSelectedOption] = useState(options[0]);

    return <ReactSelect value={selectedOption} options={options} onChange={(val) => setSelectedOption(val)} />
}

export default Select;