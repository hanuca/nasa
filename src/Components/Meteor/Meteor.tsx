import "./Meteor.css"
import { IMeteor } from '../../Types/Meteor';
import MeteorItem from './MeteorItem';

interface IMeteorProps {
    meteor: IMeteor
}

const Meteor : React.FC<IMeteorProps> = ({ meteor }) => {

    return (<div className="meteor-container">
       <MeteorItem label="ID" value={meteor.id} />
       <MeteorItem label="Name" value={meteor.name} />
       <MeteorItem label="Year" value={meteor.year} />
    </div>)
}

export default Meteor;