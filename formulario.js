const inst = Vue.createApp({
    data() {
        return {
            mostrar: null,
            edad: false,
            numero: null,
            experiencia: '',  // Añadido para almacenar la experiencia
            dulce: '',
            conjunto: [],
        };
    },
    methods: {
        texto: function() {
            // Al introducir el número, verifica si no está vacío
            if (this.numero !== null && this.numero !== '') {
                this.edad = true; // Muestra la sección de experiencia
            } else {
                this.edad = false; // Oculta la sección de experiencia
            }
        },
        cambiar: function(valor) {
            this.mostrar = valor; // Cambia la visibilidad basada en el valor
        },
        agregar: function() {
            if (this.dulce.trim() !== '') {
                this.conjunto.push(this.dulce);
                this.dulce = ''; // Limpia el campo de entrada de lenguajes
            }
        },
    },
});

// Montar la aplicación en el contenedor #encuesta
const app = inst.mount('#encuesta');
