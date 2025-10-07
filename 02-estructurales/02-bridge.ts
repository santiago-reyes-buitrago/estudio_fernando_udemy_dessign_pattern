/**
 * ! Patrón Bridge
 * Este patrón nos permite desacoplar una abstracción de su implementación,
 * de tal forma que ambas puedan variar independientemente.
 *
 * * Es útil cuando se tienen múltiples implementaciones de una abstracción
 * * Se puede utilizar para separar la lógica de negocio de la lógica de presentación
 * * Se puede utilizar para separar la lógica de la interfaz de usuario también.
 *
 * https://refactoring.guru/es/design-patterns/bridge
 */

interface Ability {
    use(): void;
}

class SwordAttack implements Ability {
    use(): void {
       console.log('Ataca con espada')
    }
}

class AxeAttack implements Ability {
    use(): void {
        console.log('Ataca con hacha')
    }
}

class MagicSpellAttack implements Ability {
    use(): void {
        console.log('Ataca con hechizo magico')
    }
}

class FireballSpellAttack implements Ability {
    use(): void {
        console.log('Ataca con hechizo de bola de fuego')
    }
}

abstract class Character {
    protected abilities: Ability;
    constructor(ability: Ability) {
        this.abilities = ability
    }

    setAbilities(ability: Ability) {
        this.abilities = ability
    }

    abstract performAbilities():void;
}

class Warrior extends Character {
    override performAbilities(): void {
        console.log('El guerrero esta listo para luchar');
        this.abilities.use();
    }
}

class Mage extends Character {
    override performAbilities(): void {
        this.abilities.use();
    }
}

function main(){
    const warrior = new Warrior(new SwordAttack())
    warrior.performAbilities()
    warrior.setAbilities(new AxeAttack())
    warrior.performAbilities()
    const wizard = new Mage(new MagicSpellAttack())
    wizard.performAbilities()
    wizard.setAbilities(new FireballSpellAttack())
    wizard.performAbilities()
}

main();