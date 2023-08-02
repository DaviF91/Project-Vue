<template>
    <div>
        <div v-show="OpenViewActions" v-for="(action, index) in Actions" :key="index">
            <button @click="() => {Store.actionButtonSelected = action}"> <i :class="Icons[index]"></i> {{ action }}</button>
        </div>
    </div>
    <button @click="() => {this.OpenViewActions = !this.OpenViewActions}" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Ações</button>
</template>

<script setup>
import { useStore }  from '/src/stores/Store.js';
const Store = useStore();
</script>

<script>
export default {
    props: ['Actions', 'Icons'],
    data() {
        return {
            OpenViewActions: false,
        }
    },
}
</script>
