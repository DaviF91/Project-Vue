<template>
    <div class="mt-6">
        <DxForm :form-data="employee">
            <DxGroupItem :col-count="2" caption="Informações do Agendamento">
                <DxItem :editor-options="hireDateEditorOptions" data-field="HireDate" editor-type="dxDateBox" :disabled="true">
                    <DxLabel template="Data do Agendamento" />
                </DxItem>
            </DxGroupItem>
        </DxForm>

        <div>
            <DxDataGrid class="custom-grid-notline" :show-borders="true" :data-source="contasAPagar" :repaint-changes-only="true" :row-alternation-enabled="true">
                <DxEditing
                    refresh-mode="reshape"
                    :allow-adding="false"
                    :allow-updating="false"
                    :allow-deleting="false"
                    mode="cell"
                    :use-icons="true"
                />
                <DxColumn data-field="Usuario" caption="Forma de Pagamento">
                    <DxLookup
                    :data-source="teste"
                    :value-expr="Value"
                    :display-expr="Text"
                    />
                </DxColumn>
                <DxColumn data-field="Juros" caption="Valor á Pagar" />
            </DxDataGrid>
        </div>

    </div>
</template>

<script setup>
    import { useStore }  from '/src/stores/Store.js';
    const Store = useStore();
</script>

<script>
import { contasAPagar } from '../data.js';
import { DxForm, DxItem, DxLabel, DxGroupItem } from 'devextreme-vue/form';
import service from '../data2.js';

import {
  DxDataGrid,
  DxColumn,
  DxEditing,
  DxScrolling,
  DxSummary,
  DxLookup,
  DxTotalItem,
} from 'devextreme-vue/data-grid';
import { DxButton } from 'devextreme-vue/button';

export default {
    components: {
    DxForm,
    DxItem,
    DxLabel,
    DxGroupItem,

    DxDataGrid,
    DxColumn,
    DxEditing,
    DxScrolling,
    DxSummary,
    DxLookup,
    DxTotalItem,
    DxButton,
  },
    data() {
        const employee = service.getEmployee();
        const positions = service.getPositions();
        
        return {
            teste: ['1', '2', '3'],
            agendarConta: false,
            contasAPagar,
            employee,
            positions,
            validacaoForms: {
                DataAgendamento: [{ type: 'required', message: 'Data de Agendamento é um campo obrigatório.'}],
            },
            positionEditorOptions: { items: positions, searchEnabled: true, value: '' },
            hireDateEditorOptions: { width: '100%', value: '' },
        }
    },
    methods: {
    validateForm(e) {
      e.component.validate();
    },
  },
}
</script>