<template>
    
    <v-list-item class="todo" color='Light-green'>
        <v-checkbox v-model="doneData"></v-checkbox>
        <div :class="{'todo__title--done': doneData}" 
        class="todo_title">{{ title }}</div>
        <v-spacer></v-spacer>
        <v-btn color="error" @click="$emit('Event',id)" 
        class="todo_action" icon small>
        <v-icon>mdi-delete</v-icon>
        </v-btn>
    </v-list-item>
</template>
<script>
export default{
    names: 'Todo',
    props: {
        title: {
            type: String,
            require: true
        },
        id: {
            type: Number,
            require: true
        },
        done: {
            type: Boolean,
            default: false
        }
    },
    data: () => ({
        doneData: false
    }),
    mounted () {
        this.doneData = this.done
    },
    computed:{
        controllDone: {
            get() {
                return this.doneData
            },
            set (value) {
                this.doneData = value
            }
        }
    },
    emits:['Event']
}

</script>

<style scoped lang="scss">
.todo {
    display: flex;
    justify-content: space-between;

    &todo__title--done {
        text-decoration: line-through;
    }
}
</style>