import { IMeteor } from '../Types/Meteor'
import Meteor from './Meteor';

interface IMeteorView {
    meteors: IMeteor[];
}

const MeteorView : React.FC<IMeteorView> = ({ meteors }) => {

    return (<div>
        {meteors.map(meteor => <div key={meteor.id}> <Meteor meteor={meteor} /> </div>)}
    </div>)

}

export default MeteorView;