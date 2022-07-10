import './AutoComplete.css';
import { DisplayYear } from '../../Utils/yearUtils';

interface IAutoCompleteItemProps {
    year: string;
    selectYear: (year: string) => void;
}

const AutoCompleteItem : React.FC<IAutoCompleteItemProps>  = ( { year, selectYear } ) => {
    return (
        <div className="auto-complete-item" onClick={() => selectYear(year)}>
            {DisplayYear(year)}
        </div>)
}

export default AutoCompleteItem;