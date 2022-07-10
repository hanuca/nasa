import { useState } from 'react';
import './App.css'
import MeteorView from './Components/MeteorView';
import useMeteors from './Hooks/useMeteors';
import useYears from './Hooks/useYears';
import AutoComplete from './Components/AutoComplete';
import MeteorStatusBar from "./Components/MeteorStatusBar";
import MeteorFilter from "./Components/MeteorFilter";

const App = () => {
    const meteors = useMeteors();
    const years = useYears(meteors);
    const [selectedYear, setSelectedYear] = useState<string>();
    const [mass, setSelectedMass] = useState<string>();

    const meteorsFilterByYear = selectedYear ? meteors.filter(item => item?.year === selectedYear) : [];

    const filterByMass = mass ? meteorsFilterByYear.filter(meteor => parseInt(meteor.mass) > parseInt(mass)) : meteorsFilterByYear;

    const hasMeteors = filterByMass.length > 0;

    return (
        <div className="app-container">
            <div className="auto-complete-container">
                <AutoComplete years={years} setSelectedYear={year => setSelectedYear(year)} />
            </div>
            <div className="meteor-filter-container">
                <MeteorFilter setSelectedMass={mass => setSelectedMass(mass)} />
            </div>
            <MeteorView meteors={filterByMass} />
            {hasMeteors && <MeteorStatusBar meteors={filterByMass} />}
        </div>)
}

export default App;
