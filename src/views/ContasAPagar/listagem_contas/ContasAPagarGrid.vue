<template>
  <DxDataGrid  class="m-1 custom-grid" id="gridContasApagar" :ref="gridContasApagar" :data-source="dataSource" :remote-operations="true"
    :column-hiding-enabled="true" :selection="{ mode: 'multiple' }" :show-borders="true" 
    :show-row-lines="showRowLines" key-expr="Id" 
    @selection-changed="selectedChanged" :grouping="{autoExpandAll: true }">
    <DxFilterRow :visible="showFilterRow" :apply-filter="currentFilter" />
      <DxColumnChooser :enabled="true">
      <DxColumnChooserSearch :enabled="true" />
      <DxColumnChooserSelection />
      </DxColumnChooser>
      <DxRowDragging :allow-reordering="true" :on-reorder="onReorder" :show-drag-icons="showDragIcons"/>
      <DxPaging :page-size="3"/>
      <DxPager :visible="true" :allowed-page-sizes="pageSizes" :display-mode="displayMode" :show-page-size-selector="showPageSizeSelector"
      :show-info="showInfo" :show-navigation-buttons="showNavButtons"
    />
      <!-- <DxColumn data-field="Grupo" caption="Grupo" :group-index="0"/> -->
      <DxColumn data-field="id" caption="ID" />
      <DxColumn data-field="empresaId" caption="EmpresaId"/>
      <DxColumn data-field="fornecedorId" caption="FornecedorId"/>
      <DxColumn data-field="valor" caption="Valor"/>
      <DxColumn data-field="caixaId" caption="CaixaId"/>
      <DxColumn data-field="contaCorrenteId" caption="ContaCorrenteId"/>
      <DxColumn data-field="dataAgendamento" caption="DataAgendamento"/>
      <DxColumn data-field="dataCompetencia" caption="DataCompetencia"/>
      <DxColumn data-field="dataVencimento" caption="DataVencimento"/> 
      <DxColumn data-field="idDocumento" caption="idDocumento"/>
      <DxColumn data-field="adiantamentos" caption="Adiantamentos"/>
  </DxDataGrid>
</template>

<script setup>
  import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
  import { DxDataGrid, DxColumnChooser, DxColumnChooserSelection, DxColumnChooserSearch, DxColumn, DxPaging, DxPager, DxFilterRow, DxEditing, DxTexts, DxRowDragging} from 'devextreme-vue/data-grid';
  import DxDateBox from 'devextreme-vue/date-box';
  import DxTextBox from 'devextreme-vue/text-box';
  import { DxForm, DxFormItem  } from 'devextreme-vue/form';
  import DxSpeedDialAction from 'devextreme-vue/speed-dial-action';
  import DxSelectBox from 'devextreme-vue/select-box';
  import { createStore } from 'devextreme-aspnet-data-nojquery';
  import { useStore } from '/src/stores/Store.js';
  const Store = useStore();
</script>

<script>
  import { contasAPagar, contasPagas} from '../data.js';
  import ActionsButton from '../../../components/ActionButton.vue';
  import CustomStore from 'devextreme/data/custom_store';

  function isNotEmpty(value) {
    return value !== undefined && value !== null && value !== '';
  }

  const store = new CustomStore({
  key: 'id',
  load: function (loadOptions) {
          return $.ajax({
            data: loadOptions,
            dataType: 'json',
            type: 'POST',
            url: "https://192.168.254.39:30023/api/teste/ContaAPagar/Load"
          })
        }
});

  export default {
    components: {
      DxDataGrid, DxColumn, DxPaging, DxPager, DxDateBox,
      DxEditing, DxTexts, DxSpeedDialAction, DxSelectBox,
      DxTextBox, DxRowDragging, DxFormItem, DxForm, DxColumnChooser,
      DxColumnChooserSelection, DxFilterRow, DxColumnChooserSearch,
      TabGroup, TabList, Tab, TabPanels, TabPanel,
      ActionsButton,createStore
    },
    data() {
      return {
        //External Components
        rowSelected: 0,
        gridContasApagar: 'gridContasApagar',
        gridContasPagas: 'gridContasApagar',
        selectedRow: false,
        showInfo: true,
        showNavButtons: true,
        showFilterRow: true,
        showHeaderFilter: true,
        rowAlternationEnabled: true,
        showRowLines: true,
        //Internal Components
        dataSource: store,
        tableCategories: ['Contas á Pagar', 'Contas Pagas'],
        tableCategoriesSelected: 'Contas á Pagar',
        contasAPagar,
        contasPagas,
        ActionsContasAPagar: ['Lançar Conta'],
        ActionsContasAPagarSelected: ['Visualizar Conta', 'Editar Conta', 'Deletar Conta', 'Pagar Contas', 'Adiantar Conta'],
      };
    },
    computed: {
      grid() {
        return this.$refs[this.gridContasApagar].instance;
      },
    },
    methods: {
      selectedChanged(e) {
        const Store = useStore();
        this.rowSelected = e.component.getSelectedRowKeys();
        
        if (this.rowSelected.length > 0) {
        const gridInstance = this.$refs.gridContasApagar.instance; 
        const selectedRowsData = gridInstance.getSelectedRowsData();
        Store.idContaSelecionado = selectedRowsData[0].id;
      } else{
        Store.idContaSelecionado = ""
      }
      },
    },
  };
</script>