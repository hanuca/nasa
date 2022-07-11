import {useEffect, useState} from "react";
import "./MeteorFilter.css";

interface IMeteorFilterProps {
    selectedMass?: string;
    setSelectedMass: (year: string) => void;
}


const MeteorFilter : React.FC<IMeteorFilterProps> = ( { selectedMass, setSelectedMass }) => {

    const [mass, setMass] = useState<string>();

    useEffect(() => {

        if (selectedMass === undefined) {
            return;
        }

        setMass(selectedMass);

    }, [selectedMass])

    return (
        <input
            className="meteor-filter"
            type="number"
            placeholder="set meteor mass"
            value={mass}
            onChange={e => {
                setMass(e.target.value);
                setSelectedMass(e.target.value);
            }}
        />)
}

export default MeteorFilter;
