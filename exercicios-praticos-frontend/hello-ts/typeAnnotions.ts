// Variáveis
/* const firstName: string = "Joel";
const age: number = 38;
const brazilian: boolean = false; */

// Funções

/* function greet(name: string) {
    console.log(`Olá, ${name.toUpperCase()}!`);
};
 */
function getFavoriteNumber(): number {
    return 26;
};

function greet(name: string): void {
    console.log(`Olá, ${name.toUpperCase()}!`);
};

// Listas e objetos

function printPersonalInfo(data: { name: string; birthYear: number }) {
    console.log(`${data.name} was born in ${data.birthYear}.`);
  }
  printPersonalInfo({ name: 'Rogerinho', birthYear: 1978 });

// Arrays

const evenNumbers: number[] = [2, 4, 6];
const vowel: string[] = ['a', 'e', 'i', 'o', 'u'];
const booleanValues: boolean[] = [true, false];

evenNumbers.push(8) // Funciona
// evenNumbers.push('8') // Erro