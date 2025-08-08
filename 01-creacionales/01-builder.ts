/**
 * ! Patrón Builder:
 * Es un patrón de diseño creacional que nos permite construir objetos complejos
 * paso a paso.
 *
 * El patrón nos permite producir distintos tipos y representaciones
 * de un objeto empleando el mismo código de construcción.
 *
 * * Es útil cuando necesitamos construir un objeto complejo con muchas partes
 * * y queremos que el proceso de construcción sea independiente de las partes
 * * que lo componen.
 *
 * https://refactoring.guru/es/design-patterns/builder
 */

import { COLORS } from "../helpers/colors";

class Computer {
    public cpu:string = '';
    public ram:string = '';
    public storage:string = '';
    public gpu?:string;


    displayconfig(){
        console.log(`
            Configuracion de la computadora
            CPU: ${this.cpu},
            RAM: ${this.ram},
            STORAGE: ${this.storage},
            GPU: ${this.gpu},
            `)
    }
}



class ComputerBuilder {
    private computer:Computer;

    constructor(){
        this.computer = new Computer()
    }

    setCPU(cpu:string):ComputerBuilder{
        this.computer.cpu = cpu;
        return this;
    }

    setRAM(ram:string):ComputerBuilder{
        this.computer.ram = ram;
        return this;
    }

    setStorage(storage:string):ComputerBuilder{
        this.computer.storage = storage;
        return this;
    }

    setGPU(gpu:string):ComputerBuilder{
        this.computer.gpu = gpu;
        return this;
    }

    build(){
        return this.computer;
    }
}


const main = () => {
    const basicComputer = new ComputerBuilder()
    .setCPU('intel core 2 Duo')
    .setGPU('4 GB')
    .setRAM('4 GB')
    .setStorage('4 GB')
    .build()

    console.log(`%cComputadora basica`,COLORS.blue)
    basicComputer.displayconfig()

    const GamerComputer = new ComputerBuilder()
    .setCPU('intel core 2 Duo')
    .setGPU('4 GB')
    .setRAM('4 GB')
    .setStorage('41212 GB')
    .build()

    console.log(`%cComputadora basica`,COLORS.blue)
    GamerComputer.displayconfig()
}

main();