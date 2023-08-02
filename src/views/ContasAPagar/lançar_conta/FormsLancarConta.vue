<template>
    <DxForm :on-content-ready="validateForm" :form-data="DataAPI" class="m-5">
        <DxGroupItem :col-count="2" caption="Informações da Conta">
            <DxItem :editor-options="positionEditorOptions" :validation-rules="validacaoForms.Fornecedor" data-field="Position" editor-type="dxSelectBox">
                <DxLabel template="Fornecedor"/>
            </DxItem>
            <DxItem :editor-options="positionEditorOptions" :validation-rules="validacaoForms.Empresa" data-field="Position" editor-type="dxSelectBox">
                <DxLabel template="Empresa" />
            </DxItem>
            <DxItem :editor-options="hireDateEditorOptions" :validation-rules="validacaoForms.DataCompetencia" data-field="HireDate" editor-type="dxDateBox">
                <DxLabel template="Data da Competência"/>
            </DxItem>
            <DxItem :editor-options="hireDateEditorOptions" :validation-rules="validacaoForms.DataVencimento" data-field="HireDate" editor-type="dxDateBox">
                <DxLabel>Data de Vencimento</DxLabel>
            </DxItem>
            <DxSimpleItem
                :validation-rules="validacaoForms.Descricao"
                :col-span="2"
                :editor-options="notesOptions"
                data-field=""
                editor-type="dxTextArea"
            ><DxLabel>Descrição</DxLabel></DxSimpleItem>
        </DxGroupItem>
    </DxForm>

    <DxForm :on-content-ready="validateForm" :form-data="Store.employee" class="m-5">
        <DxGroupItem :col-count="4" caption="Valores">
            <DxItem :validation-rules="validacaoForms.ValorConta" data-field="">
                <DxLabel template="Valor"/>
            </DxItem>
            <DxItem data-field="">
                <DxLabel template="Juros %"/>
            </DxItem>
            <DxItem data-field="">
                <DxLabel template="Multa %"/>
            </DxItem>
            <DxItem data-field="">
                <DxLabel template="Desconto %"/>
            </DxItem>
        </DxGroupItem>
    </DxForm>

    <DialogTitle as="h3" class="text-md font-medium leading-6 text-gray-900 m-2"> Previsão de Pagamento</DialogTitle>
    <Switch v-model="agendarConta" :class="agendarConta ? 'bg-blue-700' : 'bg-blue-900'"
        class="relative inline-flex h-[28px] w-[64px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
        <span class="sr-only">Use setting</span>
        <span aria-hidden="true" :class="agendarConta ? 'translate-x-9' : 'translate-x-0'"
            class="pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out">
        </span>
    </Switch>

    <div v-show="agendarConta == true">
        <AgendarConta />
    </div>
</template>

<script setup>
    import { useStore }  from '/src/stores/Store.js';
    const Store = useStore();
</script>

<script>
import { DxForm, DxItem, DxLabel, DxGroupItem, DxSimpleItem } from 'devextreme-vue/form';
import { DxTextArea } from 'devextreme-vue/text-area';
import AgendarConta from '../agendar_conta/FormsAgendarConta.vue';

export default {
    components: {
        DxForm,
        DxItem,
        DxLabel,
        DxGroupItem,
        DxSimpleItem,
        DxTextArea,
        AgendarConta,
    },
    data() {
        const Store = useStore();
        const DataAPI = Store.getDadosAPI();
        return {
            DataAPI,
            agendarConta: false,
            validacaoForms: {
                Fornecedor: [{ type: 'required', message: 'Fornecedor é um campo obrigatório.'}],
                Empresa: [{ type: 'required', message: 'Empresa é um campo obrigatório.' }],
                DataCompetencia: [{ type: 'required', message: 'Data da Competência é um campo obrigatório.' }],
                DataVencimento: [{ type: 'required', message: 'Data de Vencimento é um campo obrigatório.' }],
                ValorConta: [{ type: 'required', message: 'Valor é um campo obrigatório.' }],
                Descricao: [{ type: 'required', message: 'Descrição é um campo obrigatório.' }],
            },
            positionEditorOptions: { 
                items:  [
                    'HR Manager', 'IT Manager', 'CEO'], 
                    searchEnabled: true, value: '' 
                },
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