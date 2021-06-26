import { User } from './User';
import { Company } from './Company';
import { CustomMap } from "./CustomMap";
// const user = new User();
// const company= new Company();
// console.log(user,company);
const customMap = new CustomMap('map');
customMap.addMarker(new User());
customMap.addMarker(new Company());