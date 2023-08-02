<template>
    <DxForm :on-content-ready="validateForm" :form-data="employee" class="m-5">
        <DxGroupItem :col-count="2" caption="Informações do Documento">
            <DxItem :editor-options="hireDateEditorOptions" :validation-rules="validacaoForms.DataVencimento" data-field="">
                <DxLabel text="N° Documento"/>
            </DxItem>
            <DxItem :editor-options="hireDateEditorOptions" :validation-rules="validacaoForms.DataVencimento" data-field="">
                <DxLabel text="Valor"/>
            </DxItem>
            <DxItem :editor-options="positionEditorOptions" :validation-rules="validacaoForms.Fornecedor" data-field="Position" editor-type="dxSelectBox">
                <DxLabel text="Usuário"/>
            </DxItem>
            <DxItem :editor-options="positionEditorOptions" :validation-rules="validacaoForms.Fornecedor" data-field="Position" editor-type="dxSelectBox">
                <DxLabel text="Tipo de Documento"/>
            </DxItem>
        </DxGroupItem>
        <DxGroupItem :col-count="1">
            <DxSimpleItem
                :validation-rules="validacaoForms.Descricao"
                :editor-options="notesOptions"
                data-field=""
                editor-type="dxTextArea"
            ><DxLabel text="Descrição"/></DxSimpleItem>
        </DxGroupItem>
    </DxForm>
</template>

<script setup>
    import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue';
    import { useStore }  from '/src/stores/Store.js';
    const Store = useStore();
</script>

<script>
import service from '../data2.js';
import { DxForm, DxItem, DxLabel, DxGroupItem, DxSimpleItem } from 'devextreme-vue/form';
import { DxTextArea } from 'devextreme-vue/text-area';

export default {
    components: {
    DxForm,
    DxItem,
    DxLabel,
    DxGroupItem,
    DxSimpleItem,
    DxTextArea
  },
    data() {
        const employee = service.getEmployee();
        const positions = service.getPositions();
        return {
            agendarConta: false,
            employee,
            positions,
            validacaoForms: {
                Fornecedor: [{ type: 'required', message: 'Fornecedor é um campo obrigatório.'}],
                Empresa: [{ type: 'required', message: 'Empresa é um campo obrigatório.' }],
                DataCompetencia: [{ type: 'required', message: 'Data da Competência é um campo obrigatório.' }],
                DataVencimento: [{ type: 'required', message: 'Data de Vencimento é um campo obrigatório.' }],
                ValorConta: [{ type: 'required', message: 'Valor é um campo obrigatório.' }],
                Descricao: [{ type: 'required', message: 'Descrição é um campo obrigatório.' }],
            },
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