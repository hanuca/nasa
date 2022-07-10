import {useState} from 'react';
import MeteorView from './Components/MeteorView';
import useMeteors from './Hooks/useMeteors';
import useYears from './Hooks/useYears';

const App = () => {
    const meteors = useMeteors();
    const years = useYears(meteors);
    const [year, setYear] = useState<string>();

    const filterMeteors = year ? meteors.filter(item => item?.year === year) : meteors;

    return (<div>
        <input value={year} onChange={e => setYear(e.target.value)} />
        <MeteorView meteors={filterMeteors} />
    </div>)
}

export default App;
