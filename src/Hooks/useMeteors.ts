import {useState, useEffect} from 'react';
import axios from 'axios';

const useMeteors = () => {
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {

        const init = async () => {
            try {
                const meteorsResponse = await axios.get('https://data.nasa.gov/resource/y77d-th95.json');
                setMeteors(meteorsResponse.data)
            }
            catch(error) {
                console.error(error)
            }
        }

        init();

    }, []);

    return meteors;
}

export default useMeteors;