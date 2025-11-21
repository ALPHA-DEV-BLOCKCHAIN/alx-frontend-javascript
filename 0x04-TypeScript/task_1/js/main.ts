interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Director extends Teacher {
  numberOfReports: number;
}

// 3. Interface describing the function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// 3. Function implementation
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

// Test output
console.log(printTeacher("John", "Doe"));










// interface Teacher {
//   readonly firstName: string;
//   readonly lastName: string;
//   fullTimeEmployee: boolean;
//   yearsOfExperience?: number;
//   location: string;
//   [key: string]: any;
// }

// interface Director extends Teacher {
//   numberOfReports: number;
// }

// const director1: Director = {
//   firstName: 'John',
//   lastName: 'Doe',
//   location: 'London',
//   fullTimeEmployee: true,
//   numberOfReports: 17,
// };

// console.log(director1);
