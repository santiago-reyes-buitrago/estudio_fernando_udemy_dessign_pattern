/**
 * ! Patrón Iterator
 * Este patrón permite recorrer los elementos de una colección sin exponer
 * la estructura interna de la colección.
 *
 * * Es útil cuando se necesita recorrer una colección de elementos sin importar
 * * cómo se almacenan los elementos.
 *
 * https://refactoring.guru/es/design-patterns/iterator
 */

interface Iterator<T> {
    next(): T|null;
    hasNext(): boolean;
    current() : T|null;
}

class Pokemon {
    public name: string;
    public type: string;

    constructor(name: string, type: string) {
        this.name = name;
        this.type = type;
    }
}

class PokemonCollection {
    private collection: Pokemon[] = [];

    add(pokemon: Pokemon){
        this.collection.push(pokemon);
    }

    getAt(index: number): Pokemon|null {
        if (index >=0 && index < this.collection.length){
            return this.collection[index];
        }
        return null;
    }

    getLength(): number {
        return this.collection.length;
    }

    createIterator(): PokemonIterator{
        return new PokemonIterator(this);
    }
}


class PokemonIterator implements Iterator<Pokemon>{
    private collection: PokemonCollection;
    private index: number = 0;

    constructor(collection: PokemonCollection) {
        this.collection = collection;
    }

    current(): Pokemon | null {
        return this.collection.getAt(this.index);
    }

    hasNext(): boolean {
        return this.index < this.collection.getLength();
    }

    next(): Pokemon | null {
        if (this.hasNext()){
            return this.collection.getAt(this.index++);
        }
        return null;
    }
}


const main = () => {
    const pokedex = new PokemonCollection();
    pokedex.add({name: 'Pikachu', type: 'Electrico'})
    pokedex.add({name: 'Charmander', type: 'Fuego'})
    pokedex.add({name: 'Squirtle', type: 'Agua'})
    pokedex.add({name: 'Bulbasaur', type: 'Planta'})
    const iterator = pokedex.createIterator();
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.current());
    console.log(iterator.next());
    console.log(iterator.hasNext());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.hasNext());
    console.log(iterator.next());

}

main()