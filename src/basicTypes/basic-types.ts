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

// Boolean
let isDone: boolean = true;

// Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// Object
let person: { name: string; age: number } = { name: "John", age: 30 };

// String
let color: string = "blue";
color = 'red';

// Array
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// Tuple
let x: [string, number];
x = ["hello", 10]; // OK

// Enum
enum Color { Red, Green, Blue }
let c: Color = Color.Green;

// Any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

// Void
function warnUser(): void {
    console.log("This is my warning message");
}

// Null and Undefined
let u: undefined = undefined;
let n: null = null;

// Never
function error(message: string): never {
    throw new Error(message);
}

// Unknown
let notSure2: unknown = 4;
notSure2 = "maybe a string instead";
notSure2 = false; // okay, definitely a boolean