import "./MeteorView.css"
import { IMeteor } from '../../Types/Meteor'
import Meteor from '../Meteor';
import EmptyView from './EmptyView';

interface IMeteorView {
    meteors: IMeteor[];
}

const MeteorView : React.FC<IMeteorView> = ({ meteors }) => {
    const hasMeteor = meteors.length > 0;
    return (
        <div className="meteor-view-container">
            {hasMeteor && meteors.map(meteor => <div key={meteor.id}> <Meteor meteor={meteor} /> </div>)}
            {!hasMeteor && <EmptyView />}
        </div>)
}

export default MeteorView;