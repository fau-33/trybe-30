// Crie union types que representem: a. Os estados físicos da matéria: líquido, sólido ou gasoso.

type StateOfMatter = "liquid" | "solid" | "gaseous";

// O documento identificador de uma pessoa que pode receber valores numéricos ou texto. Ex.: “123.567.890-12” ou 123456789012.

type indentifyingDocument = string | number;

//  Sistemas operacionais: Linux, MacOS ou Windows.

type SO = "Windows" | "Linux" | "MacOS";

// Crie type aliases para: a. Representar pessoa(s) em uma reserva de restaurante.

type reservartionNames = string[] | string;

//  Um objeto que represente um endereço.

type Address = {
    publicPlace: string;
    number: number;
    district: string;
    city: string;
    state: string;
};