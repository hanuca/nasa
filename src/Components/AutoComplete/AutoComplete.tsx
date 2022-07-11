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

    const selectYear = (year: string) => {
        setUserInput(DisplayYear(year));
        setSelectedYear(year);
        setHasChange(false);
    }

    useEffect(() => {
        if (!selectedYear) {
            return;
        }

        setUserInput(DisplayYear(selectedYear));

    }, [selectedYear]);

    const filterYears = years.filter(year => year.startsWith(userInput));

    return (
        <div className="auto-complete">
            <input
                value={userInput}
                onChange={e => {
                    setUserInput(e.target.value)
                    setHasChange(true);
                }}
                onKeyDown={e => {
                    if (e.key === 'Enter') {
                        if (filterYears.length === 1) {
                            selectYear(filterYears[0])
                        }
                    }
                }}
                className="auto-complete-input"
                placeholder="enter meteor year"
            />
           {hasChange && filterYears.map(year =>
               <div key={year}>
                   <AutoCompleteItem
                       year={year}
                       selectYear={selectYear}
                   />
               </div>)}

        </div>)
}

export default AutoComplete;