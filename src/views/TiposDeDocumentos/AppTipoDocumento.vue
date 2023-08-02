<template>
    <div class="p-3 m-2 rounded-2xl bg-white drop-shadow-[0px_35px_35px_rgba(0,0,100,0.17)]">
      <h3 class="text-center m-2 font-semibold from-inherit"> Tipos de Documento </h3>
      <ActionsButton :Actions="ActionsContasAPagarSelected" :Icons="IconsActions" />
    </div>
  </template>
  
  <script>
    import ActionsButton from '../../components/ActionButton.vue';
  
    export default {
      components: {
        ActionsButton,
      },
      
      data() {
        return {
          rowSelected: 0,
          ActionsContasAPagar: ['Lançar Documento'],
          ActionsContasAPagarSelected: ['Lançar Documento'],
          IconsActions: ['bi-file-earmark-plus'],
        };
      },
  };
  </script>