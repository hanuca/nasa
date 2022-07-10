import "./Meteor.css"
import { IMeteor } from '../../Types/Meteor';
import MeteorItem from './MeteorItem';
import { DisplayYear } from '../../Utils/yearUtils';

interface IMeteorProps {
    meteor: IMeteor
}

const Meteor : React.FC<IMeteorProps> = ({ meteor }) => {

    return (
        <div className="meteor-container">
            <MeteorItem label="ID" value={meteor.id} />
            <MeteorItem label="Name" value={meteor.name} />
            <MeteorItem label="Year" value={DisplayYear(meteor.year)} />
        </div>)
}

export default Meteor;