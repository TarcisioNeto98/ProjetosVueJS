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

    computed:{
        getFullLogin: function(){
            return this.nome + ' ' + this.email;
        }
    },

    methods:{
        connect: function(){
            var obj = {login: this.getFullLogin()};
        }
    }
});