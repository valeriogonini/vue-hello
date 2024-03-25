
const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Ciao a tutti',
            urlImg: "https://i.pinimg.com/736x/d9/7b/dd/d97bdd8279fd854174e5cd2ca6e8fd30.jpg"
        }
    }
}).mount('#app')