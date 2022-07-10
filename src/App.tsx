import {useState} from 'react';
import MeteorView from './Components/MeteorView';
import useMeteors from './Hooks/useMeteors';
import useYears from './Hooks/useYears';
import AutoComplete from './Components/AutoComplete';

const App = () => {
    const meteors = useMeteors();
    const years = useYears(meteors);
    const [selectedYear, setSelectedYear] = useState<string>();

    const filterMeteors = selectedYear ? meteors.filter(item => item?.year === selectedYear) : meteors;

    return (<div>
        <AutoComplete years={years} setSelectedYear={year => setSelectedYear(year)} />
        <MeteorView meteors={filterMeteors} />
    </div>)
}

export default App;
