<template>
  <div class="row">
    <h1>{{ zoneInfo.zone_name }}</h1>
    <h2>{{ zoneInfo.zone_number }}</h2>
  </div>
  <div class="row">
    <div class="column">
      <h1>Current Temp</h1>
      <h1>{{ zoneInfo.current_temp }}</h1>
    </div>
    <div class="column">
      <div class="row">
        <h1>Set Temp</h1>
        <h1>{{ zoneInfo.set_temp }}</h1>
      </div>
      <div class="row">
        <div class="column">
          <p>set low: {{ zoneInfo.low_set }}</p>
        </div>
        <div class="column">
          <p>set high: {{ zoneInfo.high_set }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: { zoneInfo: JSON },
  components: {}
})
export default class Zonestatus extends Vue {}
</script>

<style>
.column {
  float: left;
  width: 50%;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>
