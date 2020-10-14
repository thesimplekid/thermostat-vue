<template>
  <h1>{{ idk }}</h1>
  <h3>{{ tester }}</h3>
  <h1>{{ wtf }}</h1>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import axios from "axios";
//import { getHello } from "@/api/apibase";

@Options({
  props: {
    idk: String
  }
})
export default class Hi extends Vue {
  idk!: string;
  tester = process.env.VUE_APP_ROOT_API;
  private wtf = null;
  http = axios.create({
    baseURL: process.env.VUE_APP_ROOT_API,
    headers: { "Content-Type": "application/json" }
  });

  getHello() {
    this.http.get("/").then(response => {
      this.wtf = response.data;
      console.log(response.data);
    });
  }

  mounted() {
    this.getHello();
    /*
    const wtf = getHello();
    wtf.then{
      console.log('hi')
    }
    */
  }
}
</script>

<style scoped></style>
