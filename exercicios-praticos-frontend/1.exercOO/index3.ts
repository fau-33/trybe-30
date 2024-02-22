class SuperClass {
    isSuper: boolean;

    constructor() {
        this.isSuper = true;
    }

    public sayHello(): void {
        console.log("Olá Mundo!");
    }
}

// Crie uma classe chamada _Subclass_ que herda da _Superclass_.
class Subclass extends SuperClass {
    constructor() {
        super();
        this.isSuper = false;
    }
}

// Crie uma função `myFunc` fora do escopo da _Subclass_ que recebe um objeto da _Superclass_.
const myFunc = (object: SuperClass) => {
    object.sayHello();
    console.log(object.isSuper ? 'Super!' : 'Sub!');
}

// Crie um objeto da _Superclass_ e outro da _Subclass_.
const sup = new SuperClass();
const sub = new Subclass();

// Chame a função `myFunc` 2 vezes, passando os objetos criados.
myFunc(sup);
myFunc(sub);