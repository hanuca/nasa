import "./MeteorFilter.css";

interface IMeteorFilterProps {
    selectedMass?: string;
    setSelectedMass: (year: string) => void;
}


const MeteorFilter : React.FC<IMeteorFilterProps> = ( { selectedMass, setSelectedMass }) => {

    return (
        <input
            className="meteor-filter"
            type="number"
            placeholder="set meteor mass"
            value={selectedMass}
            onChange={e => setSelectedMass(e.target.value)}
        />)
}

export default MeteorFilter;
