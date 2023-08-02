<template>
    <DxForm :on-content-ready="validateForm" :form-data="dataForm" class="m-5">
        <DxGroupItem :col-count="2" caption="Informações da Forma de Pagamento">
            <DxItem  data-field="Nome" :validation-rules="validacaoForms.Nome">
                <DxLabel text="Nome"/>
            </DxItem>
            <DxItem  data-field="" >
                <DxLabel text="Status"/>
            </DxItem>
            <DxItem  data-field="IdFormaPagamentoBase" :validation-rules="validacaoForms.FormaPagamentoBase">
                <DxLabel text="Forma Base"/>
            </DxItem>

        </DxGroupItem>
        <DxGroupItem :col-count="1">
            <DxSimpleItem
                :validation-rules="validacaoForms.Descricao"
                :editor-options="notesOptions"
                data-field="Descricao"
                editor-type="dxTextArea"
            ><DxLabel text="Descrição"/></DxSimpleItem>
        </DxGroupItem>
    </DxForm>
</template>

<script setup>
    import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue';
    import { useStore }  from '/src/stores/Store.js';
</script>

<script>
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
        return {
            dataForm: [],
            dadosAlterados: [],
            notesEditorOptions: { height: 90, maxLength: 200 },
            notesOptions: { height: 140 },
            validacaoForms: {
                Nome: [{ type: 'required', message: 'Nome é um campo obrigatório.'}],
                FormaPagamentoBase: [{ type: 'required', message: 'Forma Pagamento Base é um campo obrigatório.' }],
                Descricao: [{ type: 'required', message: 'Descrição é um campo obrigatório.' }],
            },
        }
    },
    watch: {
        dataForm: {
        deep: true,
        handler(newData) {
            this.dadosAlterados = JSON.parse(JSON.stringify(newData)); // Salvar uma cópia dos dados alterados
            this.$emit('dados-alterados', this.dadosAlterados);
        },
        },
    },
    mounted(){
      this.PagamentoSelecionado()
    },
    methods: {
    validateForm(e) {
      e.component.validate();
    },
    PagamentoSelecionado(){
        const Store = useStore();
        const id = Store.idSelecionadoFormaPagamento
        const apiUrl = `http://192.168.254.39:30023/api/teste/FormaPagamentoContasPagar/Get/${id}`;

        fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            this.dataForm = data.Dados;
        });
    }
  },
}
</script>