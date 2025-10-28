/**
 * ! Patrón Flyweight
 * Es un patrón de diseño estructural que nos permite usar objetos compartidos
 * para soportar eficientemente grandes cantidades de objetos.
 *
 * * Es útil cuando necesitamos una gran cantidad de objetos y queremos reducir
 * * la cantidad de memoria que utilizan.
 *
 * https://refactoring.guru/es/design-patterns/flyweight
 */

// @ts-ignore
import {COLORS} from '../helpers/colors.ts';

interface LocationInterface {
    display(coordinates: {x:number,y:number}):void;
}

class LocationIcon implements LocationInterface {
    private readonly type: string;
    private readonly iconImage: string;
    constructor(type: string, iconImage: string) {
        this.type = type;
        this.iconImage = iconImage;
    }

    display(coordinates: { x: number; y: number }): void {
        console.log(
            `Coords: x: ${coordinates.x}, y: ${coordinates.y} Icon: ${this.iconImage}`
        )
    }

}

//Fabrica de flyweights
class LocationFactory{
    private icon: Record<string, LocationIcon> = {}

    createIcon(type: string): LocationIcon {
        if (!this.icon[type]) {
            console.log(`%cCreando icono: ${type}`,COLORS.red)
            const iconImage = `icon-${type.toLowerCase()}.png`
            this.icon[type] = new LocationIcon(type, iconImage)
        }
        return this.icon[type]
    }
}

class MapLocation{
    private readonly coordinates: {x:number,y:number}
    private icon: LocationIcon
    constructor(coordinates: {x:number,y:number}, icon: LocationIcon){
        this.coordinates = coordinates
        this.icon = icon
    }
    display(): void {
        this.icon.display(this.coordinates)
    }
}

const main = () => {
    const factory = new LocationFactory();
    const Locations = [
        new MapLocation({x: 10,y:20},factory.createIcon('Hospital')),
        new MapLocation({x: 18,y:20},factory.createIcon('Hospital')),
        new MapLocation({x: 16,y:20},factory.createIcon('Hospital')),
        new MapLocation({x: 17,y:20},factory.createIcon('Hospital')),
        new MapLocation({x: 15,y:25},factory.createIcon('School')),
        new MapLocation({x: 20,y:30},factory.createIcon('Bank')),
    ]
    Locations.forEach(location => location.display())
}

main();