interface IMeteorItemProps {
    label: string;
    value: string;
}

const MeteorItem  : React.FC<IMeteorItemProps>  = ({ label, value }) => {
    return (
        <div className="meteor-item">
            <span className="meteor-label">{label}: </span>
            <span> {value} </span>
        </div>
    )
}

export default MeteorItem;