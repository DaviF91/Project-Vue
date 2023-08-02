<template>
    <TransitionRoot :show="Store.actionButtonSelected == 'Visualizar Conta'" as="template">
        <Dialog as="div" @close="Store.actionButtonSelected = !Store.actionButtonSelected" class="relative z-10">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0"> <div class="fixed inset-0 bg-black bg-opacity-30" /></TransitionChild>
            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex min-h-full items-center justify-center p-4 text-center"> 
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95" style="max-width: 79rem;" enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95">
                        <DialogPanel class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900 text-center"> Visualizar Conta </DialogTitle>
                            <div class="w-full m-2">
                                <div class="mx-auto w-full rounded-2xl bg-white p-2">
                                    <Disclosure as="div" class="mt-2" v-slot="{ open }">
                                        <DisclosureButton class="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                                            <span>Informações da Conta</span>
                                            <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-blue-500"/>
                                        </DisclosureButton>
                                        <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
                                            <VisualizarDetailConta />
                                        </DisclosurePanel>
                                    </Disclosure>

                                    <Disclosure as="div" class="mt-2" v-slot="{ open }">
                                        <DisclosureButton class="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                                            <span>Informações de Agendamento</span>
                                            <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-blue-500"/>
                                        </DisclosureButton>
                                        <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
                                            <AgendarConta />
                                        </DisclosurePanel>
                                    </Disclosure>
                                    
                                    <Disclosure as="div" class="mt-2" v-slot="{ open }">
                                        <DisclosureButton class="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                                            <span>Gastos</span>
                                            <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-blue-500"/>
                                        </DisclosureButton>
                                        <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
                                            <Gasto />
                                        </DisclosurePanel>
                                    </Disclosure>
                                </div>
                            </div>

                            <div class="flex flex-row-reverse">
                                <button type="button"  class="m-3 inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                                    Associar Gastos
                                </button>
                                <button type="button"  class="m-3 inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                                    Associar a Documento
                                </button>
                                <button type="button"  class="m-3 inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                                    Criar documento
                                </button>
                                <button type="button"  class="m-3 inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                                    Editar Conta
                                </button>
                                <button type="button"  class="m-3 inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                                    Deletar Conta
                                </button>
                                <button type="button" @click="Store.actionButtonSelected = !Store.actionButtonSelected" class="m-3 inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                                    Voltar
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
    import { useStore }  from '/src/stores/Store.js';
    const Store = useStore();
</script>

<script>
import service from '../data2';
import Gasto from '../gastos/Gasto.vue';
import AdicionarGasto from '../gastos/VisualizarGastos.vue';

import VisualizarDetailConta from './VisualizarDetailConta.vue';
import { Disclosure, DisclosureButton, DisclosurePanel, TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle,  } from '@headlessui/vue';
import { ChevronUpIcon } from '@heroicons/vue/20/solid';
import AgendarConta from '../agendar_conta/FormsAgendarConta.vue';

export default {
    components: {
    Gasto,
    AdicionarGasto,
    Dialog, DialogPanel, DialogTitle,
    VisualizarDetailConta,
  },
  data() {
        const employee = service.getEmployee();
        const positions = service.getPositions();
        return {
            agendarConta: false,
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