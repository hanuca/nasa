import {IMeteor, MeteorFilterEnum} from "../Types/Meteor";

const useMeteorFilter = (meteors: IMeteor[],
                         setSelectedYear: (year: string) => void,
                         setFilterStatus: (filterStatus: MeteorFilterEnum) => void,
                         selectedYear?: string,
                         selectedMass?: string) => {

    if (!selectedYear) {
        return [];
    }

    const meteorsFilterByYear =  meteors.filter(item => item?.year === selectedYear);

    if (!selectedMass) {
        return  meteorsFilterByYear;
    }

    const filterByMass = meteorsFilterByYear.filter(meteor => parseInt(meteor.mass) > parseInt(selectedMass));

    if (filterByMass.length > 0) {
        return  filterByMass;
    }

    const meteorThatContainThisMass = meteors.filter(meteor => parseInt(meteor.mass) > parseInt(selectedMass));
    if (meteorThatContainThisMass.length > 0) {
        setSelectedYear(meteorThatContainThisMass[0].year);
        setFilterStatus(MeteorFilterEnum.JumpToFirstYear);

        return [];
    }

    return [];
}

export default useMeteorFilter;