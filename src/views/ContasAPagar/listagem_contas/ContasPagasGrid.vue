<template>
    <DxDataGrid class="m-1 custom-grid" id="gridContasPagas" :ref="gridContasPagas" :data-source="contasPagas" 
    :column-auto-width="true" :column-hiding-enabled="true" :selection="{ mode: 'multiple' }" :show-borders="true" 
    :show-row-lines="showRowLines" key-expr="ID" 
    @selection-changed="selectedChanged" :grouping="{autoExpandAll: true }">
      <DxFilterRow :visible="showFilterRow" :apply-filter="currentFilter" />
        <DxColumnChooser :enabled="true">
          <DxColumnChooserSearch :enabled="true" />
          <DxColumnChooserSelection />
        </DxColumnChooser>
        <DxRowDragging :allow-reordering="true" :on-reorder="onReorder" :show-drag-icons="showDragIcons"/>
        <DxPaging :page-size="9"/>
        <DxPager :visible="true" :allowed-page-sizes="pageSizes" :display-mode="displayMode" :show-page-size-selector="showPageSizeSelector"
        :show-info="showInfo" :show-navigation-buttons="showNavButtons"
      />
        <DxColumn data-field="ID" caption="ID" />
        <DxColumn data-field="Conta" caption="Conta" />
        <DxColumn data-field="ValorPago" caption="Valor Pago" />
        <DxColumn data-field="MultaPaga" caption="Multa Paga"/>
        <DxColumn data-field="DataPagamento" data-type="date" caption="Data Pagamento"/>
        <DxColumn data-field="DescontoAplicado" caption="Desconto Aplicado"/>
        <DxColumn data-field="FormaPagmento" caption="Forma Pagmento"/>
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
</script>

<script>
  import { contasAPagar, contasPagas} from '../data.js';
  import ActionsButton from '../../../components/ActionButton.vue';
  
  export default {
    components: {
      DxDataGrid, DxColumn, DxPaging, DxPager, DxDateBox,
      DxEditing, DxTexts, DxSpeedDialAction, DxSelectBox,
      DxTextBox, DxRowDragging, DxFormItem, DxForm, DxColumnChooser,
      DxColumnChooserSelection, DxFilterRow, DxColumnChooserSearch,
      TabGroup, TabList, Tab, TabPanels, TabPanel,
      ActionsButton,
    },
    data() {
      return {
        //External Components
        rowSelected: 0,
        gridContasApagar: 'gridContasApagar',
        gridContasPagas: 'gridContasApagar',
        selectedRowIndex: -1,
        showInfo: true,
        showNavButtons: true,
        showFilterRow: true,
        showHeaderFilter: true,
        rowAlternationEnabled: true,
        showRowLines: true,
        //Internal Components
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
        this.rowSelected = e.component.getSelectedRowKeys();
      },
    },
  };
</script>

