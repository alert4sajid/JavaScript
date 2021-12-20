//get right now
const now = Date();
console.log(now)
 
//set a specify date and time
const win95Launch = new Date(1995, 7, 24);

console.log(win95Launch);

const demoDate = new Date();
demoDate.setMonth(0);
console.log(demoDate);

console.log(`Day of week: ${demoDate.getDay()}`);
console.log(`Date: ${demoDate.getDate()}`);