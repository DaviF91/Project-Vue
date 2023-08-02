<template>
    <DxDataGrid 
      class="m-1 custom-grid" id="grid" :ref="gridRefName" 
      :data-source="Store.documentos"  :column-auto-width="true" :column-hiding-enabled="true" 
      :selection="{ mode: 'single' }" :show-borders="true" :show-row-lines="showRowLines" 
      :row-alternation-enabled="rowAlternationEnabled" key-expr="ID" 
      @selection-changed="selectedChanged" :grouping="{autoExpandAll: true }"
    >
      <DxFilterRow :visible="showFilterRow" :apply-filter="currentFilter" />
      <DxColumnChooser :enabled="true">
          <DxColumnChooserSearch :enabled="true" />
          <DxColumnChooserSelection />
      </DxColumnChooser>
      <DxPaging :page-size="9"/>
      <DxPager 
        :visible="true" :allowed-page-sizes="pageSizes"
        :display-mode="displayMode"
        :show-page-size-selector="showPageSizeSelector"
        :show-info="showInfo"
        :show-navigation-buttons="showNavButtons"
      />
      <DxColumn data-field="TipoDocID" caption="Tipo Documento" :lookup="lookup" :group-index="0" />
      <DxColumn data-field="Descricao" caption="Descrição" :group-index="1"/>
      <DxColumn data-field="Numero" caption="Número Documento"  :visible="false"/>
      <DxColumn data-field="ValorTotal" caption="Valor Total"/>
      <DxColumn data-field="ValorTotalImposto" caption="Total Imposto"/>
      <DxColumn data-field="DataEmissao" caption="Data Emissão"/>
      <DxColumn data-field="Situacao" caption="Situação"/>
      <DxColumn caption="Itens" :cell-template="renderItensCell" />
    </DxDataGrid>
</template>

<script setup>
import { useStore }  from '/src/stores/Store.js';
const Store = useStore();
</script>

<script>
import { 
  DxDataGrid, DxColumnChooser, DxColumnChooserSelection, 
  DxColumnChooserSearch, DxColumn, DxPaging, 
  DxPager, DxFilterRow 
} from 'devextreme-vue/data-grid';

export default {
  components: {
    DxDataGrid,
    DxColumn,
    DxPaging,
    DxPager,
    DxColumnChooser,
    DxColumnChooserSelection,
    DxFilterRow,
    DxColumnChooserSearch,
  },
  data() {
    return {
      gridRefName: 'grid',
      selectedRowIndex: -1,
      showInfo: true,
      showNavButtons: true,
      showFilterRow: true,
      showHeaderFilter: true,
      rowAlternationEnabled: true,
      showRowLines: true,
    };
  },
  computed: {
    grid() {
      return this.$refs[this.gridRefName].instance;
    },
  },
  methods: {
    selectedChanged(e) {
      this.rowSelected = e.component.getSelectedRowKeys();
    },
    renderItensCell(container, options) {
      const items = options.data.Itens;
      const table = document.createElement('table');
      const headerRow = table.insertRow();
      const headers = ['Descrição', 'Quantidade', 'Valor Uni.', 'Valor Total'];
      
      headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
      });

      items.forEach(item => {
        const row = table.insertRow();
        const cells = [
          item.Descricao,
          item.Quantidade,
          item.ValorUni,
          item.ValorTotal,
        ];
        cells.forEach(cellText => {
          const cell = row.insertCell();
          cell.textContent = cellText;
        });
      });
      container.appendChild(table);
    },
  },
};
</script>