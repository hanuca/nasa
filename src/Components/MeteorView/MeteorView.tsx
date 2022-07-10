import "./MeteorView.css"
import { IMeteor } from '../../Types/Meteor'
import Meteor from '../Meteor';
import EmptyView from './EmptyView';

interface IMeteorView {
    meteors: IMeteor[];
}

const MeteorView : React.FC<IMeteorView> = ({ meteors }) => {

    return (<div className="meteor-view-container">
        {meteors.length > 0 && meteors.map(meteor => <div key={meteor.id}> <Meteor meteor={meteor} /> </div>)}
        {meteors.length === 0 && <EmptyView />}

    </div>)

}

export default MeteorView;