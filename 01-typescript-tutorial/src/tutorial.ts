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

function processData(input: string | number, config: {reverse:boolean} = {reverse:false}): number | string {
    // console.log("testing");

    if (typeof input === "number") {
        return input * input;
    } else {
        let str = input
        if(config.reverse) {
            str = str.split("").reverse().join();
        }
        str = str.toUpperCase();
        return str;
    }

}

console.log(processData(3))
console.log(processData("four"))
console.log(processData("five", {reverse: true}))