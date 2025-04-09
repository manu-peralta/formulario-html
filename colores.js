class Colores {
    constructor() {
        this.lista = [
            { nombre: "Negro", valor: "#000000" },
            { nombre: "Rojo", valor: "#FF0000" },
            { nombre: "Verde", valor: "#00FF00" },
            { nombre: "Azul", valor: "#0000FF" },
            { nombre: "Amarillo", valor: "#FFFF00" },
            { nombre: "Naranja", valor: "#FFA500" },
            { nombre: "Rosa", valor: "#FFC0CB" },
            { nombre: "Marron", valor: "#A52A2A" },
        ];
    }

    getColores() {
        return this.lista;
    }
}
