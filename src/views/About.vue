<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Hi idk="dxfcgvhbjnkm" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Hi from "@/components/hi.vue";

@Options({
  components: {
    Hi
  }
})
export default class About extends Vue {}
</script>
