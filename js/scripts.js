console.log('int ok');
const {createApp} = Vue;

createApp ({
    data(){
        return{
            listTask : [
                'Fare la spesa',
                'Fare i compiti',
                'Fare i piatti',
                'Fare il letto',
                'Andare al commercialista'
            ]
        }
    },
    methods: {
        
    },
    mounted() {
        
    },
}).mount('#app')