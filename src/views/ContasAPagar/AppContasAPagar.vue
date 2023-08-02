<template>
  <div class="p-3 m-2 rounded-2xl bg-white drop-shadow-[0px_35px_35px_rgba(0,0,100,0.17)]">
    <h3 class="text-center m-2 font-semibold from-inherit">Contas á Pagar </h3>
    <AppListagemContas />
    <AppLancarConta />
    <AppAgendarConta />
    <AppDeletarConta />
    <AppEditarConta />
    <AppLancarContaAdiantamento />
    <AppVisualizarConta />
    <AppInformarPagamento />
    <AppGastos />
    <ActionsButton  :Actions="rowSelected ? ActionsContasAPagarSelected : ActionsContasAPagar" :Icons="rowSelected ? IconsActions : IconsActionsSelected" />
  </div>


</template>

<script setup>
  import { useStore } from '/src/stores/Store.js';
  const Store = useStore();
</script>

<script>
  import AppListagemContas from './listagem_contas/AppListagemContas.vue';
  import AppLancarConta from './lançar_conta/AppLancarConta.vue';
  import AppAgendarConta from './agendar_conta/AppAgendarConta.vue'
  import AppDeletarConta from './deletar_conta/AppDeletarConta.vue';
  import AppEditarConta from './editar_conta/AppEditarConta.vue';
  import AppLancarContaAdiantamento from './lançar_conta_adiantamento/AppContaAdiantamento.vue';
  import AppVisualizarConta from './visualizar_contas/AppVisualizarContas.vue'
  import ActionsButton from '../../components/ActionButton.vue';
  import AppInformarPagamento from './informar_pagamento/AppInfoPagamento.vue';
  import AppGastos from './gastos/AppGastos.vue';

  export default {
    components: {
      AppLancarConta,
      AppAgendarConta,
      AppDeletarConta,
      AppEditarConta,
      AppLancarContaAdiantamento,
      AppListagemContas,
      AppVisualizarConta,
      AppInformarPagamento,
      ActionsButton,
      AppGastos
    },
    data() {
      return {
        rowSelected: true,
        ActionsContasAPagar: ['Lançar Conta', 'Lançar Conta com Adiantamento'],
        ActionsContasAPagarSelected: [
          'Lançar Conta', 'Visualizar Conta', 'Editar Conta', 
          'Deletar Conta','Lançar Conta com Adiantamento', 'Gastos', 'Agendar Conta', 'Informar Pagamento'
        ],
        IconsActions: [
          'bi bi-wallet', 'bi-file-earmark-text', 'bi-pencil-square', 
          'bi-trash','bi-calendar-plus', 'bi-cash-coin',  'bi-calendar-check', 'bi-credit-card' 
        ],
        IconsActionsSelected: [
          'bi bi-wallet', 'bi-calendar-plus'],
      };
    },
    mounted(){
      
    },
    methods:{
     
    }
  };
</script>