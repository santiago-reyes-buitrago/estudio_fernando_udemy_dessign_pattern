import {COLORS} from '../helpers/colors.ts';

/**
 * ! Patrón decorador
 * Es un patrón de diseño estructural que permite añadir
 * funcionalidades a objetos, colocando estos objetos dentro de
 * objetos encapsuladores especiales que contienen estas funcionalidades.
 *
 * No confundirlo con los decoradores de TypeScript que son anotaciones.
 *
 * * Es útil cuando necesitas añadir funcionalidades a objetos
 *  * de manera dinámica y flexible.
 *
 * https://refactoring.guru/es/design-patterns/decorator
 */
interface NotificationInterface {
    send(msg:string):void
}

class BasicNotification implements NotificationInterface{
    send(msg: string): void {
        console.log(`%cEnviando notificación basica: ${msg}`,COLORS.red);
    }
}

abstract class NotificationDecorator implements NotificationInterface {
    protected notification: NotificationInterface

    constructor(notification: NotificationInterface) {
        this.notification = notification;
    }

    send(msg: string): void {
        this.notification.send(msg);
    }
}

class EmailDecorator extends NotificationDecorator{
    private sendMail(msg: string): void {
        console.log(`Enviando por correo electronico: ${msg}`);
    }
    override send(msg: string) {
        super.send(msg);
        this.sendMail(msg)
    }
}

class SMSDecorator extends NotificationDecorator{
    private sendMail(msg: string): void {
        console.log(`Enviando sms: ${msg}`);
    }
    override send(msg: string) {
        super.send(msg);
        this.sendMail(msg)
    }
}

const main = () => {
    let notification = new BasicNotification();
    notification = new EmailDecorator(notification);
    notification = new SMSDecorator(notification);
    notification.send("Hola mundo");
}

main();