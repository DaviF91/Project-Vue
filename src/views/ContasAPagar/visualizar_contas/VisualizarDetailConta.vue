<template>
<DxForm :form-data="dataForm" class="m-5">
    <DxGroupItem :col-count="3">
        <DxItem data-field="FornecedorId" :disabled="true">
            <DxLabel text="FornecedorId"/>
        </DxItem>
        <DxItem data-field="EmpresaId" :disabled="true">
            <DxLabel text="EmpresaId"/>
        </DxItem>
        <DxItem data-field="idDocumento" :disabled="true">
            <DxLabel text="idDocumento"/>
        </DxItem>
        <DxItem data-field="DataAgendamento" :disabled="true">
            <DxLabel text="Data Agendamento"/>
        </DxItem>
        <DxItem data-field="DataCompetencia" :disabled="true">
            <DxLabel text="Data Competencia"/>
        </DxItem>
        <DxItem data-field="DataVencimento" :disabled="true">
            <DxLabel text="Data Vencimento"/>
        </DxItem>
        <DxItem data-field="Caixa.Descricao" :disabled="true">
            <DxLabel text="Caixa"/>
        </DxItem>
        <DxItem data-field="CaixaId" :disabled="true">
            <DxLabel text="CaixaId"/>
        </DxItem>
        <DxItem data-field="ContaCorrenteId" :disabled="true">
            <DxLabel text="ContaCorrenteId"/>
        </DxItem>
        <DxItem data-field="Valor" :disabled="true">
            <DxLabel text="Valor"/>
        </DxItem>
        
        <DxItem data-field="Adiantamentos" :disabled="true">
            <DxLabel text="Adiantamentos" />
        </DxItem>
    </DxGroupItem>
    <!-- <DxGroupItem :col-count="1">
        <DxSimpleItem
            :disabled="true"
            :editor-options="notesOptions"
            data-field=""
            editor-type="dxTextArea"
        ><DxLabel text="Descrição"/></DxSimpleItem>
    </DxGroupItem> -->
</DxForm>
</template>

<script setup>
    import { DxForm, DxItem, DxLabel, DxGroupItem, DxSimpleItem } from 'devextreme-vue/form';
    import { DxTextArea } from 'devextreme-vue/text-area';
    import { useStore } from '/src/stores/Store.js';
    const Store = useStore();
    
</script>

<script>
export default {
    components: {
    
  },
  data() {
        return {
           dataForm: []
        }
    },
    mounted(){
        this.formContaSelecionada() 
    },
    methods: {
    //    formContaSelecionada(){
    //     const Store = useStore();
    //     const formConta = Store.dadosSelecionadosContasAPagar
    //     this.dataForm = formConta[0]
    //    }
        formContaSelecionada(){
            const Store = useStore();
            const id = Store.idContaSelecionado

            const apiUrl = `http://192.168.254.39:30023/api/teste/ContaAPagar/Get/${id}`;

            fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                this.dataForm = data.Dados;
            });
        },
    },
}
</script>