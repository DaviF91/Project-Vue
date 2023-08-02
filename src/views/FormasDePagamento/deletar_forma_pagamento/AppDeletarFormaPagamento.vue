<template>
    <DeletarFormaPagamento :show="Store.actionButtonSelected == 'Deletar Forma de Pagamento'" />
</template>

<script setup>
    import { useStore } from '/src/stores/Store.js';
    const Store = useStore();
</script>

<script>
    import DeletarFormaPagamento from './DeletarFormaPagamento.vue';

export default {
    components:{
        DeletarFormaPagamento,
    }
}
</script>