<template>
    <DxDataGrid class="m-1 custom-grid" id="grid" :ref="gridFormaPagamento" :data-source="dataSource" :column-auto-width="true" :column-hiding-enabled="true" :selection="{ mode: 'multiple' }" :show-borders="true" :show-row-lines="showRowLines" :row-alternation-enabled="rowAlternationEnabled" key-expr="ID" @selection-changed="selectedChanged" :grouping="{autoExpandAll: true }">
      <DxFilterRow :visible="showFilterRow" :apply-filter="currentFilter" />
        <DxColumnChooser :enabled="true">
        <DxColumnChooserSearch :enabled="true" />
        <DxColumnChooserSelection />
      </DxColumnChooser>
      <DxRowDragging
      :allow-reordering="false"
      :on-reorder="onReorder"
      :show-drag-icons="showDragIcons"
      />
      <DxPaging :page-size="9"/>
      <DxPager
      :visible="true"
      :allowed-page-sizes="pageSizes"
      :display-mode="displayMode"
      :show-page-size-selector="showPageSizeSelector"
      :show-info="showInfo"
      :show-navigation-buttons="showNavButtons"
      />
      <DxColumn data-field="Nome" caption="Nome"/>
      <DxColumn data-field="IdFormaPagamentoBase" caption="Forma Base" />
      <DxColumn data-field="" caption="Status"/>
      <DxColumn data-field="Descricao" caption="Descrição"/>
    </DxDataGrid>
</template>

<script>
import { DxDataGrid, DxColumnChooser, DxColumnChooserSelection, DxColumnChooserSearch, DxColumn, DxPaging, DxPager, DxFilterRow, DxEditing, DxTexts, DxRowDragging} from 'devextreme-vue/data-grid';
import DxDateBox from 'devextreme-vue/date-box';
import DxTextBox from 'devextreme-vue/text-box';
import { DxForm, DxFormItem  } from 'devextreme-vue/form';
import DxSpeedDialAction from 'devextreme-vue/speed-dial-action';
import DxSelectBox from 'devextreme-vue/select-box';
import { useStore } from '/src/stores/Store.js';
import CustomStore from 'devextreme/data/custom_store';

  function isNotEmpty(value) {
    return value !== undefined && value !== null && value !== '';
  }

  const store = new CustomStore({
  key: 'Id',
  load(loadOptions) {
    let params = '?';
    [
      'skip',
      'take',
      // 'requireTotalCount',
      // 'requireGroupCount',
      // 'sort',
      // 'filter',
      // 'totalSummary',
      // 'group',
      // 'groupSummary',
    ].forEach((i) => {
      if (i in loadOptions && isNotEmpty(loadOptions[i])) { params += `${i}=${JSON.stringify(loadOptions[i])}&`; }
    });
    params = params.slice(0, -1);
    return fetch(`http://192.168.254.39:30023/api/teste/FormaPagamentoContasPagar/Get?skip=0&take=10`)
      .then((response) => response.json())
      .then((data) => (
        console.log("teste",data.Dados),
        {
        data: data.Dados,
        totalCount: 3,
        // summary: data.Dados.summary,
        // groupCount: data.Dados.groupCount,
      }))
      .catch(() => { throw new Error('Data Loading Error'); });
  },
});

export default {
  components: {
    DxDataGrid,
    DxColumn,
    DxPaging,
    DxPager,
    DxEditing,
    DxTexts,
    DxSpeedDialAction,
    DxSelectBox,
    DxDateBox,
    DxTextBox,
    DxRowDragging,
    DxFormItem,
    DxForm,
    DxColumnChooser,
    DxColumnChooserSelection,
    DxFilterRow,
    DxColumnChooserSearch,
  },
  data() {
    return {
      
      rowSelected: 0,
      gridFormaPagamento: 'gridFormaPagamento',
      selectedRowIndex: -1,
      showInfo: true,
      showNavButtons: true,
      showFilterRow: true,
      showHeaderFilter: true,
      rowAlternationEnabled: true,
      showRowLines: true,
      dataSource: store,
    };
  },
  computed: {
    grid() {
      return this.$refs[this.gridFormaPagamento].instance;
    },
  },
  methods: {
    selectedChanged(e) {
      const Store = useStore();
      this.rowSelected = e.component.getSelectedRowKeys();
      this.selectedRow = !this.selectedRow
      if (this.rowSelected.length > 0) {
        const gridInstance = this.$refs.gridFormaPagamento.instance; 
        const selectedRowsData = gridInstance.getSelectedRowsData();
        console.log(selectedRowsData[0].Id)
        Store.idSelecionadoFormaPagamento = selectedRowsData[0].Id;
      } else {
        Store.idSelecionadoFormaPagamento = ""
      }
    },
  },
};
</script>

<style>

</style>
