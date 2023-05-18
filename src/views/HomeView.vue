<template>
  <div class="home">
    <h1>Utilizandop Pinia</h1>
    <h2>{{ counter.showCount }}</h2>
    <button @click="counter.Increment">Increment</button>
  </div>
</template>

<script lang="ts">
import { useCounterStore } from "@/stores/counterStores";
import { Options, Vue } from "vue-class-component";

@Options({})
export default class HomeView extends Vue {
  counter = useCounterStore();
}
</script>
