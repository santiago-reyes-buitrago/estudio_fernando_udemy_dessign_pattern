/**
 * ! Patron Chain of Responsibility
 * Es un patrón de diseño de comportamiento que te permite pasar solicitudes
 * a lo largo de una cadena de manejadores.
 *
 * * Es útil cuando se necesita procesar datos de diferentes maneras, pero no
 * * se sabe de antemano qué tipo de procesamiento se necesita o en qué orden
 * * pero se sabe que se necesita procesar en una secuencia.
 *
 * https://refactoring.guru/es/design-patterns/chain-of-responsibility
 */

interface Handler {
    handle(request: string): void;
    setNext(handler: Handler ):Handler;
}

abstract class BaseHandler implements Handler {
    private nextHandler: Handler | null = null;

    public setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    public handle(request: string): void {
        if (this.nextHandler) {
            this.nextHandler.handle(request);
        }
    }
}

class BasicSupport extends BaseHandler {
    override handle(request: string) {
        if (request === 'basico'){
            console.log('Soporte Basico')
            return;
        }
        super.handle(request);
    }
}

class AdvancedSupport extends BaseHandler {
    override handle(request: string) {
        if (request === 'avanzado'){
            console.log('Soporte Avanzado')
            return;
        }
        super.handle(request);
    }
}

class UrgentSupport extends BaseHandler {
    override handle(request: string) {
        if (request === 'urgente'){
            console.log('Soporte Urgente')
            return;
        }
        console.log('No se pudo solucionar el problema...')
    }
}

const main = () => {
    const basicSupport = new BasicSupport();
    const advancedSupport = new AdvancedSupport();
    const urgentSupport = new UrgentSupport();
    basicSupport.setNext(advancedSupport).setNext(urgentSupport);
    basicSupport.handle('basico');
    basicSupport.handle('avanzado');
    basicSupport.handle('urgente');
    basicSupport.handle('otro');

}

main();