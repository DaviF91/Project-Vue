<template>
    <div>
        <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
            <DxForm :form-data="conta">
                <DxGroupItem :col-count="2" :caption="Store.actionButtonSelected == 'Visualizar Conta' ? '' : 'Gastos da Conta'" >
                    <DxItem data-field="Conta"  disabled="false"><DxLabel text="Conta" /></DxItem>
                    <DxItem data-field="Valor"  disabled="true"><DxLabel text="Valor" /></DxItem>
                </DxGroupItem>
            </DxForm>
        </DisclosurePanel>
        <DxDataGrid
        class="custom-grid-gastos"
        id="gridContainer"
        :data-source="dataSource"
        :allow-column-reordering="true"
        :show-borders="true"
        key-expr="ID"
        @editing-start="logEvent('EditingStart')"
        @init-new-row="logEvent('InitNewRow')"
        @row-inserting="logEvent('RowInserting')"
        @row-inserted="logEvent('RowInserted')"
        @row-updating="logEvent('RowUpdating')"
        @row-updated="logEvent('RowUpdated')"
        @row-removing="logEvent('RowRemoving')"
        @row-removed="logEvent('RowRemoved')"
        @saving="logEvent('Saving')"
        @saved="logEvent('Saved')"
        @edit-canceling="logEvent('EditCanceling')"
        @edit-canceled="logEvent('EditCanceled')"
        :row-alternation-enabled="true"
        >
            <DxPaging :enabled="true"/>
            <DxEditing
                :allow-updating="Store.actionButtonSelected == 'Visualizar Conta' ? false : true"
                :allow-deleting="Store.actionButtonSelected == 'Visualizar Conta' ? false : true"
                :allow-adding="Store.actionButtonSelected == 'Visualizar Conta' ? false : true"
                mode="row"
                :use-icons="true"
            >
                <DxTexts 
                confirm-delete-message="Deseja realmente deletar esse item?"
                :editRow="'Editar'"
                :deleteRow="'Deletar'"
                >
                </DxTexts>
            </DxEditing>
            <DxColumn
                data-field="PercentualGasto"
                caption="% do Gasto"
            />
            <DxColumn
                data-field="Valor"
                caption="Valor do Gasto"
                :cell-template="valorCellTemplate"
            />
            <DxColumn data-field="CentroDeCusto">
                <DxLookup
                :data-source="centrocusto"
                display-expr="Name"
                value-expr="ID"
                />
            </DxColumn>
            <DxColumn data-field="GrupoDespesa">
                <DxLookup
                :data-source="grupodespesa"
                display-expr="Name"
                value-expr="ID"
                />
            </DxColumn>
            <DxSummary>
                <DxTotalItem
                    column="PercentualGasto"
                    summary-type="sum"
                    display-format="% Total Gasto: {0}"
                />
                <DxTotalItem
                    column="Valor"
                    summary-type="sum"
                    display-format="Total Gasto: {0}"
                    :value-format-options="{ style: 'currency', currency: 'BRL'}"
                />
            </DxSummary>
        </DxDataGrid>
    </div>
</template>

<script setup>
    import DxButton from 'devextreme-vue/button';
    import {DxDataGrid, DxColumn, DxEditing, DxPaging, DxLookup, DxTotalItem, DxSummary, DxTexts, DxCommand} from 'devextreme-vue/data-grid';
    import { DxForm, DxItem, DxLabel, DxGroupItem } from 'devextreme-vue/form';
    import { employees, centrocusto, grupodespesa, conta } from '../service.js';
    import { useStore }  from '/src/stores/Store.js';
    const Store = useStore();
</script>

<script>
export default {
  components: {
    DxDataGrid,
    DxColumn,
    DxEditing,
    DxPaging,
    DxButton,
    DxLookup,
    DxTotalItem,
    DxSummary,
    DxTexts,
    DxForm,
    DxGroupItem,
    DxItem,
    DxCommand,
  },
  data() {
    return {
      events: [],
      dataSource: employees,
      centrocusto,
      grupodespesa,
      conta,
    };
  },
  methods: {
        logEvent(eventName) {
            this.events.unshift(eventName);
        },
        clearEvents() {
            this.events = [];
        },
        valorCellTemplate(container, options) {
            const value = options.data[options.column.dataField];
            const formattedValue = value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            container.textContent = formattedValue;
        },   
    },
};

</script>

<style>

.custom-grid-gastos{
    border-radius: 10px;
    padding: 5px;
  }

  .custom-grid-gastos .dx-datagrid-rowsview .dx-datagrid-content {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    overflow: hidden;
  }
  
  .custom-grid-gastos .dx-datagrid-borders > .dx-datagrid-headers {
      border-top: 1px solid #ddd;
      border-radius: 10px 10px 0px 0px;
  }
  
  .custom-grid-gastos .dx-datagrid-borders .dx-datagrid-rowsview, .dx-datagrid-headers + .dx-datagrid-rowsview, .dx-datagrid-rowsview.dx-datagrid-after-headers {
      border-top: none;
      border-radius: 0px 0px 0px 0px;
  }

.dx-datagrid-borders > .dx-datagrid-rowsview, .dx-datagrid-borders > .dx-datagrid-total-footer {
    border-radius: 0px 0px 10px 10px;
}
   
</style>