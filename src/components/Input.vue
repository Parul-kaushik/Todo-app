<template>
    <v-text-field
        class="input"
        placeholder="todo title"
        outlined
        solo
        v-model = "message"
        append-icon="mdi-send"
        @keydown.enter="sendMessage"
        @click:append="sendMessage"
    
    ></v-text-field>
</template>
<script>
export default {
   name: "Input",
   data: () =>({
       message: ''
   }),
   methods: {
       sendMessage () {
           if (this.message == '')this.message = 'Todo item'
           this.$emit('myEvent', this.message);
           this.message = ''
        }
   },
    emits:['myEvent']

}
</script>

<style scoped>
.input {
    width: 100;
}
</style>

