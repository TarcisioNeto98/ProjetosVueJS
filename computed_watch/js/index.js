/*var app = new Vue({
    el: "#app",
    data: {mensagem:'<p>Resident<br/> Evil</p>'}
});*/

var app = new Vue({
    el:"#app",
    data:{
        nome:'',
        email: ''
    },
    methods:{
        show: function(obj){
            alert(JSON.parse(obj).nome);
        },
        getFullLogin: function(){
            return {nome: this.nome, email: this.email};
        },
        connect: function(){
            var data = this.getFullLogin();
            axios.post('http://localhost:3000/', data).catch(e => console.error(e));
        }
    }
});