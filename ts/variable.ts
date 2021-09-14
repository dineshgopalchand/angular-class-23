// let value='SDLC training';
// value='SDLC Training, Bangalore';
// value+=', karanataka';
// console.log(value);
// const NAME_VAL='Dinesh Gopal Chand';
// console.log(NAME_VAL);

let stringVal = 'SDLC Training';
// stringVal = 1;
let stringVal1: string;
stringVal1 = 'ddd';
// stringVal1 = (2).toString();
let numberVal: number;
let boolVal: boolean;

let someVal = [1, 2, 'asd', true, [1, 3, 343, 3]];

// let someObject: {
//     id: number;
//     name: string;
//     location: string;
// } = {
//     id: 123212,
//     name: 'Jenifer',
//     location: 'BLR'
// };
type detailsType = {
    id: number;
    name: string;
    location: string;
    location1?:string;
};
let someObject: detailsType = {
    id: 123212,
    name: 'Jenifer',
    location: 'BLR',
    location1: 'BLR',
};
