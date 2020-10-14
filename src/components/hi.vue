<template>
  <h1>{{ idk }}</h1>
  <h2>hello worlf</h2>
  <h3>{{ tester }}</h3>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    idk: String,
    tester: Number
  }
})
export default class Hi extends Vue {
  idk!: string;
  tester = 12;
}
</script>

<style scoped></style>
