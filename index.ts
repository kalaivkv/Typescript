
/* Variable Types*/
let username: string = "kalaivanan";  
let age: number = 300;           
let isDeveloper: boolean = true; 
let skills: string[] = ["Javascript", "TypeScript"]; 


/* Functions in TypeScript */
function add(a: number, b: number): number {
    return a + b;
  }
  console.log(add(57, 10));  
 
  
/*  Arrow function */
const multiply = (x: number, y: number): number => x * y;
console.log(multiply(10, 5)); 


/* Interfaces*/
interface User {
    id: number;
    name: string;
    email: string;
    isAdmin?: boolean; 
  }
  const user1: User = { id: 1, name: "KalaiVanan", email: "kalaivkv24@gmail.com" };

  
/* Classes & Inheritance */
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(`Hello, my name is ${this.name}`);
  }
}
class Developer extends Person {
  skills: string[];

  constructor(name: string, age: number, skills: string[]) {
    super(name, age);
    this.skills = skills;
  }
}
const dev = new Developer("kalai", 30, ["Javascript", "TypeScript"]);
dev.greet();
console.log(dev.skills);

/* Enums */
enum Role {
    User = "USER",
    Admin = "ADMIN",
    Guest = "GUEST",
  }
  const userRole: Role = Role.Admin;
  console.log(userRole); 
  
/* any , unknown */
let data: any;
data = "Hello";   
data = 42;        
data = true;      
console.log(data); 

let input: unknown;
input = "Hello kalaivanan .";
console.log((input as string).toUpperCase()); 
input = 100;
if (typeof input === "number") {
  console.log(input.toFixed(2)); 
} 
  
/* Tuples */
let user: [number, string] = [1, "kalai"];

/* Intersection Type */
let value: string | number;
value = "Hello kalai";  
value = 24;       

/* Generic Interface */
interface Box<T> {
    value: T;
  } 
  const numberBox: Box<number> = { value: 500 };
  const stringBox: Box<string> = { value: "I am kalaivanan ." };
  console.log(numberBox.value); 
  console.log(stringBox.value); 
  
  /* Generic Function with Arrays */
  function getFirstElement<T>(arr: T[]): T {
    return arr[1];
  }
  console.log(getFirstElement<number>([1, 2, 3])); 
  console.log(getFirstElement<string>(["kalai", "siva", "Hari"])); 
  