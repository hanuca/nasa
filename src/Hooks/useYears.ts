import { IMeteor } from '../Types/Meteor'

const useYears = (meteors: IMeteor[]) => {
    const years = meteors.filter(meteor => !!meteor.year).map(meteor => meteor.year);
    return years.filter((v, i, a) => a.indexOf(v) === i);
}

export default useYears;