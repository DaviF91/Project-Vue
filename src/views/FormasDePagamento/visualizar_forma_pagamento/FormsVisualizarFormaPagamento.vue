<template>
    <DxForm :on-content-ready="validateForm" :form-data="dataForm" class="m-5">
        <DxGroupItem :col-count="2" caption="Informações da Forma de Pagamento">
            <DxItem  data-field="Nome" :disabled="true">
                <DxLabel text="Nome"/>
            </DxItem>
            <DxItem  data-field="" :disabled="true">
                <DxLabel text="Status"/>
            </DxItem>
            <DxItem  data-field="IdFormaPagamentoBase" :disabled="true" >
                <DxLabel text="Forma Base"/>
            </DxItem>

        </DxGroupItem>
        <DxGroupItem :col-count="1">
            <DxSimpleItem
                :disabled="true"
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
            notesEditorOptions: { height: 90, maxLength: 200 },
            notesOptions: { height: 140 },
        }
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