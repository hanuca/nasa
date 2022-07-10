import { useState } from "react";
import "./MeteorFilter.css";

interface IMeteorFilterProps {
    setSelectedMass: (year: string) => void;
}


const MeteorFilter : React.FC<IMeteorFilterProps> = ( { setSelectedMass }) => {

    const [mass, setMass] = useState<string>();

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
