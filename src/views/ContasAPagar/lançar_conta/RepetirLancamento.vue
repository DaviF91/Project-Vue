<template>
  <button type="button" @click="() => { modalDuplicarConta = !modalDuplicarConta}" class="m-3 inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
      Duplicar Conta
  </button>

  <TransitionRoot appear :show="modalDuplicarConta" as="template">
    <Dialog as="div" @close="modalDuplicarConta = !modalDuplicarConta" class="relative z-10">
      <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" 
        enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-black bg-opacity-60" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95">
            <DialogPanel class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
              <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
                Repetir Conta
              </DialogTitle>
              <DxForm :on-content-ready="validateForm" :form-data="employee" class="m-5">
                <DxGroupItem :col-count="full" caption="">
                  <DxItem data-field="Repeticao" editor-type="dxSelectBox">
                      <DxLabel template="Repetição"/>
                  </DxItem>
                </DxGroupItem>
                <DxGroupItem :col-count="2" caption="">
                  <DxItem data-field="">
                    <DxLabel template="Quantidade"/>
                  </DxItem>
                </DxGroupItem>
              </DxForm>
              <div class="flex flex-row-reverse">
                <button type="button"  class="m-3 inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                    Salvar
                </button>
                <button type="button" @click="() => {  modalDuplicarConta = !modalDuplicarConta}" class="m-3 inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                    Cancelar
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
  import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue';
  import { DxForm, DxItem, DxLabel, DxGroupItem } from 'devextreme-vue/form';
</script>

<script>
import { DxForm, DxItem, DxLabel, DxGroupItem } from 'devextreme-vue/form';
import service from '../data2.js';

export default {
    components: {
    DxForm,
    DxItem,
    DxLabel,
    DxGroupItem,
  },
  data() {
    const employee = service.getEmployee();
    const positions = service.getPositions();
    return {
      modalDuplicarConta: false,
      employee,
      positions,
      validacaoForms: {
          Fornecedor: [{ type: 'required', message: 'Fornecedor é um campo obrigatório.'}],
          Empresa: [{ type: 'required', message: 'Empresa é um campo obrigatório.' }],
          DataCompetencia: [{ type: 'required', message: 'Data da Competência é um campo obrigatório.' }],
          DataVencimento: [{ type: 'required', message: 'Data de Vencimento é um campo obrigatório.' }],
          ValorConta: [{ type: 'required', message: 'Valor é um campo obrigatório.' }],
      },
      positionEditorOptions: { items: positions, searchEnabled: true, value: '' },
      hireDateEditorOptions: { width: '100%', value: '' },

      birthDateEditorOptions: { width: '100%', disabled: true },
      notesEditorOptions: { height: 90, maxLength: 200 },
      phoneEditorOptions: { mask: '+1 (X00) 000-0000', maskRules: { X: /[02-9]/ } },
    }
  },

  methods: {
  validateForm(e) {
    e.component.validate();
  },

  },
}
</script>