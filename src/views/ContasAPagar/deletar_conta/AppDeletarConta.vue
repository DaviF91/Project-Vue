<template>
    <DeletarConta :show="Store.actionButtonSelected == 'Deletar Conta' && contaConciliada == true" />
    <AvisoDeletar :show="Store.actionButtonSelected == 'Deletar Conta' && contaConciliada == false" />
</template>

<script setup>
    import { useStore }  from '/src/stores/Store.js';
    const Store = useStore();
</script>

<script>
import DeletarConta from './DeletarConta.vue';
import AvisoDeletar from './AvisoDeletar.vue';

export default {
    components:{
        DeletarConta,
        AvisoDeletar,
    },
    
    data(){
        return{
            contaConciliada: true,
        }
    }
}
</script>