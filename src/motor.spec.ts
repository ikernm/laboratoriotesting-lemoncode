import { dameMensajeCuandoMePlanto } from "./ui";
import { puntos } from "./modelo";

describe("gameOver", () => {
    it("Deberíamos de saber si ha ganado el juego", () => {
        // Arrange
        let puntosJugador: number = 7.5;
        const resultadoEsperado = dameMensajeCuandoMePlanto(puntosJugador);

        // Act
        const resultado = dameMensajeCuandoMePlanto(puntosJugador);
        

        // Assert
        expect(resultado).toBe(resultadoEsperado);

    });
});