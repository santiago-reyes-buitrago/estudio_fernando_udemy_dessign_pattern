/**
 * ! Patrón Facade
 * Este patrón proporciona una interfaz unificada para un conjunto de interfaces
 * en un subsistema.
 *
 * Facade define una interfaz de nivel más alto que hace que el subsistema
 * sea más fácil de usar.
 *
 * * Es útil cuando un subsistema es complejo o difícil de entender para
 * * proporcionar una interfaz simplificada para el cliente.
 *
 * https://refactoring.guru/es/design-patterns/facade
 */

class Projector {
    turnOn() {
        console.log('Proyector encendido');
    }

    turnOff() {
        console.log('Proyector apagado');
    }

}

class SoundSystem {
    on() {
        console.log('Sistema de sonido encendido')
    }

    off() {
        console.log('Sistema de sonido apagado')
    }
}

class VideoPlayer {
    on() {
        console.log('video player encendido')
    }

    off() {
        console.log('video player apagado')
    }

    stop() {
        console.log('Pelicula detenida')
    }

    play(movie: string) {
        console.log(`Pelicula resproducida ${movie}`)
    }
}

class PopCornMaker {
    poppingPopCorn() {
        console.log('Haciendo palomitas')
    }

    turnOffPoppingPopCorn() {
        console.log('Deteniendo las palomitas')
    }
}

interface HomeTheatherFacadeInterface {
    projector: Projector;
    soundSystem: SoundSystem;
    videoPlayer: VideoPlayer;
    popCornMaker: PopCornMaker;
}

class HomeTheaterFacade {
    private projector: Projector;
    private soundSystem: SoundSystem;
    private videoPlayer: VideoPlayer;
    private popCornMaker: PopCornMaker;

    constructor({projector, soundSystem, videoPlayer, popCornMaker}: HomeTheatherFacadeInterface) {
        this.projector = projector;
        this.soundSystem = soundSystem;
        this.videoPlayer = videoPlayer;
        this.popCornMaker = popCornMaker;
    }

    watchMovie(movie:string):void {
        console.log('Preparando para ver la pelicula');
        this.projector.turnOn();
        this.soundSystem.on();
        this.popCornMaker.poppingPopCorn();
        this.videoPlayer.on();
        this.videoPlayer.play(movie);
        console.log('Disfrute la pelicula')
    }

    endMovie():void {
        console.log('Terminando la pelicula');
        this.projector.turnOff();
        this.soundSystem.off();
        this.popCornMaker.turnOffPoppingPopCorn();
        this.videoPlayer.off();
        this.videoPlayer.stop();
        console.log('Sistema apagado')
    }

}

const main = () =>{
    const homeTheaterFacade = new HomeTheaterFacade({
        projector: new Projector(),
        soundSystem: new SoundSystem(),
        videoPlayer: new VideoPlayer(),
        popCornMaker: new PopCornMaker()
    })
    homeTheaterFacade.watchMovie('El rey leon');
    homeTheaterFacade.endMovie();
}

main();