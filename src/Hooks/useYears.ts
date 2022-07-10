import { IMeteor } from '../Types/Meteor'

const useYears = (meteors: IMeteor[]) => {
    const years = meteors.filter(meteor => !!meteor.year).map(meteor => meteor.year.substr(0, meteor.year.indexOf('-')));
    return years;
}

export default useYears;