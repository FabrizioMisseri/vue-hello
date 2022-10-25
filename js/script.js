// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const {createApp} = Vue;

createApp({
    data(){
        return {
            msg: "",
            img: "https://picsum.photos/200/300",
            color: "red"
        }
    },
    methods:{
        greetChangeColor: function() {
            alert("forza roma");
            if (this.color === "red") {
                this.color = "green";
            } else{
                this.color = "red";
            }
        }
    }
}).mount("#app");