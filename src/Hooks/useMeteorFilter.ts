import {IMeteor, MeteorFilterEnum} from "../Types/Meteor";

const useMeteorFilter = (meteors: IMeteor[],
                         setSelectedYear: (year: string) => void,
                         setFilterStatus: (filterStatus: MeteorFilterEnum) => void,
                         selectedYear?: string,
                         mass?: string) => {

    if (!selectedYear) {
        return [];
    }

    const meteorsFilterByYear =  meteors.filter(item => item?.year === selectedYear);

    if (!mass) {
        return  meteorsFilterByYear;
    }

    const filterByMass = meteorsFilterByYear.filter(meteor => parseInt(meteor.mass) > parseInt(mass));

    if (filterByMass.length > 0) {
        return  filterByMass;
    }

    const meteorThatContainThisMass = meteors.filter(meteor => parseInt(meteor.mass) > parseInt(mass));
    if (meteorThatContainThisMass.length > 0) {
        setSelectedYear(meteorThatContainThisMass[0].year);
        setFilterStatus(MeteorFilterEnum.JumpToFirstYear);

        return [];
    }

    return [];
}

export default useMeteorFilter;