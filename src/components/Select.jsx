import ReactSelect from 'react-select'

// import { ReactComponent as CalendarIcon } from '../assets/calendar.svg';
// import { ReactComponent as DownArrowIcon } from '../assets/downArrow.svg';

// return (
//     <div className="flex px-4 py-2.5 text-secondary  gap-x-2 rounded-xl border border-secondary">
//         <CalendarIcon />
//         Month
//         <DownArrowIcon />
//     </div>
// )

const Select = ({ value, options, onChange }) => {
    return <ReactSelect value={value} options={options} onChange={onChange} />
}

export default Select;