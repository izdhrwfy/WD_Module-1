// 1. Code to find area of rectangle

let length = 5;
let width = 3;

let areaofRectangle = length * width;
console.log(areaofRectangle);

// 2. code to find perimeter (keliling) of rectangle

let lengthA = 5;
let widthA = 3;

let perimeter = 2 * (lengthA + widthA);
console.log(perimeter);

// 3. code to find diameter, circumference (keliling), and area of circle

let radius = 5;

let diameter = 2 * radius;
console.log(diameter);

let circumference = 2 * Math.PI * radius;
console.log(circumference);

let area = Math.PI * Math.pow(radius, 2);
console.log(area);

// 4. Code to find angle of triangle if two angles are given

let angle1 = 80;
let angle2 = 65;

let angleTriangle = 180 - (angle1 + angle2);
console.log(angleTriangle);

// 5. Code to get difference between dates in days

let date1 = new Date("2022-01-20");
let date2 = new Date("2022-01-22");

let differenceDates = (date2 - date1) / (24 * 3600 * 1000);
console.log(differenceDates);

// 6. Code to convert days to years, minths, days

/*
400 hari - 360 hari = 1 tahun, 40 hari
40 hari - 30 hari = 10 hari

*/

let inputDay = 400;

// Code find years

let year = Math.floor(inputDay / 360);
console.log(year);

// Code find : sisa hari dari tahun
let dayLeftFromYear = inputDay % 360;
console.log(dayLeftFromYear);

// Code find month
let month = Math.floor(dayLeftFromYear / 30);
console.log(month);

// Code find : sisa hari dari bulan

let dayLeft = dayLeftFromYear % 30;
console.log(dayLeft);

console.log(`${inputDay} = ${year} year, ${month} month, ${dayLeft} days`);
