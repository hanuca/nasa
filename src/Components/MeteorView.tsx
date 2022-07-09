import { IMeteor } from '../Types/Meteor'
import Meteor from './Meteor';

interface IMeteorView {
    meteors: IMeteor[];
}

const MeteorView : React.FC<IMeteorView> = ({meteors}) => {

    return (<div>
        {meteors.map(meteor => <div key={meteor.id}> <Meteor id={meteor.id} name={meteor.name} /> </div>)}
    </div>)

}

export default MeteorView;