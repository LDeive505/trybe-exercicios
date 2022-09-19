abstract class Character {
    abstract talk(): void;
    abstract specialMove(): void;
} 


class MeleeeCharacter extends Character {
    talk() {
        console.log("The Melee character is talking");
    }
    specialMove() {
        console.log("The Melee character made his special move");
    }
}

class LongRangeCharacter extends Character {
    talk() {
        console.log("The Long Range character is talking");
    }
    specialMove() {
        console.log("The Long Range character made his special move");
    }
}


const smashBros = (character: Character) => {
    character.talk();
    character.specialMove();
};


smashBros(new MeleeeCharacter());
smashBros(new LongRangeCharacter());