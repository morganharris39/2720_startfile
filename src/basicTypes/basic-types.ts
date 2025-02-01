export function basicTypesExample() {
    return {
        title: 'Basic Types',
        explanation: 'This section covers basic types in TypeScript',
        code: `
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

let floating: number = 3.14;
console.log(floating); // Output: 3.14

let negative: number = -42;
console.log(negative); // Output: -42

    `}
}

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

// Key points:
// - Represents true/false values
// - Used in conditional statements
// - Default type for logical operations

//------------------ Number ------------------//

let decimal: number = 6;
console.log(decimal); // Output: 6

let hex: number = 0xf00d;
console.log(hex); // Output: 61453

let binary: number = 0b1010;
console.log(binary); // Output: 10

let octal: number = 0o744;
console.log(octal); // Output: 484

let floating: number = 3.14;
console.log(floating); // Output: 3.14

let negative: number = -42;
console.log(negative); // Output: -42

// Key points:
// - All numbers are floating point values
// - Supports decimal, hex, binary, octal
// - NaN and Infinity are valid number values

//------------------ Object ------------------//

let person: { name: string; age: number } = {
    name: "John",
    age: 30
};
console.log(person); // Output: { name: 'John', age: 30 }

person.name = "Jane";
person.age = 25;
console.log(person); // Output: { name: 'Jane', age: 25 }

// Key points:
// - Represents non-primitive types
// - Use interfaces for better type definition
// - Can be generic

//------------------ String ------------------//

let color: string = "blue";
console.log(color); // Output: blue

color = 'red';
console.log(color); // Output: red

let fullName: string = `John Doe`;
console.log(fullName); // Output: John Doe

let sentence: string = `Hello, my name is ${fullName}.`;
console.log(sentence); // Output: Hello, my name is John Doe.

// Key points:
// - Supports single/double quotes and template literals
// - UTF-16 text
// - String interpolation with backticks

//------------------ Array ------------------//

let list: number[] = [1, 2, 3];
console.log(list); // Output: [1, 2, 3]

let colors: string[] = ["red", "green", "blue"];
console.log(colors); // Output: ["red", "green", "blue"]

let mixedArray: (number | string)[] = [1, "two", 3];
console.log(mixedArray); // Output: [1, "two", 3]

// Key points:
// - Two ways to declare: T[] or Array<T>
// - Type-safe array operations
// - Can be readonly

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

// Key points:
// - Fixed-length array with known types
// - Order matters
// - Strict type checking for each position

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

// Key points:
// - Named constants
// - Numeric or string-based
// - Can have computed values

//------------------ Any ------------------//

let notSure: any = 4;
console.log(notSure); // Output: 4

notSure = "maybe a string instead";
console.log(notSure); // Output: maybe a string instead

notSure = false;
console.log(notSure); // Output: false

let anyArray: any[] = [1, true, "free"];
console.log(anyArray); // Output: [1, true, "free"]

// Key points:
// - Opts out of type checking
// - Use sparingly
// - Useful for gradual typing

//------------------ Void ------------------//

function warnUser(): void {
    console.log("This is a warning message");
}
warnUser(); // Output: This is a warning message

// Key points:
// - Absence of any type
// - Used for functions with no return value
// - Can only be assigned undefined or null

//------------------ Null and Undefined ------------------//

let u: undefined = undefined;
console.log(u); // Output: undefined

let n: null = null;
console.log(n); // Output: null

// Basic nullish coalescing
const userInput = null;
const defaultValue = "default";
const result = userInput ?? defaultValue; // returns "default"
console.log(result); // Output: default

// Key points:
// - Subtypes of all other types by default
// - Use strictNullChecks for better safety
// - Use union types with null

//------------------ Never ------------------//

function error(message: string): never {
    throw new Error(message);
}

// Call the error function to use its value
try {
    error("This is an error");
} catch (e) {
    if (e instanceof Error) {
        console.log(e.message); // Output: This is an error
    }
}

// Key points:
// - Represents values that never occur
// - Used for functions that never return
// - Used in exhaustive type checking

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

// Key points:
// - Type-safe alternative to any
// - Requires type checking before use
// - More restrictive than any