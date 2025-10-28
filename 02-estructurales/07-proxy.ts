/**
 * ! Patrón Proxy
 * Este patrón se utiliza para controlar el acceso a un objeto, es decir,
 * se crea un objeto que actúa como intermediario entre el cliente y el objeto real.
 *
 * * Es útil cuando necesitamos controlar el acceso a un objeto,
 * * por ejemplo, para verificar si el cliente tiene permiso
 * * para acceder a ciertos métodos o propiedades.
 *
 * https://refactoring.guru/es/design-patterns/proxy
 *
 */

// @ts-ignore
import { COLORS } from '../helpers/colors.ts';

class Player{
    name:string;
    level:number;

    constructor(name:string, level:number) {
        this.name = name;
        this.level = level;
    }
}


interface Room {
    enter(player:Player):void;
}

class SecretRoom implements Room{

    enter(player: Player): void {
        console.log(`%cBienvenido a la sala secreta, ${player.name}`,COLORS.blue);
    }

}

// Proxy
class MagicPortal implements Room{
    private secretRoom: SecretRoom;
    constructor(secretRoom:SecretRoom) {
        this.secretRoom = secretRoom;
    }
    enter(player: Player): void {
        if (player.level >=10){
            this.secretRoom.enter(player);
            return;
        }
        console.log(`%cNecesitas mas nivel para poder pasar a esta habitacion, nivel minimo: 10`,COLORS.red)
    }

}

const main = () => {
    const portal = new MagicPortal(new SecretRoom());
    const player1 = new Player('Santiago',20);
    const player2 = new Player('Sebastian',9);
    portal.enter(player1);
    portal.enter(player2);
}

main();