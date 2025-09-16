/**
 * ! Singleton:
 * Es un patrón de diseño creacional que garantiza que una clase
 * tenga una única instancia y proporciona un punto de acceso global a ella.
 *
 * * Es útil cuando necesitas controlar el acceso a una única instancia
 * * de una clase, como por ejemplo, en un objeto de base de datos o en un
 * * objeto de configuración.
 *
 * https://refactoring.guru/es/design-patterns/singleton
 */
import {COLORS} from "../helpers/colors.ts";

class DragonBalls {
    private static instance: DragonBalls;
    private ballsCollected: number;

    private constructor() {
        this.ballsCollected = 0;
    }

    public static getInstance(): DragonBalls {
        if (!DragonBalls.instance){
            DragonBalls.instance = new DragonBalls();
            console.log(`%cEsferas del dragon`,COLORS.green)
        }
        return DragonBalls.instance;
    }

    collectedBall():void {
        if(this.ballsCollected < 7) {
            this.ballsCollected++;
            console.log(`Pelota Recolectada, Total de esferas: ${this.ballsCollected}`)
            return;
        }
        console.log(`Ya se puede invocar a Shen long`)
    }

    summonShenLong():void {
        if (this.ballsCollected === 7){
            console.log('Shen long ha sido invocado, Pide tu deseo')
            this.ballsCollected = 0;
            return;
        }
        console.log(`Aun Faltan ${7 - this.ballsCollected} para invocar a shen Long`)
    }
}


const main = () => {
    const gokuDragonBall = DragonBalls.getInstance();
    gokuDragonBall.collectedBall();
    gokuDragonBall.collectedBall();
    gokuDragonBall.collectedBall();
    gokuDragonBall.collectedBall();
    gokuDragonBall.summonShenLong();

    const vegettaDragonBall = DragonBalls.getInstance();
    vegettaDragonBall.collectedBall();
    vegettaDragonBall.collectedBall();
    vegettaDragonBall.collectedBall();

    gokuDragonBall.summonShenLong();

    vegettaDragonBall.summonShenLong();
}

main()