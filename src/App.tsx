import {useState} from 'react';
import './App.css'
import MeteorView from './Components/MeteorView';
import useMeteors from './Hooks/useMeteors';
import useYears from './Hooks/useYears';
import AutoComplete from './Components/AutoComplete';
import MeteorStatusBar from "./Components/MeteorStatusBar";
import MeteorFilter from "./Components/MeteorFilter";
import useMeteorFilter from "./Hooks/useMeteorFilter";
import {MeteorFilterEnum} from "./Types/Meteor";

const App = () => {
    const meteors = useMeteors();
    const years = useYears(meteors);
    const [selectedYear, setSelectedYear] = useState<string>();
    const [mass, setSelectedMass] = useState<string>();
    const [filterStatus, setFilterStatus] = useState<MeteorFilterEnum>(MeteorFilterEnum.Empty);

    const filteredMeteors = useMeteorFilter(meteors, setSelectedYear, setFilterStatus, selectedYear, mass);

    const hasMeteors = filteredMeteors.length > 0;

    return (
        <div className="app-container">
            <div className="auto-complete-container">
                <AutoComplete years={years} selectedYear={selectedYear} setSelectedYear={year => {
                    setSelectedYear(year);
                    setFilterStatus(MeteorFilterEnum.Empty);
                }} />
            </div>
            <div className="meteor-filter-container">
                <MeteorFilter setSelectedMass={mass => {
                    setSelectedMass(mass);
                    setFilterStatus(MeteorFilterEnum.Empty);
                }} />
            </div>
            {hasMeteors && filterStatus === MeteorFilterEnum.JumpToFirstYear &&
                <div>  the mass was not found, jumping to first-year where there is a mass that fits the criteria </div>}
            <MeteorView meteors={filteredMeteors} />
            {hasMeteors && <MeteorStatusBar meteors={filteredMeteors} />}
        </div>)
}

export default App;
