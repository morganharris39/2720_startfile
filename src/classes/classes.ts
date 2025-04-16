import { ExampleCodeSnippet } from '../lib/classes/ExampleCodeSnippet'

const section1 = document.querySelector('#section1')
const section2 = document.querySelector('#section2')
const section3 = document.querySelector('#section3')
const section4 = document.querySelector('#section4')
const section5 = document.querySelector('#section5')

const example1 = document.querySelector('#example1')
const example2 = document.querySelector('#example2')
const example3 = document.querySelector('#example3')
const example4 = document.querySelector('#example4')
const example5 = document.querySelector('#example5')

const observerOptions = {
  root: null,
  threshold: 0.45,
  rootMargin: '0px',
}

const sectionObserver = new IntersectionObserver(
  callBackFunction,
  observerOptions
)

if (section1) sectionObserver.observe(section1)
if (section2) sectionObserver.observe(section2)
if (section3) sectionObserver.observe(section3)
if (section4) sectionObserver.observe(section4)
if (section5) sectionObserver.observe(section5)

function callBackFunction(entries: IntersectionObserverEntry[]) {
  entries.forEach((entry) => {
    const div = entry.target.querySelector('div')
    const targetClass = (entry.target as HTMLElement).dataset.class
    console.log('Target class:', targetClass)

    if (entry.isIntersecting) {
      div?.classList.remove(targetClass ?? '', 'opacity-0')
    } else {
      div?.classList.add(targetClass ?? '', 'opacity-0')
    }
  })
}



// Class card function

const classExample = new ExampleCodeSnippet(
  'Class Example',

  `A class in TypeScript is a blueprint for creating objects that encapsulate data and behavior into a single unit. Classes enable object-oriented programming by providing a template for creating objects with their own properties and methods, supporting encapsulation through access modifiers like public and private.`,

  `
class Person {
name: string;
age: number;

constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
}

greet() {
    console.log(\`Hello, my name is \${this.name} and I am \${this.age} years old.\`);
  }
}`
)

if (example1) example1.innerHTML = classExample.renderCodeSnippet()



// Abstract dlasses card function

  const abstractClassExample = new ExampleCodeSnippet(
    'Abstract Class Example',

    `Abstract classes serve as foundational templates that other classes can extend, combining both abstract methods (which must be implemented by child classes) and concrete methods (which come with implementations). They cannot be instantiated directly, making them perfect for defining shared characteristics while ensuring specific implementations are handled by derived classes.`,

    `
abstract class Shape {

    protected color: string;

    abstract getArea(): number;

    abstract getPerimeter(): number;

    getColor(): string {
        return this.color;
    }
}`
)

if (example2) example2.innerHTML = abstractClassExample.renderCodeSnippet()



// Inheritance classes card function

const inheritanceClassExample = new ExampleCodeSnippet(
  'Inheritance Class Example',

  `Inheritance allows a class to extend another class, inheriting its properties and methods through the 'extends' keyword. This creates an "is-a" relationship between classes, enabling code reuse while allowing child classes to add or override functionality from their parent class.`,
  
  `
class Circle extends Shape {
  private radius: number // private means it's only accessible within this class

  constructor(radius: number, color: string) {
    super() // Call the constructor of the parent class
    this.radius = radius
    this.color = color
  }

  getArea(): number {
    return Math.PI * Math.pow(this.radius, 2)
  }

  getPerimeter(): number {
    return 2 * Math.PI * this.radius
  }
}`
)

if (example3) example3.innerHTML = inheritanceClassExample.renderCodeSnippet()



// Polymorphism classes card function

const polymorphismClassExample = new ExampleCodeSnippet(
  'Polymorphism Class Example',

  `Polymorphism enables objects of different classes to be treated as objects of a common base class, allowing different implementations of the same methods through a shared interface. This powerful feature lets you write flexible code that can work with multiple types through a single, uniform interface, enhancing code maintainability and extensibility.`,
  
  `
class Rectangle extends Shape {
  constructor(private width: number, private height: number, color: string) {
    super()
    this.color = color
  }

  getArea(): number {
    return this.width * this.height
  }
}

const shapes: Shape[] = [
  new Circle(5, 'red'), 
  new Rectangle(4, 6, 'blue')
]

shapes.forEach(shape => {
  console.log(\`Area: \${shape.getArea()}\`)
})`
)

if (example4) example4.innerHTML = polymorphismClassExample.renderCodeSnippet()



// Encapsulation classes card function

const encapsulationClassExample = new ExampleCodeSnippet(
  'Encapsulation Class Example',

  `Encapsulation bundles data and the methods that operate on that data within a single unit, hiding internal details and providing an interface for interacting with the object. This is achieved in TypeScript through access modifiers (private, protected, public) and getter/setter methods, ensuring data integrity and providing controlled access to object internals.`,
  
  `
class BankAccount {
  private balance: number = 0  // Private field

  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount
      console.log(\`Deposited \${amount}. New balance: \${this.balance}\`)
    }
  }

  getBalance(): number {
    return this.balance
  }
}

const account = new BankAccount()
account.deposit(100)    // "Deposited 100. New balance: 100"
console.log(account.getBalance())  // 100
// account.balance  // Error: 'balance' is private`
)

if (example5) example5.innerHTML = encapsulationClassExample.renderCodeSnippet()



// ----------------------------------------------------------------------------------- //



// Abstraction Example 

abstract class Shape {
  protected color: string = ''

  abstract getArea(): number

  abstract getPerimeter(): number

  getColor(): string {
    return this.color
  }
}



// Inheritance Example

class Circle extends Shape {
  private radius: number // private means this property is only accessible within this class

  constructor(radius: number, color: string) {
    super() // Call the constructor of the parent class
    this.radius = radius
    this.color = color
  }

  getArea(): number {
    return Math.PI * Math.pow(this.radius, 2)
  }

  getPerimeter(): number {
    return 2 * Math.PI * this.radius
  }
}



// Polymorphism Example

class Rectangle extends Shape {
  private width: number
  private height: number

  constructor(width: number, height: number, color: string) {
    super()
    this.width = width
    this.height = height
    this.color = color
  }

  getArea(): number {
    return this.width * this.height
  }

  getPerimeter(): number {
    return 2 * (this.width + this.height)
  }
}

const shapes: Shape[] = [new Circle(5, 'red'), new Rectangle(10, 20, 'blue')]

shapes.forEach((shape) => {
  console.log(`Area: ${shape.getArea()}`)
  console.log(`Perimeter: ${shape.getPerimeter()}`)
  console.log(`Color: ${shape.getColor()}`)
})



// Encapsulation Example

class Person {
  private name: string
  private age: number
  occupation: string

  constructor(name: string, age: number, occupation: string) {
    this.name = name
    this.age = age
    this.occupation = occupation
  }

  getName(): string {
    return this.name
  }

  setName(name: string): void {
    this.name = name
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.  I'm a ${this.occupation}.`
    )
  }
}

const alice = new Person('Alice', 30, 'Engineer')
alice.greet()
alice.setName('Alice Smith')
alice.greet()
const bob = new Person('Bob', 25, 'Designer')
bob.greet()