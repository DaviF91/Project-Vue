<template>
    <div>
        <button type="button" @click="openModal" class="rounded-full bg-gray-800 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <span class="sr-only">Importar NF-E </span>
            <DocumentTextIcon class="h-6 w-6" aria-hidden="true" />
        </button>
    </div>

    <TransitionRoot appear :show="isOpen" as="template">
        <Dialog as="div" @close="closeModal" class="relative z-10">
            <TransitionChild
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100"
                leave-to="opacity-0">
                <div class="fixed inset-0 bg-black bg-opacity-25" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex min-h-full items-center justify-center p-4 text-center">
                    <TransitionChild
                        as="template"
                        enter="duration-300 ease-out"
                        enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100"
                        leave="duration-200 ease-in"
                        leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <DialogPanel class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
                            Importar Nota Fiscal Eletrônica
                        </DialogTitle>
                            <div class="mt-2">
                                <p class="text-sm text-gray-500">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan libero neque, et consectetur quam aliquam vel. Morbi lacus eros, egestas ut lacus ut, tincidunt mollis nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In eget efficitur purus. Vivamus a aliquet justo. Mauris hendrerit tellus vulputate faucibus euismod. Quisque facilisis, sem sit amet condimentum euismod, nulla orci suscipit mauris, sed pretium lorem mi eu ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum at molestie turpis.
                                    Nam ut metus sed ex facilisis condimentum sit amet ac dui. Curabitur at orci facilisis, aliquam neque ut, consectetur eros. Cras sit amet leo vitae risus consequat congue. Nam posuere viverra velit, placerat euismod dolor porta a. Nam ullamcorper feugiat tellus. Integer sagittis ligula a massa consequat eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus purus quis lectus malesuada, convallis suscipit urna dapibus. In felis turpis, vestibulum et fringilla ac, varius in mauris. Maecenas ultrices consectetur finibus. Maecenas tortor augue, consectetur eget iaculis in, porttitor quis odio. Curabitur non eleifend lectus. Fusce efficitur eros vel ex auctor viverra. Donec a turpis vitae nunc bibendum viverra ut eu tortor.
                                </p>
                            </div>
                            <div class="mt-4">
                                <button type="button" @click="closeModal" class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                                Importar 
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
import { ref } from 'vue'
import { DocumentTextIcon } from '@heroicons/vue/24/outline'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'

const isOpen = ref(false)

function closeModal() {
  isOpen.value = false
}
function openModal() {
  isOpen.value = true
}
</script>

