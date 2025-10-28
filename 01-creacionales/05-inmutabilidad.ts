/**
 * ! Inmutabilidad con copia
 * Aunque la inmutabilidad es una buena práctica, no siempre es posible.
 * En estos casos, se puede hacer una copia del objeto y modificar la copia.
 *
 *  * Es útil para mantener un historial de estados en aplicaciones interactivas.
 *
 */
// @ts-ignore
import { COLORS } from '../helpers/colors.ts';

class CodeEditorState {
    readonly content: string;
    readonly cursorPosition: number;
    readonly unsaveChange: boolean;

    constructor(content: string,cusrsorPosition: number, unsaveChange: boolean ) {
        this.content = content;
        this.cursorPosition = cusrsorPosition;
        this.unsaveChange = unsaveChange;
    }
    copiWith({
        cursorPosition,
        content,
        unsaveChange
    }: Partial<CodeEditorState>): CodeEditorState {
        return new CodeEditorState(content ?? this.content, cursorPosition ?? this.cursorPosition, unsaveChange ?? this.unsaveChange);
    }
    displayState() {
        console.log("CodeEfitor State");
        console.log(
            `Contenido: ${this.content}
                Cursor Pos: ${this.cursorPosition}
                Unsaved Changes: ${this.unsaveChange}`
        );
    }
}


class codeEditorHistory {
    private history: CodeEditorState[] = [];
    private currentIndex: number = -1;

    saveChanges(state: CodeEditorState) {
        if (this.currentIndex < this.history.length) {
            this.history = this.history.splice(0, this.currentIndex + 1);
        }
        this.history.push(state);
        this.currentIndex++;
    }

    undo(): CodeEditorState | null {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            return this.history[this.currentIndex];
        }
        return null;
    }

    redo(): CodeEditorState | null {
        if (this.currentIndex < this.history.length - 1) {
            this.currentIndex++;
            return this.history[this.currentIndex];
        }
        return null;
    }
}


const main = () => {
    const history = new codeEditorHistory();
    let editorState = new CodeEditorState("console.log('Hola mundo')",2,false)

    history.saveChanges(editorState)

    console.log('%cEstado Inicial',COLORS.blue);

    editorState.displayState()
    editorState = editorState.copiWith({
        cursorPosition:3,unsaveChange: true,
        content: "console.log()"
    })
    history.saveChanges(editorState)

    console.log('%cEstado Cambiado',COLORS.blue);

    editorState.displayState()

    editorState = editorState.copiWith({
        cursorPosition: 5
    })
    history.saveChanges(editorState);

    console.log('%cEstado Cambiado',COLORS.blue);

    editorState.displayState()

    console.log('%cEstado rehecho',COLORS.red);
    editorState = history.undo();
    editorState.displayState()
}

main()