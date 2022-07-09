
interface IMeteor {
    name: string;
}

const Meteor : React.FC<IMeteor> = ( { name }) => {

    return <div> Name: {name} </div>
}

export default Meteor;