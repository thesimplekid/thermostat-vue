<template>
  <h1>{{ idk }}</h1>
  <h3>{{ tester }}</h3>
  <h1>{{ wtf }}</h1>
  <h3>{{ other }}</h3>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import axios from "axios";

@Options({
  props: {
    idk: String
  }
})
export default class Hi extends Vue {
  idk!: string;
  tester = process.env.VUE_APP_ROOT_API;
  private wtf = "";
  private other = "";
  private homeZoneInfo = {};
  http = axios.create({
    baseURL: process.env.VUE_APP_ROOT_API,
    headers: { "Content-Type": "application/json" }
  });

  getHello() {
    this.http.get("/temperatures").then(response => {
      this.wtf = response.data.hi;
    });
  }

  getHomeInfo() {
    this.http.get("/temperatures/home").then(response => {
      this.homeZoneInfo = response.data;
    });
  }

  mounted() {
    //this.getHello();
    this.getHomeInfo();
  }
}
</script>

<style scoped></style>
