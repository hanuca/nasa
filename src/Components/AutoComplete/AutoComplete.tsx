import { useState } from 'react';
import AutoCompleteItem from './AutoCompleteItem';
import { DisplayYear } from '../../Utils/yearUtils';

interface IAutoCompleteProps {
    years: string[];
    setSelectedYear: (year: string) => void;
}

const AutoComplete : React.FC<IAutoCompleteProps> = ({ years, setSelectedYear }) => {

    const [hasChange, setHasChange] = useState<boolean>(false);
    const [userInput, setUserInput] = useState<string>("");

    const filterYears = years.filter(year => year.startsWith(userInput));

    return (
        <div className="auto-complete">
            <input value={userInput} onChange={e => {
                setUserInput(e.target.value)
                setHasChange(true);
            }}
            className="auto-complete-input" />
           {hasChange && filterYears.map(year => <AutoCompleteItem year={year} selectYear={year => {
                setUserInput(DisplayYear(year));
                setSelectedYear(year);
                setHasChange(false);
            }} />)}

        </div>)
}

export default AutoComplete;