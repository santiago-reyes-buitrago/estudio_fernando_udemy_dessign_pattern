/**
 * ! Patrón Adapter
 *  Permite que objetos con interfaces incompatibles trabajen juntos, también es muy
 *  util para utilizar librerías de terceros en nuestra aplicación sin depender
 *  directamente de ellas.
 *
 * * Es útil cuando se quiere reutilizar una clase que no tiene la interfaz que
 * * necesitamos o cuando queremos crear una capa de abstracción para una librería
 * * de terceros.
 *
 * https://refactoring.guru/es/design-patterns/adapter
 */
// @ts-ignore
import {localLogger} from "./adapter-files/local-logger.ts";
// @ts-ignore
import {DenoLoggerAdapter} from "./adapter-files/logger-adapter.ts";


const logger = new DenoLoggerAdapter('01-adapter.ts');

logger.writeLog('Log normal')
logger.writeWarning('Te advieto')
logger.writeError('falla critica')