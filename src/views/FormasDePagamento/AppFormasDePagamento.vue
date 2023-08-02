<template>
    <div class="p-3 m-2 rounded-2xl bg-white drop-shadow-[0px_35px_35px_rgba(0,0,100,0.17)]">
      <h3 class="text-center m-2 font-semibold from-inherit"> Formas de Pagamento </h3>
      <FormasDePagamentoGrid />
      <VisualizarFormaDePagamento/>
      <EditarFormaDePagamento/>
      <AdicionarFormaPagamento/>
      <DeletarFormaPagamento/>
      <ActionsButton :Actions="ActionsContasAPagarSelected" :Icons="IconsActions" />
    </div>
  </template>
  
  <script>
    import ActionsButton from '../../components/ActionButton.vue';
    import FormasDePagamentoGrid from './listar_formas_de_pagamento/FormasDePagamento.vue'
    import VisualizarFormaDePagamento from './visualizar_forma_pagamento/AppVisualizarFormaPagamento.vue'
    import EditarFormaDePagamento from './editar_forma_pagamento/AppEditarFormaPagamento.vue'
    import AdicionarFormaPagamento from './adicionar_forma_pagamento/AppAdicionarFormaPagamento.vue'
    import DeletarFormaPagamento from './deletar_forma_pagamento/AppDeletarFormaPagamento.vue'
  
    export default {
      components: {
        ActionsButton,
        FormasDePagamentoGrid,
        VisualizarFormaDePagamento,
        EditarFormaDePagamento,
        AdicionarFormaPagamento,
        DeletarFormaPagamento
      },
      
      data() {
        return {
          rowSelected: 0,
          ActionsContasAPagar: [''],
          ActionsContasAPagarSelected: ['Adicionar Forma de Pagamento','Visualizar Forma de Pagamento', 'Editar Forma de Pagamento', 'Deletar Forma de Pagamento'],
          IconsActions: ['bi-file-earmark-plus','bi-file-earmark-text','bi-pencil-square','bi-trash'],
        };
      },
  };
  </script>