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
            ],
            newTask : null,
        }
    },
    methods: {
        removeListTask (index){
            this.listTask.splice(index,1)
        },
        pushListTask (text){
            this.listTask.push(text);
            this.newTask = null;
        },
    },
    mounted() {
        
    },
}).mount('#app')