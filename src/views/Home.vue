<template>
  <div class="home"></div>
  <ul id="homeZoneList">
    <li v-for="(zoneInfo, index) in allZoneInfo" :key="index">
      <Zonestatus :zoneInfo="zoneInfo" />
    </li>
  </ul>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Zonestatus from "@/components/zonestatus.vue";
import axios from "axios";

@Options({
  props: {},
  components: {
    Zonestatus
  }
})
export default class Home extends Vue {
  private allZoneInfo = [];
  getHomeInfo() {
    const http = axios.create({
      baseURL: process.env.VUE_APP_ROOT_API,
      headers: { "Content-Type": "application/json" }
    });
    http.get("/temperatures/home").then(response => {
      this.allZoneInfo = response.data;
    });
  }
  mounted() {
    this.getHomeInfo();
  }
}
</script>

<style>
#homeZoneList li {
  list-style-type: none;
}
</style>
