new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        mostraralerta(){
            alert('olha um alerta!')
        },
        pegavalordigitado(e){
            this.valor = e.target.value
        }
    }
})