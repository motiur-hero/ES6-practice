const ages = [12,25,10,14];
const ages2 = [15,17,12,13];
const ages3 = [25,27,22,23];
const totalAge = ages.concat(ages2).concat([5]).concat(ages3)
const totalAge2 = [...ages,...ages2,5,...ages3]
console.log(totalAge2);

const minister = 450;
const business = 550;
const sochib = 470;
const takaPoisa = [650,120,880];
const maximum = Math.max(...takaPoisa);
console.log(maximum);
