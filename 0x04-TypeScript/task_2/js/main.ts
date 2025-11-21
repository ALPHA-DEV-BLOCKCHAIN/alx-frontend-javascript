type Subjects = "Math" | "History";

export function teachClass(todayClass:Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else {
    return "Teaching History";
  }
}

// Test outputs
console.log(teachClass("Math"));    // Teaching Math
console.log(teachClass("History")); // Teaching History































// // Director Interface
// interface DirectorInterface {
//   workFromHome(): string;
//   getCoffeeBreak(): string;
//   workDirectorTasks(): string;
// }

// // Teacher Interface
// interface TeacherInterface {
//   workFromHome(): string;
//   getCoffeeBreak(): string;
//   workTeacherTasks(): string;
// }

// // Director Class
// class Director implements DirectorInterface {
//   workFromHome(): string {
//     return "Working from home";
//   }

//   getCoffeeBreak(): string {
//     return "Getting a coffee break";
//   }

//   workDirectorTasks(): string {
//     return "Getting to director tasks";
//   }
// }

// // Teacher Class
// class Teacher implements TeacherInterface {
//   workFromHome(): string {
//     return "Cannot work from home";
//   }

//   getCoffeeBreak(): string {
//     return "Cannot have a break";
//   }

//   workTeacherTasks(): string {
//     return "Getting to work";
//   }
// }

// // ALX-Compliant createEmployee function
// function createEmployee(salary: number | string): Director | Teacher {
//   if (salary < 500) {
//     return new Teacher();
//   } else {
//     return new Director();
//   }
// }

// // Type predicate to check if employee is Director
// function isDirector(employee: Director | Teacher): employee is Director {
//   return (employee as Director).workDirectorTasks !== undefined;
// }

// // Function to execute work based on employee type
// function executeWork(employee: Director | Teacher): string {
//   if (isDirector(employee)) {
//     return employee.workDirectorTasks();
//   } else {
//     return employee.workTeacherTasks();
//   }
// }

// // Test outputs
// console.log(createEmployee(200));      // Teacher {}
// console.log(createEmployee(1000));     // Director {}
// console.log(createEmployee("$500"));   // Director {}

// console.log(executeWork(createEmployee(200)));   // Getting to work
// console.log(executeWork(createEmployee(1000)));  // Getting to director tasks












// // Type predicate to check if employee is Director
// function isDirector(employee: Director | Teacher): employee is Director {
//   return (employee as Director).workDirectorTasks !== undefined;
// }

// // Function to execute work based on employee type
// function executeWork(employee: Director | Teacher): string {
//   if (isDirector(employee)) {
//     return employee.workDirectorTasks();
//   } else {
//     return employee.workTeacherTasks();
//   }
// }

// // Test examples
// console.log(executeWork(createEmployee(200)));   // Getting to work
// console.log(executeWork(createEmployee(1000)));  // Getting to director tasks







// interface DirectorInterface {
//   workFromHome(): string;
//   getCoffeeBreak(): string;
//   workDirectorTasks(): string;
// }

// interface TeacherInterface {
//   workFromHome(): string;
//   getCoffeeBreak(): string;
//   workTeacherTasks(): string;
// }

// class Director implements DirectorInterface {
//   workFromHome(): string {
//     return "Working from home";
//   }

//   getCoffeeBreak(): string {
//     return "Getting a coffee break";
//   }

//   workDirectorTasks(): string {
//     return "Getting to director tasks";
//   }
// }

// class Teacher implements TeacherInterface {
//   workFromHome(): string {
//     return "Cannot work from home";
//   }

//   getCoffeeBreak(): string {
//     return "Cannot have a break";
//   }

//   workTeacherTasks(): string {
//     return "Getting to work";
//   }
// }

// // createEmployee function
// function createEmployee(salary: number | string): Director | Teacher {
//   if (salary < 500) {
//     return new Teacher();
//   } else {
//     return new Director();
//   }
// }

// // Test output
// console.log(createEmployee(200));
// console.log(createEmployee(1000));
// console.log(createEmployee("$500"));
