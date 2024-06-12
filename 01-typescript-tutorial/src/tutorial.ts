
let awesomeName = 'shakeAndBake'
awesomeName = 'something'
awesomeName = awesomeName.toUpperCase()
console.log(awesomeName)

// awesomeName = 20

let amount: number = 20
amount = 12 - 1
// amount = "pants"

let isAwesome: boolean = true
isAwesome = false
// isAwesome = 'shakeAndBake'

// ## Challenge

// - Create a variable of type string and try to invoke a string method on it.
// - Create a variable of type number and try to perform a mathematical operation on it.
// - Create a variable of type boolean and try to perform a logical operation on it.
// - Try to assign a value of a different type to each of these variables and observe the TypeScript compiler's response.
// - You can use type annotation or inference

let varStrin: string = "Challenge"
varStrin = varStrin.charAt(2)
console.log(varStrin)

let varNum: number = 3
varNum = varNum * 5
console.log(varNum)

let varBool: boolean = true
if(varBool)
    console.log(varNum+varStrin)

// varStrin = 10
// varNum = "thirty"
// varBool = "yes"