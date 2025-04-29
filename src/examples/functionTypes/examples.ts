export function functionParams() {
    return {
      title: "Function Parameter Types in TypeScript",
      explanation: "TypeScript's parameter typing system enables developers to define explicit contracts for function inputs, ensuring type safety at compile time. Optional parameters, default values, and rest parameters provide flexibility while maintaining strict type checking. Parameter types enhance development experience through improved IDE support, including autocompletion and inline documentation. This type safety helps catch errors early in development and makes code more maintainable.",
      code: `
// Basic parameter types
function greet(name: string): string {
    return \`Hello, \${name}!\`;
}

// Multiple parameters with different types
function add(x: number, y: number): number {
    return x + y;
}

// Optional parameters (using ?)
function updateUser(id: number, name?: string): void {
    // name is optional
}

// Default parameters
function createMessage(text: string = "Default message"): string {
    return text;
}

// Rest parameters
function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}`,
    }
  }

  export function functionReturnTypesOne() {
    return {
      title: "Function Return Types in TypeScript",
      explanation: "Function return types in TypeScript define the expected output type of a function, creating clear contracts for function behavior. While TypeScript can often infer return types automatically, explicit return type declarations serve as self-documenting code and help catch type-related errors during development. TypeScript supports various basic return types including string, number, boolean, and void, with the same type system applying to both traditional and arrow functions. This type checking ensures consistent function output and improves code reliability.",
      code: `
function functionName(params): returnType {
return value; // must match returnType

// Basic return types
function getName(): string {
    return "John Doe";
}
// Arrow function with return type
const getNameArrow = (): string => 'John Doe'

// Number return type
function calculateArea(radius: number): number {
    return Math.PI * radius * radius;
}
// Arrow function with return type
const calculateAreaArrow = (radius: number): number => Math.PI * radius * radius

// Void return type (no return value)
function logMessage(msg: string): void {
    console.log(msg);
}

// Arrow function with void return type (no return value)
const logMessageArrow = (msg: string): void => console.log(msg)`
    }
}

export function functionReturnTypesTwo() {
    return {
      title: "Advanced Return Types in TypeScript",
      explanation: "Advanced return types in TypeScript allow functions to handle complex output patterns through union types, arrays, and Promises. Union return types enable functions to return different types based on conditions, while Promise return types handle asynchronous operations with type safety. The TypeScript compiler ensures all code paths return compatible types, preventing inconsistent return values and enhancing code reliability. These advanced typing features help create more maintainable code by catching potential issues during development.",
      code: `
// Array return type
function getNumbers(): number[] {
    return [1, 2, 3, 4, 5];
}

// Union return type
function getIdOrName(): string | number {
    return Math.random() > 0.5 ? 123 : "id123";
}

// Promise return type
async function fetchData(): Promise<string> {
    const response = await fetch('api/data');
    return response.text();
}`
    }
}