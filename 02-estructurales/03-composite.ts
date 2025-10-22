/**
 * ! Patrón Composite
 * Es un patrón de diseño estructural que permite componer objetos
 * en estructuras de árbol para representar jerarquías.
 *
 * El patrón permite a los clientes tratar de manera uniforme a los objetos
 * individuales y a sus composiciones.
 *
 * * Es útil cuando necesitas tratar a los objetos individuales
 * * y a sus composiciones de manera uniforme, y la estructura
 * * de los objetos forma una jerarquía en árbol.
 *
 * https://refactoring.guru/es/design-patterns/composite
 *
 */

interface FyleSytemComponent {
    showDetails(index?: string): void
}

class FileClass implements FyleSytemComponent {

    private readonly name: string;
    constructor(name: string) {
        this.name = name;
    }
    showDetails(index?: string): void {
        console.log(`${index} - Archivo: ${this.name}`);
    }
}

class Directory implements FyleSytemComponent {
    private readonly name: string;
    private readonly children: FyleSytemComponent[] = [];
    constructor(name: string) {
        this.name = name;
    }
    showDetails(index: string = ''): void {
        console.log(`${index} + Directorio: ${this.name}`);
        this.children.forEach((child) => {
            child.showDetails(index + ' ');
        });
    }
    add(child:FyleSytemComponent){
        this.children.push(child);
    }
}

const main = () => {
    const file1 = new FileClass('file1.txt');
    const file2 = new FileClass('file2.txt');
    const file3 = new FileClass('file3.txt');
    const directory1 = new Directory('directory1');
    directory1.add(file1)
    directory1.add(file2)
    // directory1.showDetails();
    const directory2 = new Directory('directory2');
    directory2.add(file3);
    directory2.add(directory1)
    // directory2.showDetails();
    const directory3 = new Directory('Root');
    directory3.add(directory2);
    directory3.add(directory1)
    directory3.showDetails();

}

main();