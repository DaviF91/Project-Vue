<template>
  <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton class="inline-flex items-center justify-center rounded-md text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Abrir Menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center">
            <img class="block h-8 w-auto lg:hidden" src="/logo_sivi.png" alt="Your Company" />
            <img class="hidden h-8 w-auto lg:block" src="/logo_sivi.png" alt="Your Company" />
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <a v-for="item in navigation" :key="item.name" @click="teste" :class="[item.link == page ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium']" :aria-current="item.current ? 'page' : undefined"><RouterLink :to='item.link'>{{ item.name }}</RouterLink></a>
            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto">
          <!-- Importar NF-E -->
          <ImportNFE />
        
          <!-- Visualizar Notificações -->
          <Menu as="div" class="relative ml-3">
            <div>
              <MenuButton class="rounded-full bg-gray-800 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span class="sr-only">Visualizar Notificações</span>
                <BellIcon class="h-6 w-6" aria-hidden="true" />
              </MenuButton>
            </div>
            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
              <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <h3 class="text-center m-1 font-semibold from-inherit">Notificações </h3>
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Contas atrasada - </a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Contas atrasada - </a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Contas atrasada - </a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Contas atrasada - </a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Contas atrasada - </a>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>

          <!--  Menu Usuário -->
          <Menu as="div" class="relative ml-3">
            <div>
              <MenuButton class="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span class="sr-only">Abrir menu usuário</span>
                <img class="h-8 w-8 rounded-full" src="/empresaLocatario.jpg" alt="Empresa Locatario" />
              </MenuButton>
            </div>
            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
              <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Perfil</a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Sair</a>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>
    <!-- desktop -->
    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <nav>
          <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :class="getValue(item.link)"><RouterLink :to='item.link'>{{ item.name }}</RouterLink></DisclosureButton>
        </nav>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import ImportNFE from './ImportNFE.vue';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
</script>

<script>
export default {
  data(){
    return {
      navigation: [
        { name: 'Visão Geral', link: '/', current: false },
        { name: 'Contas á Pagar', link: '/ContasAPagar', current: false },
        { name: 'Formas de Pagamento', link: '/FormasDePagamento', current: false },
        { name: 'Documentos', link: '/Documentos', current: false },
        { name: 'Tipos de Documentos', link: '/GruposDeDespesas', current: false },
      ],
      page: ''
    }
  },
  mounted(){
    this.teste() 
  },
  watch:{
    page(){
      console.log('watch', this.page)
    }
  },
  methods: {
    teste() { 
       this.page = window.location.pathname
       console.log('funcao', this.page)
    },
  },
};
</script>