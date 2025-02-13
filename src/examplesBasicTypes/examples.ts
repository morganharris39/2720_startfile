export function basicTypesNumber() {
    return {
        title: "Number Type in TypeScript",
        explanation: "This section covers the number type in TypeScript.",
        code: `
// Example of number type
let decimal: number = 10;           // Regular decimal
let hex: number = 0xf00d;          // Hexadecimal
let binary: number = 0b1010;       // Binary
let octal: number = 0o744;         // Octal
let floating: number = 3.14;       // Floating point
let negative: number = -42;        // Negative number

// Basic arithmetic
let sum: number = decimal + floating;
let product: number = decimal * 2;
    `}
}

export function basicTypesString() {
    return {
        title: "String Type in TypeScript",
        explanation: "This section covers the string type in TypeScript.",
        code: `
// Example of string type
let firstName: string = "Thor";              // Double quotes
let lastName: string = 'Anderson';           // Single quotes
let fullName: string = firstName + " (middle name) " + lastName;  // String concatenation

// Template literal (backtick)
let greeting: string = \`Hello, \${fullName}!\`; // String interpolation
let multiLine: string = \`
This is a multi-line
string using template
    literals\`\;

// String length and methods
let nameLength: number = fullName.length;    // String property
let upperName: string = fullName.toUpperCase(); // String method
    `}
}

export function basicTypesBoolean() {
    return {
        title: "Boolean Type in Typescript",
        explanation: "This section covers the boolean type in TypeScript.",
        code: `
// Example of boolean type
let isDone: boolean = false;        // Boolean declaration
let isActive: boolean = true;       // Another boolean
let isComplete: boolean = isDone && isActive;  // Logical AND
let isValid: boolean = isDone || isActive;     // Logical OR
let isReady: boolean = !isDone;               // Logical NOT
    `}
}

export function basicTypesObject() {
    return {
        title: "Object Type in Typescript",
        explanation: "This section covers the object type in TypeScript.",
        code: `
// Example of object type
// Simple object
let user: object = {
    name: "Thor",
    age: 30,
    isActive: true,
    interests: ["coding", "reading"],
};

// Using interface for better type checking
interface Person {
    name: string;
    age: number;
    email?: string;  // Optional property
}

// Object with interface
let employee: Person = {
    name: "Anderson",
    age: 25,
    email: "anderson@example.com",
};
    `}
}

export function arrayTypes() {
    return {
        title: "Array Type in TypeScript",
        explanation: "This section covers array types in TypeScript.",
        code: `
// Example of array type
let numbers: number[] = [1, 2, 3, 4, 5];           // Number array
let names: string[] = ["Thor", "Loki", "Odin"];    // String array

// Adding elements (type-safe)
numbers.push(6);                // OK
// numbers.push("seven");       // Error: Argument of type 'string' is not assignable to parameter of type 'number'

// Accessing elements
let firstNumber: number = numbers[0];  // OK
// let firstString: string = numbers[0]; // Error: Type 'number' is not assignable to type 'string'

// Array methods
let arrayLength: number = names.length;  // OK
    `}
}

export function arrayTypesTuple() {
    return {
        title: "Tuple Type in TypeScript",
        explanation: "This section covers tuple types in TypeScript.",
        code: `
// Example of tuple type
let person: [string, number] = ["Thor", 30];      // Declare tuple with string and number
let worker: [string, number, boolean] = ["Anderson", 25, true];  // Tuple with 3 elements

// Accessing tuple elements
let empName: string = worker[0];    // First element (string)
let empAge: number = worker[1];     // Second element (number)
let isWorking: boolean = worker[2];   // Third element (boolean)
    `}
}

export function arrayTypesEnum() {
    return {
        title: "Enum Type in TypeScript",
        explanation: "This section covers enum types in TypeScript.",
        code: `
// Example of enum type
// 1. Basic numeric enum for game status
enum GameStatus {
    Playing,     // 0
    Paused,      // 1
    GameOver,    // 2
    Victory      // 3
}
    `}
}

export function specialTypesAny() {
    return {
        title: "Any Types in TypeScript",
        explanation: "This section covers any types in TypeScript.",
        code: `
// Example of any type
// 1. Basic any usage
let dynamicValue: any = 4;
dynamicValue = "hello";    // OK
dynamicValue = true;       // OK
dynamicValue = [1, 2, 3];  // OK
    `}
}

export function specialTypesVoid() {
    return {
        title: "Void Types in TypeScript",
        explanation: "This section covers void types in TypeScript.",
        code: `
// Example of void type
// 1. Basic void function
function logMessage(message: string): void {
    console.log(message);
    // No return statement needed
}

// 2. Void in arrow functions
const printName = (name: string): void => {
    console.log(\`Hello, \${name}\`);
}
    `}
}

export function specialTypesNull() {
    return {
        title: "Null Types in TypeScript",
        explanation: "This section covers null types in TypeScript.",
        code: `
// 4. Null checking patterns
function processValue(value: string | null | undefined): string {
    // Nullish coalescing
    const safeValue = value ?? "default";
    return safeValue;
}
    `}
}

export function specialTypesNever() {
    return {
        title: "Never Types in TypeScript",
        explanation: "This section covers never types in TypeScript.",
        code: `
// Basic usage in functions
function throwError(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) {
        // Infinite loop, never returns
    }
}
    `}
}

export function specialTypesUnknown() {
    return {
        title: "Unknown Types in TypeScript",
        explanation: "This section covers unknown types in TypeScript.",
        code: `
// Example of unknown type
let userInput: unknown;
userInput = 5; // OK
userInput = "hello"; // OK

// Must check type before using unknown
let strLength: number;
if (typeof userInput === "string") {
    strLength = userInput.length; // OK - type is checked
}

userInput = "Thor";
if (typeof userInput === "string") {
    console.log(\`User input length: \${userInput.length}\`); // Safe to access
}
    `}
}