/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday
    
2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/


//**// === GameObject === 
// -- // JS3 Code
/* 
    function GameObject(gameAttributes) {
        this.createdAt = gameAttributes.createdAt; 
        this.dimensions = gameAttributes.dimensions;
    };

    GameObject.prototype.destroy = function() {
        return `${this.name} was removed from the game`
    };
*/
// -- // ES6 Code
    // Class Declaration
    class GameObject {
        // Create CONSTRUCTOR & pass OBJECT of ATTRIBUTES through
        constructor(gameAttributes) {
            this.createdAt = gameAttributes.createdAt;
            this.dimensions = gameAttributes.dimensions;
        };

        destroy () {
            return `${this.name} was removed from the game`
        };
    }
//**// -- END

//**// === CharacterStats === 
// -- // JS3 Code
/*
    function CharacterStats(characterAttributes) {
        GameObject.call(this, characterAttributes);
        this.healthPoints = characterAttributes.healthPoints;
        this.name = characterAttributes.name;
    };

    // -- // Set up inheritance
    CharacterStats.prototype = Object.create(GameObject.prototype);

    CharacterStats.prototype.takeDamage = function() {
        return `${this.name} took damage.`;
    };
*/ 
// -- // ES6 Code
    // Class Declaration
    class CharacterStats extends GameObject {
        constructor(characterAttributes) {
            super(characterAttributes);
            this.healthPoints = characterAttributes.healthPoints;
            this.name = characterAttributes.name;
        }

        takeDamage() {
            return `${this.name} took damage.`;
        }
    }
//**// -- END

//**// === Humanoid === 
// -- // JS3 Code
/*
    function Humanoid(humanoidAttributes) {
        CharacterStats.call(this, humanoidAttributes);
    
    this.team = humanoidAttributes.team,
    this.weapons = humanoidAttributes.weapons
    this.language = humanoidAttributes.language
    }
        // -- // Set up inheritance
    Humanoid.prototype = Object.create(CharacterStats.prototype);

        Humanoid.prototype.greet = function() {
    return `${this.name} offers a greeting in ${this.language}`
};

*/
// -- // ES6 Code
    // Class Declaration 
    class Humanoid extends CharacterStats {
        constructor(humanoidAttributes) {
            super(humanoidAttributes)
            this.team = humanoidAttributes.team;
            this.weapons = humanoidAttributes.weapons;
            this.language = humanoidAttributes.language;
        }

        greet () {
            return `${this.name} offers a greeting in ${this.language}`
        }

    }

//**// -- END

//**// TESTS
const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
    length: 2,
    width: 1,
    height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
    'Staff of Shamalama',
    ],
    language: 'Common Tongue',
});

const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
    length: 2,
    width: 2,
    height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
    'Giant Sword',
    'Shield',
    ],
    language: 'Common Tongue',
});

const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
    length: 1,
    width: 2,
    height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
    'Bow',
    'Dagger',
    ],
    language: 'Elvish',
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
