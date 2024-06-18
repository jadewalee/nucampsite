import { CAMPSITES } from "../../app/shared/CAMPSITES";

export const selectAllCampsites = () => {
    return CAMPSITES
}


export const selectedCampsiteById =(id)=> {
    return CAMPSITES.find((campsite)=> campsite.id === parseInt(id));
}


export const selectFeaturedCampsites = () => {
    return CAMPSITES.find((campsite)=> campsite.featured);
}

// export const selectRandomCampsite = () => {
//     return CAMPSITES[Math.floor(Math.random() * CAMPSITES.length)];
// }