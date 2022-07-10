import { useState, useEffect } from 'react';
import AutoCompleteItem from './AutoCompleteItem';
import { DisplayYear } from '../../Utils/yearUtils';

interface IAutoCompleteProps {
    years: string[];
    selectedYear?: string;
    setSelectedYear: (year: string) => void;
}

const AutoComplete : React.FC<IAutoCompleteProps> = ({ years, selectedYear, setSelectedYear }) => {

    const [hasChange, setHasChange] = useState<boolean>(false);
    const [userInput, setUserInput] = useState<string>("");

    const filterYears = years.filter(year => year.startsWith(userInput));

    useEffect(() => {
        if (!selectedYear) {
            return;
        }

        setUserInput(DisplayYear(selectedYear));

    }, [selectedYear]);

    return (
        <div className="auto-complete">
            <input
                value={userInput}
                onChange={e => {
                    setUserInput(e.target.value)
                    setHasChange(true);
                }}
                className="auto-complete-input"
                placeholder="enter meteor year"
            />
           {hasChange && filterYears.map(year => <AutoCompleteItem year={year} selectYear={year => {
                setUserInput(DisplayYear(year));
                setSelectedYear(year);
                setHasChange(false);
            }} />)}

        </div>)
}

export default AutoComplete;