<template>
     <DxForm :form-data="employee" class="m-2">
        <DxGroupItem :col-count="3">
        <DxItem data-field="" :disabled="true">
            <DxLabel text="Empresa" />
        </DxItem>
        <DxItem data-field="" :disabled="true">
            <DxLabel text="Fornecedor"/>
        </DxItem>
        <DxItem data-field="" :disabled="true">
            <DxLabel text="Valor"/>
        </DxItem>
        <DxItem data-field="" :disabled="true">
            <DxLabel text="Data de Vencimento"/>
        </DxItem>
        <DxItem data-field="" :disabled="true">
            <DxLabel text="Data da Competência"/>
        </DxItem>
        <DxItem data-field="" :disabled="true">
            <DxLabel text="Usuário"/>
        </DxItem>
        <DxItem data-field="" :disabled="true">
            <DxLabel text="Número da Conta"/>
        </DxItem>
        <DxItem data-field="" :disabled="true">
            <DxLabel text="ID Documento"/>
        </DxItem>
        <DxItem data-field="" :disabled="true">
            <DxLabel text="Itens"/>
        </DxItem>
    </DxGroupItem>
</DxForm>
</template>

<script>
    import { DxForm, DxItem, DxLabel, DxGroupItem, DxSimpleItem } from 'devextreme-vue/form';
</script>