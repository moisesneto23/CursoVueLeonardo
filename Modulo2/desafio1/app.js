new Vue({
    el: '#desafio',
    data: {
        nome: 'Moises neto',
        idade: '27',
        caminho: 'circuito.png'

    },
    methods: {
        geraNumero(){
            return Math.random()
        }
    }
})