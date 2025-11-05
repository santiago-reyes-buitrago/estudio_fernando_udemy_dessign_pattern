/**
 * ! Patrón Command
 * Este patrón encapsula una solicitud como un objeto,
 * lo que le permite parametrizar otros objetos con diferentes solicitudes,
 * encolar solicitudes, o registrar solicitudes, y soporta operaciones que pueden deshacerse.
 *
 * Me gustó mucho la explicación de Refactoring Guru
 * https://refactoring.guru/es/design-patterns/command
 *
 * * Es útil cuando se necesita desacoplar el objeto que invoca
 * * la operación del objeto que sabe cómo realizarla.
 *
 *
 */
// @ts-ignore
import {COLORS} from "../helpers/colors.ts";

interface Command {
    execute(): void;
}

class Light {
    turnOn(){
        console.log('%cEncendiendo la luz',COLORS.yellow);
    }
    turnOff(){
        console.log('Apagando la luz');
    }
}

class Fan {
    On(){
        console.log('%cEncendiendo el ventilador',COLORS.yellow);
    }
    Off(){
        console.log('Apagando el ventilador');
    }
}

class LightOnCommand implements Command {
    constructor(private light: Light) {}
    execute(): void {
        this.light.turnOn()
    }
}

class LightOffCommand implements Command {
    constructor(private light: Light) {}
    execute(): void {
        this.light.turnOff()
    }
}

class FanOnCommand implements Command {
    constructor(private fan: Fan) {}
    execute(): void {
        this.fan.On()
    }
}

class FanOffCommand implements Command {
    constructor(private fan: Fan) {}
    execute(): void {
        this.fan.Off()
    }
}

class RemoteControl {
    private commands: Record<string, Command> = {};

    setCommand(commandName: string, command: Command) {
        this.commands[commandName] = command;
    }

    executeCommand(commandName: string) {
        if (!this.commands[commandName]) return;
        this.commands[commandName].execute();
    }
}

const main = () => {
    const light = new Light();
    const fan = new Fan();
    const lightOnCommand = new LightOnCommand(light);
    const lightOffCommand = new LightOffCommand(light);
    const fanOnCommand = new FanOnCommand(fan);
    const fanOffCommand = new FanOffCommand(fan);
    const remoteControl = new RemoteControl();
    remoteControl.setCommand('lightOn', lightOnCommand);
    remoteControl.setCommand('lightOff', lightOffCommand);
    remoteControl.setCommand('fanOn', fanOnCommand);
    remoteControl.setCommand('fanOff', fanOffCommand);
    remoteControl.executeCommand('lightOn');
    remoteControl.executeCommand('lightOff');
    remoteControl.executeCommand('fanOn');
    remoteControl.executeCommand('fanOff');
}

main();