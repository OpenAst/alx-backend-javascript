export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Micheal",
  lastName: "Hicks",
  age: 50,
  location: "New York, United States",
};

const student2: Student = {
  firstName: "Segun",
  lastName: "Oni",
  age: 23,
  location: "Oyo, Nigeria",
}

const studentsList: Array<Student> = [
  student1,
  student2,
];


