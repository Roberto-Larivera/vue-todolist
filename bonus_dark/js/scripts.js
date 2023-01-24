console.log('int ok');
const {createApp} = Vue;

createApp ({
    data(){
        return{
            listTask : [
                {
                    text: 'Fare la spesa',
                    todo: false
                },{
                    text: 'Fare i compiti',
                    todo: true
                },{
                    text: 'Fare i piatti',
                    todo: false
                },{
                    text: 'Fare il letto',
                    todo: false
                },{
                    text: 'Andare al commercialista',
                    todo: true
                }
            ],
            newTask : null,
        }
    },
    methods: {
        removeListTask (index){
            this.listTask.splice(index,1)
            console.log(this.listTask)

        },
        pushListTask (input){
            this.listTask.push({text: (input.charAt(0).toUpperCase() + input.slice(1).toLowerCase()), todo: false});
            console.log(this.listTask)
            this.newTask = null;
        },
    },
    mounted() {
    },
}).mount('#app')