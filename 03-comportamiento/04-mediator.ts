/**
 * ! Patrón mediator
 * Es un patrón de diseño de comportamiento que ayuda a reducir
 * las dependencias desordenadas entre objetos.
 * Este patrón limita la comunicación directa entre ellos,
 * haciendo que solo interactúen a través de un objeto mediador.
 *
 * * Es útil reducir la complejidad de las relaciones entre objetos
 *
 * https://refactoring.guru/es/design-patterns/mediator
 */
// @ts-ignore
import {COLORS} from "../helpers/colors.ts";

class Chatroom {
    private users:User[] = []
    public title:string;

    constructor(title:string) {
        this.title = title;
    }
    addUser(user:User) {
        this.users.push(user);
    }

    sendMessage(message:string,sender:User) {
        for (const user of this.users.filter(user => user !== sender)) {
            user.receiveMessage(message,sender)
        }
    }
}

class User {
    private readonly username:string;
    private chatroom:Chatroom;
    constructor(username:string,chatroom:Chatroom) {
        this.username = username;
        this.chatroom = chatroom;
        chatroom.addUser(this);
    }
    sendMessage(message:string) {
        console.log(`%c${this.username} envia %c${message}`,COLORS.yellow,COLORS.green);
        this.chatroom.sendMessage(message,this)
    }

    receiveMessage(message:string,sender:User) {
        console.log(`%c${this.username} recibe de ${sender.username}:  %c${message}`,COLORS.blue,COLORS.white);
    }
}


const main = () => {
    const chatroom =  new Chatroom('Grupo de estudio');
    const user1 = new User('Santiago Reyes',chatroom)
    const user2 = new User('Sebastian Reyes',chatroom)
    const user3 = new User('Daniel Mendoza',chatroom)
    new User('Pepito perez',chatroom);
    new User('Carlos Toba que',chatroom);
    user1.sendMessage('Hola a todos')
    user2.sendMessage('Hola Santiago')
    user3.sendMessage('Hola Santiago')

}


main();