// let car: { brand: string; year: number } = { brand: 'toyota', year: 2020 };

// car.brand = 'ford'
// // car.color = 'blue'

// let car1: { brand: string; year: number } = { brand: 'audi', year: 2022 };

// let book = { title: 'book', cost: 20 }
// let pen = { title: 'pen', cost: 10 }
// let notebook = { title: 'notebook' }

// let items:{ readonly title: string; cost?: number }[] = [book,pen,notebook]
// items[0].title = 'new book'

// let bike:{ brand: string; year: number } = { brand: 'yamaha', year: 2010 }
// // bike.year = 'old'

// let laptop:{ brand: string; year: number } = { brand: 'Dell', year: 2020 }
// // let laptop2:{ brand: string; year: number } = { brand: 'HP' }

// let product1 = { title:'shirt', price: 20 }
// let product2 = { title:'pants'}
// let products: { title:string, price?: number }[] = [product1, product2]

// products.push({ title: 'shoes' })


// function sayHi(name:string){
//     console.log(`Hello there ${name.toUpperCase()}`)
// }

// sayHi('john')
// // sayHi(3)


// function calculateDiscount(price:number): number {
//     const hasDiscount = true
    
//     if(hasDiscount){
//         return price
//         // return 'Discount Applied'
//     }
    
//     return price * 0.9
// }

// const finalPrice = calculateDiscount(200)


// function sum(message:string, ...numbers:number[]): string {
//     const doubled = numbers.map((num) => num * 2)
//     console.log(doubled)


//     let total = numbers.reduce((previous, current)=>{
//         return previous + current
//     }, 0)
//     return `${message}${total}`
// }

// let result = sum('The total is: ', 1, 2, 3, 4, 5)
// console.log(result)


// // function doesn't return
// function logMessage(message: string): void {
//     console.log(message)
//     // return 'hello world'
// }

// logMessage('Hello, Typescript')


// // Type guard: to check the parameter at the runtime 
// function processInput(input: string | number) {
//     if (typeof input === "number") {
//         console.log(input * 2)
//     } else {
//         console.log(input.toLowerCase())
//     }
// }

// processInput(10)
// processInput("Hello")


// function createEmployee({ id }: { id: number }) : {
//     id: number;
//     isActive: boolean;
// } {
//     return { id, isActive: id % 2 === 0};
// }

// const first = createEmployee({ id: 1 });
// const second = createEmployee({ id: 2 });
// console.log(first, second);

// // alternative

// function createStudent(student:{id:number;name:string}):void{
//     console.log(`Welcome to the course ${student.name.toUpperCase()}!!!`);
// }

// const newStudent = {
//     id: 5,
//     name: 'anna',
//     email: 'anna@gmail.com'
// };

// createStudent(newStudent)
// createStudent({ id:1, name: 'bob' })


// ## Challenge

// function processData(input: string | number, config: {reverse:boolean} = {reverse:false}): number | string {
//     // console.log("testing");

//     if (typeof input === "number") {
//         return input * input;
//     } else {
//         let str = input
//         if(config.reverse) {
//             str = str.split("").reverse().join();
//         }
//         str = str.toUpperCase();
//         return str;
//     }

// }

// console.log(processData(3))
// console.log(processData("four"))
// console.log(processData("five", {reverse: true}))


// type User = { id: number; name: string; isActive: boolean } 
// const john: User = {
//     id: 1,
//     name: 'john',
//     isActive: true,
//   };
//   const susan: User = {
//     id: 1,
//     name: 'susan',
//     isActive: false,
//   };
  
//   function createUser(user: User): User {
//     console.log(`Hello there ${user.name.toUpperCase()} !!!`);
  
//     return user;
//   }


//   type StringOrNumber = string | number;

//   let value: StringOrNumber
//   value = 'hello'
//   value = 123

//   type Theme = 'light' | 'dark'

//   let theme: Theme
//   theme = 'dark'
//   theme = 'light'

//   function setTheme(t: Theme) {
//     theme = t
//   }

//   setTheme('dark')


// // ## Challenge

// type Employee = { id: number; name: string; department: string }
// type Manager = { id: number; name: string; employees: Employee[] }
// type Staff = Employee | Manager

// function printStaffDetails(staff: Staff): void {
//     if('employees' in staff) {
//         console.log(
//             `${staff.name} is a manager of ${staff.employees.length} employees`
//         )
//     } else {
//         console.log(
//             `${staff.name} is an employee in the ${staff.department} department`
//         )
//     }
// }

// const alice:Employee = { id: 1, name: 'alice', department: 'Sales'}
// const steve:Employee = { id: 2, name: 'steve', department: 'HR'}

// const bob: Manager = { id: 1, name: 'bob', employees: [alice, steve] }

// printStaffDetails(bob)


// // Intersection type

// type Book = { id: number; name: string; price: number }
// type DiscountedBook = Book & { discount: number }

// const book1: Book = {
//     id: 1,
//     name: 'how to cook a dragon',
//     price: 15,
// }
// const book2: Book = {
//     id: 2,
//     name: 'the secret life of unicorns',
//     price: 18,
// }

// // const discountedBook: Book & { discount: number } = {    // one way
// const discountedBook: DiscountedBook = {
//     id: 3,
//     name: 'Gnomes vs Goblins: The Ultimate Guide',
//     price: 25,
//     discount: 0.15,
// }


// // Computed properties

// const propName = 'age'

// type Animal = {
//     [propName]: number
// }

// let tiger: Animal = { [propName]: 5 }


// // ## Interface - Fundamentals

// interface Book{
//     readonly isbn: number;
//     title: string;
//     author: string;
//     genre?: string;
//     // method
//     printAuthor(): void;
//     printTitle(message:string): string;
//     printSomething: (someValue: number) => number;
// }
// const deepWork: Book = {
//     isbn: 123,
//     title: 'deep work',
//     author: 'cal newport',
//     // genre: 'self-help',
//     printAuthor(){
//         console.log(this.author);
//     },
//     printTitle(message){
//         return `${this.title} ${message} modified`
//     },
//     // first option
//     // printSomething: function (someValue) {
//     //     return someValue;
//     // },
//     // second option
//     // printSomething: (someValue) => {
//     //     // console.log(this)
//     //     console.log(deepWork);
//     //     return someValue;
//     // }
//     // third option
//     printSomething(someValue) {
//         return someValue;
//     }
// }

// // // deepWork.isbn = 234;
// // deepWork.printAuthor();
// // console.log(deepWork.printTitle("Mensagito"));
// console.log(deepWork.printSomething(123));


// // ## Challenge

// interface Computer {
//     readonly id: number;
//     brand: string;
//     ram: number;
//     storage?: number;
//     upgradeRam(increaseRam:number):number;
// }

// let compy: Computer = {
//     id:1, 
//     brand: "brandy", 
//     ram: 16,
//     upgradeRam(increaseRam){
//         return this.ram += increaseRam 
//     }    
// }

// console.log(compy.upgradeRam(10))
// console.log(compy.upgradeRam(4))
// console.log(compy)


// interface Person {
//     name: string;
//     getDetails(): string;
// }

// interface DogOwner{
//     dogName: string;
//     getDogDetails(): string;
// }

// interface Person {
//     age: number;
// }

// const person:Person = {
//     name: 'john',
//     age: 30,
//     getDetails(){
//         return `Name: ${this.name}, Age: ${this.age}`;
//     }
// }

// console.log(person.getDetails())

// interface Employee extends Person {
//     employeeId: number;
// }

// const employee: Employee = {
//     name: 'jane',
//     age: 28,
//     employeeId: 123,
//     getDetails() {
//         return `Name: ${this.name}, Age: ${this.age}, Employee ID: ${this.employeeId}`
//     }
// }

// console.log(employee.getDetails())

// interface Manager extends Person, DogOwner {
//     managePeople(): void;
// }

// const manager: Manager = {
//     name: 'bob',
//     age: 35,
//     dogName: 'rex',
//     getDetails() {
//         return `Name: ${this.name}, Age: ${this.age}`;
//     },
//     getDogDetails() {
//         return `Name: ${this.dogName}`;
//     },
//     managePeople() {
//         console.log("Managing people...")
//     }
// }

// manager.managePeople()


// // ## Challenge - Part 1

// interface Person {
//     name: string;

// }
// interface DogOwner extends Person {
//     dogName: string;

// }

// interface Manager extends Person {
//     managePeople(): void;
//     delegateTasks(): void;
// }

// function getEmployee(): Person | DogOwner | Manager {
//     const random = Math.random();
//     if(random < 0.33 ) {
//         return {
//             name: 'John',
//         }
//     } else if (random  < 0.66) {
//         return {
//             name: 'Sarah',
//             dogName: 'Rex',
//         }
//     } else {
//         return {
//             name: 'Tom',
//             managePeople() {
//                 console.log('Managing people.')
//             },
//             delegateTasks() {
//                 console.log('Do that task please.')
//             }
//         }
//     }
// }

// const employee : Person | DogOwner | Manager = getEmployee()
// console.log(employee.name)

// function isManager(obj: Person | DogOwner | Manager):obj is Manager {
//     return 'managePeople' in obj;
// }
// function isDogOwner(obj: Person | DogOwner | Manager):obj is DogOwner {
//     return 'dogName' in obj;
// }

// console.log(employee)
// if(isManager(employee)) {
//     console.log("Is manager")
//     employee.delegateTasks()
// } else if(isDogOwner(employee)) {
//     console.log("Is dog owner")
//     console.log(employee.dogName)
    
// } else {
//     console.log("Is person")
// }


// let person: [string, number] = ['john', 25];

// let date: readonly [number, number, number] = [12, 17, 2001];
// // date.push(22)

// function getPerson(): [string, number] {
//     return ['john', 25];
// }

// let randomPerson = getPerson()
// console.log(randomPerson[0]);

// let susan: [string, number?] = ['susan']


// enum ServerResponseStatus {
//     Success = 200,
//     Error = 500,
// }

// Object.values(ServerResponseStatus).forEach((value) => {
//     if(typeof value === 'number') {
//         console.log(value)
//     }
// })

// console.log(ServerResponseStatus)

// interface ServerResponse {
//     result: ServerResponseStatus;
//     data: string[];
// }

// function getServerResponse(): ServerResponse{
//     return {
//         result: ServerResponseStatus.Success,
//         data: ['first item', 'second item'],
//     };
// }

// const response: ServerResponse = getServerResponse()
// console.log(response)


// // ## Challenge

// enum UserRole {
//     Admin,
//     Manager,
//     Employee
// }

// type User = {
//     id: number,
//     name: string,
//     role: UserRole | string,
//     contact: [string, string]
// }

// function createUser(user:User): User {
//     return user
// }
// let pepe: User = createUser({
//     id: 1,
//     name: "Pepe",
//     role: UserRole[0],
//     contact: ["123", "456"]
// })


// console.log(pepe)


// let someValue: any = 'this is a string';

// let strLenght: number = (someValue as string).length;

// type Bird = {
//     name: string;
// };

// let birdString = '{"name": "Eagle"}';
// let dogString = '{"breed": "Poodle"}';

// let birdObject = JSON.parse(birdString);
// let dogObject = JSON.parse(dogString);

// let bird = birdObject as Bird
// let dog = dogObject as Bird

// console.log(bird.name)
// console.log(dog.name)


// enum Status {
//     Pending = 'pending',
//     Declined = 'declined',
// }

// type User = {
//     name: string;
//     status: Status;
// }

// // save Status.Pending in the DB as a string
// // retrieve string from the DB

// const statusValue = 'pending';

// const user:User = {name: 'john', status: statusValue as Status};


// let unknownValue: unknown;

// unknownValue = 'hello world';
// unknownValue = [1, 2, 3];
// unknownValue = 42.33455;

// if (typeof unknownValue === 'number') {
//     unknownValue.toFixed(2);
// }

// function runSomeCode() {
//     const random = Math.random();
//     if (random < 0.5) {
//         throw new Error('there was error...');
//     } else {
//         throw 'some error';
//     }
// }

// try {
//     runSomeCode();
// } catch (error) {
//     if (error instanceof Error) {
//         console.log(error.message);
//     } else {
//         console.log(error)
//     }
// }


// let someValue: never = 'hello'

// type Theme = 'light' | 'dark'

// function checkTheme(theme:Theme): void {
//     if (theme === 'light') {
//         console.log('light theme');
//         return;
//     }
//     if (theme === 'dark') {
//         console.log('dark theme');
//         return;
//     }
//     theme
// }

// enum Color {
//     Red,
//     Blue,
//     Green,
// }

// function getColorName(color: Color) {
//     switch (color) {
//         case Color.Red:
//             return 'Red';
//         case Color.Blue:
//             return 'Blue';
//         case Color.Green:
//             return 'Green';
//         default:
//             // at build time
//             let unexpectedColor: never = color;
//             // at runtime
//             throw new Error(`Unexpected color value: ${color}`);
//     }
// }


//  type ValueType = string | number | boolean;

//  let value: ValueType;
//  const random = Math.random();
//  value = random < 0.33 ? 'Hello' : random < 0.66 ? 123.456 : true;

//  function checkValue(value:ValueType):void {
//     if(typeof value === 'string') {
//         console.log(value.toLowerCase());
//         return;
//     }
//     if(typeof value === 'number') {
//         console.log(value.toFixed(2));
//         return;
//     }
//     console.log(`boolean: ${value}`);

//  }
//  checkValue(value)



// type Dog = { type: 'dog'; name: string; bark: () => void }
// type Cat = { type: 'cat'; name: string; meow: () => void }
// type Animal = Dog | Cat 

// // function makeSound(animal: Animal) {
// //     if (animal.type === 'dog') {
// //         animal.bark()
// //     } else {
// //         animal.meow()
// //     }
// // }

// function makeSound(animal:Animal) {
//     if('bark' in animal) {
//         animal.bark()
//     } else {
//         animal.meow()
//     }
// }


// function printLength (str: string | null | undefined) {

//     if(str) {
//         console.log(str.length)
//     } else {
//         console.log('No string provided')
//     }
// }

// printLength(null)


// try {
//     throw new Error('This is an error')
// } catch (error) {
//     if(error instanceof Error) {
//         console.log(`Caught an error object : ${error.message}`);
//     } else {
//         console.log('unknown error...')
//     }
// }

// function checkInput(input:Date | string): string {
//     if(input instanceof Date) {
//         return input.getFullYear().toString()
//     }
//     return input
// }

// const year = checkInput(new Date())
// const random = checkInput('2020-05-05')

// console.log(year)
// console.log(random)


type Student = {
    name: string;
    study: () => void;
}

type User = {
    name: string;
    login: () => void;
}

type Person = Student | User;

const randomPerson = (): Person => {
    return Math.random() > 0.5
        ? { name: 'john', study: () => console.log('Studying') }
        : { name: 'mary', login: () => console.log('Logging in') }
}

// const person= randomPerson()
const person:Person = {
    name: 'anna',
    study:() => console.log('study...')
}

function isStudent(person: Person):person is Student{
    // return 'study' in person
    return (person as Student).study !== undefined;
}

if(isStudent(person)){
    person.study();
} else {
    person.login()
}
