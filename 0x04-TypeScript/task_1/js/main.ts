interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

export { StudentClass };








// // Interface for the constructor
// interface StudentConstructor {
//   new (firstName: string, lastName: string): StudentClassInterface;
// }

// // Interface for the class
// interface StudentClassInterface {
//   workOnHomework(): string;
//   displayName(): string;
// }

// class StudentClass implements StudentClassInterface {
//   private firstName: string;
//   private lastName: string;

//   constructor(firstName: string, lastName: string) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   workOnHomework(): string {
//     return "Currently working";
//   }

//   displayName(): string {
//     return this.firstName;
//   }
// }

// export { StudentClass };















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

// interface printTeacherFunction {
//   firstName: string;
//   lastName: string;
// }

// function printTeacher({ firstName, lastName }: printTeacherFunction): string {
//   return `${firstName}. ${lastName}`;
// }

// console.log(printTeacher({ firstName: "John", lastName: "Doe" }));










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
