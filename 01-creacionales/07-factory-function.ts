/**
 * ! Factory Function
 * Es un patrón de diseño que nos permite crear objetos o funciones de manera dinámica que serán
 * usados posteriormente en el código.
 *
 * * Es útil cuando necesitamos crear objetos o funciones de manera dinámica,
 * * es decir, en tiempo de ejecución y no en tiempo de compilación.
 *
 */
// @ts-ignore
import { COLORS } from '../helpers/colors.ts';

type language = 'es'|'en'|'fr';

function createGreeter(lang: language){
    return function (name: string){
        const msg = {
            es: `Hola %c${name}`,
            en: `Hello %c${name}`,
            fr: `Bonjour %c${name}`,
        }

        return console.log(msg[lang],COLORS.blue)
    }
}

const main = () => {
    const spanishGreeter = createGreeter('es');
    spanishGreeter('Santiago')
    const englishGreeter = createGreeter('en');
    englishGreeter('Sebastian')
    const frecnhGreeter = createGreeter('fr');
    frecnhGreeter('Alice')
}

main()