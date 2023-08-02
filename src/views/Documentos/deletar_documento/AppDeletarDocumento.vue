<template>
    <DeletarDocumento :show="Store.actionButtonSelected == 'Deletar Documento'" />
</template>

<script setup>
    import { useStore } from '/src/stores/Store.js';
    const Store = useStore();
</script>

<script>
    import DeletarDocumento from './DeletarDocumento.vue';

export default {
    components:{
        DeletarDocumento,
    }
}
</script>