console.log('Hello World, from basic-types.ts');

/* Basic Types in Typescript 

- Boolean
- Number
- Object
- String
- Array
- Tuple
- Enum
- Any
- Void
- Null and Undefined
- Never
- Unknown

*/

//------------------ Boolean ------------------//

let isDone: boolean = false;
console.log(isDone); // Output: false

isDone = true;
console.log(isDone); // Output: true

//------------------ Number ------------------//

let decimal: number = 6;
console.log(decimal); // Output: 6

let hex: number = 0xf00d;
console.log(hex); // Output: 61453

let binary: number = 0b1010;
console.log(binary); // Output: 10

let octal: number = 0o744;
console.log(octal); // Output: 484

let float: number = 3.14;
console.log(float); // Output: 3.14

//------------------ Object ------------------//

let person: { name: string; age: number } = {
    name: "John",
    age: 30
};
console.log(person); // Output: { name: 'John', age: 30 }

person.name = "Jane";
person.age = 25;
console.log(person); // Output: { name: 'Jane', age: 25 }

//------------------ String ------------------//

let color: string = "blue";
console.log(color); // Output: blue

color = 'red';
console.log(color); // Output: red

let fullName: string = `John Doe`;
console.log(fullName); // Output: John Doe

let sentence: string = `Hello, my name is ${fullName}.`;
console.log(sentence); // Output: Hello, my name is John Doe.

//------------------ Array ------------------//

let list: number[] = [1, 2, 3];
console.log(list); // Output: [1, 2, 3]

let colors: string[] = ["red", "green", "blue"];
console.log(colors); // Output: ["red", "green", "blue"]

let mixedArray: (number | string)[] = [1, "two", 3];
console.log(mixedArray); // Output: [1, "two", 3]

//------------------ Tuple ------------------//

let tuple: [string, number];
tuple = ["hello", 10]; // OK
console.log(tuple); // Output: ["hello", 10]

// Accessing tuple elements
console.log(tuple[0]); // Output: hello
console.log(tuple[1]); // Output: 10

// Updating tuple elements
tuple[0] = "world";
tuple[1] = 20;
console.log(tuple); // Output: ["world", 20]

//------------------ Enum ------------------//

enum Color {
    Red,
    Green,
    Blue
}
let c: Color = Color.Green;
console.log(c); // Output: 1

enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}
let d: Direction = Direction.Left;
console.log(d); // Output: 3

//------------------ Any ------------------//

let notSure: any = 4;
console.log(notSure); // Output: 4

notSure = "maybe a string instead";
console.log(notSure); // Output: maybe a string instead

notSure = false;
console.log(notSure); // Output: false

let anyArray: any[] = [1, true, "free"];
console.log(anyArray); // Output: [1, true, "free"]

//------------------ Void ------------------//

function warnUser(): void {
    console.log("This is a warning message");
}
warnUser(); // Output: This is a warning message

//------------------ Null and Undefined ------------------//

let u: undefined = undefined;
console.log(u); // Output: undefined

let n: null = null;
console.log(n); // Output: null

//------------------ Never ------------------//

function error(message: string): never {
    throw new Error(message);
}

// Call the error function to use its value
try {
    error("This is an error");
} catch (e) {
    console.log(e.message); // Output: This is an error
}

//------------------ Unknown ------------------//

let notKnown: unknown = 4;
console.log(notKnown); // Output: 4

notSure = "maybe a string instead";
console.log(notSure); // Output: maybe a string instead

notSure = false;
console.log(notSure); // Output: false

// Type checking is required before using unknown type
if (typeof notSure === "string") {
    console.log(notSure.toUpperCase()); // Output: MAYBE A STRING INSTEAD
}