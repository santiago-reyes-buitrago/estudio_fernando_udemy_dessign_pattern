import { Logger } from 'jsr:@deno-library/logger';

// TODO: Implementar el LoggerAdapter

interface IloggerAdapter {
    file: string;
    writeLog(msg: string): void;
    writeWarning(msg: string): void;
    writeError(msg: string): void;
}

export class DenoLoggerAdapter implements IloggerAdapter {
    file: string;
    private logger = new Logger();

    constructor(file:string) {
        this.file = file;
    }

    writeError(msg: string): void {
        this.logger.error(`[${this.file} error] ${msg}`);
    }

    writeLog(msg: string): void {
        this.logger.info(`[${this.file} Log] ${msg}`)
    }

    writeWarning(msg: string): void {
        this.logger.warn(`[${this.file} warning] ${msg}`)
    }
}

// loggerAdapter.info('info');