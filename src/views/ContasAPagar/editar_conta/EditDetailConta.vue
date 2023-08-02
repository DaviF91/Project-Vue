<template>
    <DxForm :form-data="employee" class="m-2">
        <DxGroupItem :col-count="4" caption="Detalhes da Conta">
            <DxItem data-field="" >
                <DxLabel text="Juros %" />
            </DxItem>
            <DxItem data-field="" >
                <DxLabel text="Multa %"/>
            </DxItem>
            <DxItem data-field="" >
                <DxLabel text="Desconto %"/>
            </DxItem>
            <DxItem data-field="" >
                <DxLabel text="Status"/>
            </DxItem>
        </DxGroupItem>
        <DxGroupItem :col-count="1">
            <DxSimpleItem
                :editor-options="notesOptions"
                data-field="" editor-type="dxTextArea"
            ><DxLabel text="Descrição"/></DxSimpleItem>
    </DxGroupItem>
</DxForm>
</template>

<script>
import { DxTextArea } from 'devextreme-vue/text-area';
import service from '../data2.js';

export default {
    components: {
        DxTextArea,
    },
    
    data() {
        const employee = service.getEmployee();
        const positions = service.getPositions();
        return {
            agendarConta: false,
            ItemListagem: 'Item listagem',
            tableCategories: ['Contas á Pagar', 'Contas Pagas'],
            employee,
            positions,
            
            positionEditorOptions: { items: positions, searchEnabled: true, value: '' },
            hireDateEditorOptions: { width: '100%', value: '' },

            birthDateEditorOptions: { width: '100%', disabled: true },
            notesEditorOptions: { height: 90, maxLength: 200 },
            phoneEditorOptions: { mask: '+1 (X00) 000-0000', maskRules: { X: /[02-9]/ } },
            notesOptions: { height: 140 },
        }
    },
    methods: {
    validateForm(e) {
      e.component.validate();
    },
  },
}
</script>