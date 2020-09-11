Vue.component('item-lista', {
    props: ['item'],
    template: '<li>{{item}}</li>'
});//Componente simples de um item de lista

var app = new Vue({
    el:'#app',
    data:{
        filmes:['Resident Evil', 'Madrugada dos Mortos', 'Eu sou a lenda']
    }
});