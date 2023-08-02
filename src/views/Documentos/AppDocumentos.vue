<template>
  <div class="p-3 m-2 rounded-2xl bg-white drop-shadow-[0px_35px_35px_rgba(0,0,100,0.17)]">
    <h3 class="text-center m-2 font-semibold from-inherit"> Documentos </h3>
    <DocumentosGrid />
    <LancarDocumento />
    <EditarDocumento />
    <DeletarDocumento />
    <ActionsButton :Actions="ActionsContasAPagarSelected" :Icons="IconsActions" />
  </div>
</template>

<script>
  import ActionsButton from '../../components/ActionButton.vue';
  import DocumentosGrid from './listagemDocumentos/DocumentosGrid.vue';
  import LancarDocumento from './lançar_documentos/AppLancarDoc.vue';
  import EditarDocumento from './editar_documentos/AppEditarDocumento.vue';
  import DeletarDocumento from './deletar_documento/AppDeletarDocumento.vue';

  export default {
    components: {
      ActionsButton,
      DocumentosGrid,
      LancarDocumento,
      EditarDocumento,
      DeletarDocumento,
    },
    
    data() {
      return {
        rowSelected: 0,
        ActionsContasAPagar: ['Lançar Documento', 'Editar Documento', 'Deletar Documento'],
        ActionsContasAPagarSelected: ['Lançar Documento', 'Editar Documento', 'Deletar Documento'],
        IconsActions: ['bi-file-earmark-plus'],
      };
    },
};
</script>