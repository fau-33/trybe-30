// 1 - Crie uma classe abstrata Character que tenha os métodos abstratos talk(): void e specialMove(): void.

abstract class Character {
    abstract talk(): void;
    abstract specialMove(): void;
}

// 2 - Crie a classe concreta MeleeCharacter que estenda Character e sobrescreva os métodos abstratos dessa classe.

class MeleeCharacter extends Character {
    constructor(private _name: string, private _specialMoveName: string) {
      super();
    }
  
    talk(): void {
      /* Entra aqui uma implementação exclusiva para os personagens de curto alcance */
      console.log(`Hi, I'm ${this._name}. I attack at close range.`);
    }
  
    specialMove(): void {
      /* Entra aqui uma implementação exclusiva para os personagens de curto alcance */
      console.log(`${this._name} used ${this._specialMoveName}!`);
    }
  }

// 3 - Crie a classe concreta LongRangeCharacter que estenda Character e sobrescreva os métodos abstratos dessa classe.

class LongRangeCharacter extends Character {
    constructor(private _name: string, private _specialMoveName: string) {
        super();
    }

    talk(): void {
        console.log(`Hi, I'm ${this._name}. I can attack from a long range.`);
    }

    specialMove(): void {
        console.log(`${this._name} used ${this._specialMoveName}!`);
    }
}

// 4 - Agora instancie as classes filhas com os personagens Yoshi e Samus, com seus respectivos specialMoveName e chame os métodos talk e specialMove para apresentar o personagem e seus respectivos ataques especiais.

const yoshi = new MeleeCharacter('Yoshi', 'Super dragon');
const samus = new LongRangeCharacter('Samus', 'Zero Laser');

yoshi.talk();
yoshi.specialMove();
samus.talk();
samus.specialMove();

// 1 - Continuando com o exercício anterior do jogo de luta Super Smash Bros, vamos aplicar uma refatoração com base no conteúdo acima. Crie um método estático que receba como parâmetro character: Character e, dentro dele, chame os métodos talk e specialMove para apresentar o personagem.

abstract class Character2 {
    abstract talk(): void;
    abstract specialMove(): void;
  
    static characterPresentation(character: Character): void {
      character.talk();
      character.specialMove();
    }
  }

// 2 - Agora, ao invés de acionarmos os métodos talk e specialMove individualmente a partir das instâncias, acione-os por meio do método estático criado no exercício anterior.

const yoshi1 = new MeleeCharacter('Yoshi', 'Super dragon');
const samus2 = new LongRangeCharacter('Samus', 'Zero Laser');

// yoshi.talk();
// yoshi.specialMove();
// samus.talk();
// samus.specialMove();
Character2.characterPresentation(yoshi);
Character2.characterPresentation(samus);
  