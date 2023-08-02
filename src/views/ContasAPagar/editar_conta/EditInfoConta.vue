<template>
<DxForm :form-data="dataForm" class="m-2">
    <DxGroupItem :col-count="3" caption="Informações da Conta">
        <DxItem data-field="EmpresaId" >
            <DxLabel text="Empresa" />
        </DxItem>
        <DxItem data-field="FornecedorId" >
            <DxLabel text="Fornecedor"/>
        </DxItem>
        <DxItem data-field="Valor" >
            <DxLabel text="Valor"/>
        </DxItem>
        <DxItem data-field="DataVencimento" >
            <DxLabel text="Data de Vencimento"/>
        </DxItem>
        <DxItem data-field="DataCompetencia" >
            <DxLabel text="Data da Competência"/>
        </DxItem>
        <DxItem data-field="" >
            <DxLabel text="Usuário"/>
        </DxItem>
        <DxItem data-field="Id" >
            <DxLabel text="Número da Conta"/>
        </DxItem>
        <DxItem data-field="idDocumento" >
            <DxLabel text="ID Documento"/>
        </DxItem>
        <DxItem data-field="" >
            <DxLabel text="Itens"/>
        </DxItem>
    </DxGroupItem>
</DxForm>
</template>

<script setup>
    import { DxForm, DxItem, DxLabel, DxGroupItem, DxSimpleItem } from 'devextreme-vue/form';
    import { useStore } from '/src/stores/Store.js';
</script>

<script>
export default {
    
    components: {
  },
    data() {
        return {
           dataForm: [],
           dadosAlterados: []
        }
    },
    watch: {
        dataForm: {
        deep: true,
        handler(newData) {
            // this.dadosAlterados = Object.assign({}, newData);
            this.dadosAlterados = JSON.parse(JSON.stringify(newData)); // Salvar uma cópia dos dados alterados
            console.log(this.dadosAlterados)
        },
        },
    },
    mounted(){
        this.formContaSelecionada() 
       
    },
    methods: {
        formContaSelecionada(){
        const Store = useStore();
        const id = Store.idSelecionado

        const apiUrl = `http://192.168.254.39:30023/api/teste/ContaAPagar/${id}`;

        fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            this.dataForm = data.Dados;
        });
        }
    },
}
</script>