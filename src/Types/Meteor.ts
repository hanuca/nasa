export interface IGeoLocation {
    type: string;
    coordinates: number[];
}

export interface IMeteor {
    id: string;
    name: string;
    nametype: string;
    recclass: string;
    mass: string;
    fall: string;
    year: string;
    reclat: string;
    reclong: string;
    geolocation: IGeoLocation;
}

export enum MeteorFilterEnum {
    Empty,
    JumpToFirstYear
}