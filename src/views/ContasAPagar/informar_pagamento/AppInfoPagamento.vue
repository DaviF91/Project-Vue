<template>
    <TransitionRoot :show="Store.actionButtonSelected == 'Informar Pagamento'" as="template">
        <Dialog as="div" @close="Store.actionButtonSelected = !Store.actionButtonSelected" class="relative z-10">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0"> <div class="fixed inset-0 bg-black bg-opacity-30" /></TransitionChild>
            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex min-h-full items-center justify-center p-4 text-center"> 
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95" style="max-width: 79rem;" enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95">
                        <DialogPanel class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900 text-center"> Informar Pagamento </DialogTitle>
                            <FormsInfoPagamento />
                            <div class="flex flex-row-reverse">
                                <button type="button"  class="m-3 inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                                    Salvar
                                </button>
                                <button type="button" @click="Store.actionButtonSelected = !Store.actionButtonSelected" class="m-3 inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
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
    import { useStore }  from '/src/stores/Store.js';
    const Store = useStore();
</script>

<script>
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue';
import FormsInfoPagamento from './FormsInfoPagamento.vue'
</script>
