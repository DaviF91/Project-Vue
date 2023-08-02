<template>
     <div class="w-full px-2 py-2 sm:px-0">
      <TabGroup>
        <TabList class="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          <Tab v-for="(tableCategories, index) in tableCategories" as="template" :key="index" v-slot="{ selected }">
            <button @click="() => {tableCategoriesSelected = tableCategories}" :class="['w-full rounded-lg py-0.5 text-sm font-medium leading-5 text-blue-900',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-500 focus:outline-none focus:ring-2',
              selected ? 'bg-white shadow' : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',]"> 
              Exibir {{ tableCategories }}
            </button>
          </Tab>
        </TabList>
      </TabGroup>
    </div>
    <ContasAPagarGrid v-if="tableCategoriesSelected == 'Contas á Pagar'" />
    <ContasPagasGrid v-else />
</template>

<script>
import { TabGroup, TabList, Tab } from '@headlessui/vue';
import ContasAPagarGrid from './ContasAPagarGrid.vue';
import ContasPagasGrid from './ContasPagasGrid.vue';

export default {
    components:{
        TabGroup, TabList, Tab,
        ContasAPagarGrid,
        ContasPagasGrid,
    },
    
    data(){
        return {
            tableCategories: ['Contas á Pagar', 'Contas Pagas'],
            tableCategoriesSelected: 'Contas á Pagar',
        }
    }
}
</script>