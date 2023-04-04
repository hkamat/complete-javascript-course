let markmass = 95;
let markheight = 1.88;
let markbmi;

let johnmass = 85;
let johnheight = 1.76;
let johnbmi;

markbmi = markmass / (markheight ** 2)
console.log(markbmi)
johnbmi = johnmass / (johnheight ** 2)
console.log(johnbmi)
let markHigherBMI = markbmi > johnbmi;

if (markbmi > johnbmi) {
  console.log(`Mark's BMI (${markbmi.toFixed(2)}) is higher than John's (${johnbmi.toFixed(2)})`)
} else {
  console.log(`John's BMI (${johnbmi.toFixed(2)}) is higher than Mark's (${markbmi.toFixed(2)})`)
}
console.log(markHigherBMI)