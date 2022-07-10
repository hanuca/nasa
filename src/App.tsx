import { useState } from 'react';
import './App.css'
import MeteorView from './Components/MeteorView';
import useMeteors from './Hooks/useMeteors';
import useYears from './Hooks/useYears';
import AutoComplete from './Components/AutoComplete';
import MeteorStatusBar from "./Components/MeteorStatusBar";

const App = () => {
    const meteors = useMeteors();
    const years = useYears(meteors);
    const [selectedYear, setSelectedYear] = useState<string>();

    const filterMeteors = selectedYear ? meteors.filter(item => item?.year === selectedYear) : [];

    return (
        <div className="app-container">
            <div className="auto-complete-container">
                <AutoComplete years={years} setSelectedYear={year => setSelectedYear(year)} />
            </div>
            <MeteorView meteors={filterMeteors} />
            {filterMeteors.length > 0 && <MeteorStatusBar meteors={filterMeteors} />}
        </div>)
}

export default App;
