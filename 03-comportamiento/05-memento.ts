/**
 * !Patrón Memento
 * Permite capturar y externalizar un estado interno de un objeto,
 * de manera que el objeto pueda ser restaurado a ese estado más tarde.
 *
 * * Es útil cuando se necesita guardar el estado de un objeto para poder
 * * volver a él en un futuro.
 *
 * https://refactoring.guru/es/design-patterns/memento
 */

class GameMemento {
    private readonly level: number;
    private readonly health: number;
    private readonly position: string;

    constructor(level: number, health: number, position: string) {
        this.level = level;
        this.health = health;
        this.position = position;
    }

    getLevel() {
        return this.level;
    }

    getHealth() {
        return this.health;
    }

    getPosition() {
        return this.position;
    }
}

class Game {
    private readonly level: number;
    private readonly health: number;
    private readonly position: string;

    constructor(level: number, health: number, position: string) {
        this.level = level;
        this.health = health;
        this.position = position;
        console.log(`
        Jugando en el nivel: ${level}, salud: ${health}, position: ${position}
        `)
    }
    save(): GameMemento {
        return new GameMemento(this.level, this.health, this.position);
    }
}

class GameHistory  {
    private mementos: GameMemento[] = [];

    push(memento: GameMemento) {
        this.mementos.push(memento)
    }

    pop(): GameMemento | null {
        return this.mementos.pop() ?? null;
    }
}