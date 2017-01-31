export function getTimer(mil) {
let hour = ((mil / 1000 / 60) / 60);
let min = (mil / 1000 / 60);
let sec = (mil / 1000);
let str = '';
if (hour >= 1) {
const floorH = Math.floor(hour);
min = ((hour - floorH) * 60);
str += `${floorH}:`;
}
if (min >= 1) {
const floorM = Math.floor(min);
if (floorM <= 9) { str += `0${floorM}:`; 
} else {
str += `${floorM}:`;
}
sec = (min - floorM) * 60;
} else {
sec = min * 60;
str += `0${Math.round(min)}:`;
}

if (sec >= 1) {
const roundS = Math.round(sec);
if (roundS <= 9) { str += `0${roundS}`; 
} else {
str += roundS;
}
} else {
str += '00';
}
return str;
}
