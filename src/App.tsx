import MeteorView from './Components/MeteorView';
import useMeteors from './Hooks/useMeteors';

const App = () => {
    const meteors = useMeteors();
    return  <MeteorView meteors={meteors} />
}

export default App;
