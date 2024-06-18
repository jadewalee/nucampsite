import { baseUrl } from "../shared/baseUrl";

export const mapInageUrl = (arr)=> {
    return arr.map((item)=>{
      return {
        ...item,
         image: baseUrl + item.image
        };
    });
}