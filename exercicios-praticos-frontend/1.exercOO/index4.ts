interface MyInterface {
    myNumber: number;

    myFunc(myParam: number): string;
}

// Crie uma classe _MyClass_ que implementa _MyInterface_.
class MyClass implements MyInterface {
    constructor(public myNumber: number) {}

    myFunc(myParam: number): string {
        return `myNumber + myParam: ${this.myNumber + myParam}`;
    }
}

// Crie um objeto da classe _MyClass_ e o utilize acessando `myNumber` e chamando `myFunc`.
const myObject = new MyClass(2);
console.log(myObject.myNumber);
console.log(myObject.myFunc(4));