<template>
    <TransitionRoot :show="Store.actionButtonSelected == 'Editar Conta'" as="template">
        <Dialog as="div" @close="Store.actionButtonSelected = !Store.actionButtonSelected" class="relative z-10">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0"> <div class="fixed inset-0 bg-black bg-opacity-30" /></TransitionChild>
            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex min-h-full items-center justify-center p-4 text-center"> 
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95" style="max-width: 79rem;" enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95">
                        <DialogPanel class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900 text-center"> Editar Conta </DialogTitle>
                            <div class="w-full m-2">
                                <div class="mx-auto w-full rounded-2xl bg-white p-2">
                                    <EditInfoConta />
                                    <EditDetailConta />
                                    <AgendarConta />
                                    <AdicionarGasto />
                                </div>
                            </div>

                            <div class="flex flex-row-reverse">
                                <button @click="alterar()" type="button"  class="m-3 inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                                    Salvar Conta
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
    import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue';
    import { useStore }  from '/src/stores/Store.js';
    const Store = useStore();
</script>

<script>
import EditInfoConta from './EditInfoConta.vue'
import EditDetailConta from './EditDetailConta.vue'
import AdicionarGasto from '../gastos/Gasto.vue';
import AgendarConta from '../agendar_conta/FormsAgendarConta.vue';

export default {
    components: {
        AdicionarGasto,
        AgendarConta,
        EditInfoConta,
        EditDetailConta,
    },
    
    data() {
        return {
            
           dataForm: [],
        }
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
       },
       alterar(){
            this.dataForm = {
                "Id": 7,
                "Valor": 123.0,
                "DataVencimento": "2023-08-30T12:17:39.985Z",
                "DataCompetencia": "2023-06-30T12:17:39.985Z",
                "DataAgendamento": "2023-09-30T12:17:39.985Z",
                "ContaCorrenteId": null,
                "CaixaId": 4,
                "EmpresaId": 5,
                "FornecedorId": 1,
                "Adiantamentos": null,
                "idDocumento": 1,
                "Tags": ["conta A"]
            }

            const apiUrl = `http://192.168.254.39:30023/api/teste/ContaAPagar/7`; 

            fetch(apiUrl, {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json',
                },
                
                body: JSON.stringify(this.dataForm),
            })
            .then((response) => response.json())
            .then((data) => {
            console.log('Dados atualizados com sucesso!', data.Dados);
        
            })
            .catch((error) => {
            console.error('Erro ao atualizar dados:', error);
            
            });  
        }
    },
}
</script>