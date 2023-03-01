let salary1 = prompt("Enter first month salary");
let salary2 = prompt("Enter second month salary");
let totalSalary = +salary1 + +salary2; //сумма за два месяці
alert("Your salary for 2 month is: " + totalSalary.toFixed() + "$");

let bonus = 1;
let bonusSalary = totalSalary + bonus; //бонус до сумми
alert(
  "You have extra bonus! Your total salary was " +
    totalSalary.toFixed() +
    "$" +
    " it's increase for " +
    bonus.toFixed() +
    "$" +
    " and now it is: " +
    bonusSalary.toFixed() +
    "$"
);

// let goodWork = (bonusSalary >= 2000);
// let message = "Will you work next? " + goodWork;
// alert(message);//перший варіант завдання 3

// let minSalary = 2000;
// if (bonusSalary >= minSalary ) {
//     alert ("Will you work next? true");
// }
// else {
//     alert ("Will you work next? false");
// } //другий варіант завдання 3

let salary = bonusSalary;
alert((salary >= 2000 && "I'm ready to work") || (salary < 2000 && "I'm out"));
