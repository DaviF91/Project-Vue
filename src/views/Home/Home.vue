<script setup>
import { RouterView } from 'vue-router';
import ContasAPagar from '../ContasAPagar/AppContasAPagar.vue';
import FormasDePagamento from '../FormasDePagamento/AppFormasDePagamento.vue';
import Documentos from '../Documentos/AppDocumentos.vue';
import TiposDocumento from '../TiposDeDocumentos/AppTipoDocumento.vue';
</script>

<template>
  <main>
    <div class="grid grid-cols-2 grid-rows-2 bg-[#fffefe]">
      <ContasAPagar />
      <Documentos />
      <TiposDocumento />
      <FormasDePagamento/>
    </div>
  </main>
  <RouterView />
</template>
