import "./MeteorStatusBar.css";
import {IMeteor} from "../../Types/Meteor";

interface IMeteorStatusBar {
    meteors: IMeteor[];
}

const MeteorStatusBar : React.FC<IMeteorStatusBar> = ({ meteors}) => {
    return (
        <div className="meteor-status-bar">
            <span> Total Amount of meteors: </span>
            <span className="meteor-status-bar-sum"> {meteors.length} </span>
        </div>
    )
}

export default MeteorStatusBar;