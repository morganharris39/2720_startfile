export function basicTypesNumber() {
    return {
        title: "Numbers",
        explanation: "The number type in TypeScript represents both integer and floating-point numbers. TypeScript supports different number literals including decimal, hexadecimal, binary, and octal bases. All numbers in TypeScript are floating-point values, stored as double precision 64-bit numbers (IEEE 754). This type can handle basic arithmetic operations and includes special values like Infinity, -Infinity, and NaN. TypeScript's number type helps prevent common mathematical errors by ensuring type safety in calculations. Understanding number types is fundamental for performing mathematical operations and handling numeric data in TypeScript applications.",
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
        title: "Strings",
        explanation: "The string type in TypeScript represents textual data and supports both single and double quotes for string literals. One of its most powerful features is template literals (using backticks), which enable multi-line strings and string interpolation. Strings in TypeScript are immutable and come with built-in properties and methods for text manipulation. TypeScript's string type system helps catch common string-related errors at compile time rather than runtime. Understanding string types is crucial for text processing, data formatting, and user interface development.",
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
        title: "Booleans",
        explanation: "The boolean type in TypeScript represents a logical value that can be either true or false. Boolean values are fundamental for controlling program flow through conditional statements and loops. TypeScript's boolean type helps enforce type safety when working with logical operations and conditions. Boolean operations include logical AND (&&), OR (||), and NOT (!), which are essential for creating complex conditional logic. Understanding boolean types is crucial for implementing control flow and decision-making in TypeScript applications.",
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
        title: "Objects",
        explanation: "The object type in TypeScript represents any non-primitive type and is used to define structured data. TypeScript's object types can be defined using interfaces or type aliases, providing strong type checking and autocompletion features. Objects can include optional properties, readonly properties, and nested objects, making them highly flexible for modeling complex data structures. TypeScript's structural typing system allows for duck typing while maintaining type safety. Understanding object types is essential for working with structured data and implementing object-oriented programming patterns.",
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
        title: "Arrays",
        explanation: "Arrays in TypeScript are ordered lists of typed elements that can be of any valid TypeScript type. TypeScript provides type safety for arrays by ensuring that all elements conform to the specified type. Arrays come with built-in methods for manipulation and iteration, all while maintaining type safety. TypeScript's array type system helps prevent common errors like pushing incorrect types into an array. Understanding array types is crucial for working with collections of data and implementing data structures in TypeScript.",
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
        title: "Tuples",
        explanation: "Tuples in TypeScript are arrays with a fixed number of elements where each element may have a different type. Unlike regular arrays, tuples enforce both the types and the order of elements, providing additional type safety. Tuples are particularly useful when working with methods that return multiple values or when dealing with structured data with a known format. TypeScript's type system ensures that tuple elements are accessed with their correct types. Understanding tuple types is essential for handling fixed-length, mixed-type collections of data.",
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
        title: "Enums",
        explanation: "Tuples in TypeScript are arrays with a fixed number of elements where each element may have a different type. Unlike regular arrays, tuples enforce both the types and the order of elements, providing additional type safety. Tuples are particularly useful when working with methods that return multiple values or when dealing with structured data with a known format. TypeScript's type system ensures that tuple elements are accessed with their correct types. Understanding tuple types is essential for handling fixed-length, mixed-type collections of data.",
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
        title: "Any",
        explanation: "The any type in TypeScript represents a dynamic type that bypasses type checking. It's particularly useful when working with values from dynamic content or during migration from JavaScript to TypeScript. While any provides maximum flexibility, it should be used sparingly as it removes TypeScript's type safety benefits. Values of type any can be assigned to any other type and can have any properties or methods called on them. Understanding any is important for handling dynamic data and gradual typing adoption, though it should be used cautiously to maintain type safety.",
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
        title: "Void",
        explanation: "The void type in TypeScript represents the absence of any type and is commonly used as the return type of functions that don't return a value. It's different from undefined or null and serves as an explicit indication that a function performs an action but doesn't produce a value. TypeScript uses void to enforce type safety by preventing accidental usage of undefined return values. Understanding void is crucial for properly typing functions that perform operations without returning results. The void type helps maintain clear function contracts and improves code predictability.",
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
        title: "Null",
        explanation: "The null type in TypeScript represents an intentional absence of value and is one of TypeScript's bottom types. It's particularly important in TypeScript's strict null checking mode, where it helps prevent null reference errors. TypeScript's type system allows for explicit handling of null values through union types and null checks. The null type is distinct from undefined and represents an intentionally empty value. Understanding null types is essential for handling optional values and implementing robust null-checking patterns in TypeScript applications.",
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
        title: "Never",
        explanation: "The never type in TypeScript represents values that never occur and is used when a function never returns or always throws an exception. It's particularly useful for exhaustive type checking and representing impossible states in type systems. The never type is a bottom type, meaning it's assignable to every type, but no type is assignable to never. Functions returning never must have unreachable end points, either through throwing exceptions or infinite loops. Understanding never is crucial for type-safe error handling and exhaustive type checking in TypeScript.",
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
        title: "Unknown",
        explanation: "The unknown type in TypeScript represents a type-safe counterpart to any. It ensures that values of unknown type must be type-checked before they can be used in operations. Unlike any, unknown enforces type verification through type guards or assertion before allowing specific operations. TypeScript requires explicit type checking when working with unknown values, making it a safer alternative to any. Understanding unknown is essential for handling values with uncertain types while maintaining type safety. The unknown type is particularly useful when working with external data or API responses where the type information isn't available at compile time.",
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