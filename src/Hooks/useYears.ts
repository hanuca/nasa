import { IMeteor } from '../Types/Meteor'

const useYears = (meteors: IMeteor[]) => {
    const years = meteors.filter(meteor => !!meteor.year).map(meteor => meteor.year);
    const uniqueYears = years.filter((v, i, a) => a.indexOf(v) === i);
    return uniqueYears;
}

export default useYears;