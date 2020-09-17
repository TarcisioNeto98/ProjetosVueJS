/*var app = new Vue({
    el: "#app",
    data: {mensagem:'<p>Resident<br/> Evil</p>'}
});*/

var app = new Vue({
    el:"#app",
    data:{
        nome:'',
        email: '',
        login: ''
    },
    computed:{
        getLogin: function(){
            return this.login;
        }
    },
    watch:{
        nome: function(old, newValue){
            this.login = newValue + ' ' + this.email;
        },
        email: function(old, newValues){
            this.login = this.nome + ' ' + newValues;
        }
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
            var nomeValue = document.querySelector('input[type="text"]').value;
            var emailValue = document.querySelector('input[type="email"]').value;
            this.email = emailValue;
            this.nome = nomeValue;
            axios.post('http://localhost:3000/', this.getFullLogin()).catch(e => console.error(e));
        },
        buscar: function(){
            //axios.post('http://localhost:3000/', this.getFullLogin()).catch(e => console.error(e));
        }
    }
});