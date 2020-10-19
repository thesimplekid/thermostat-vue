<template>
  <div class="card">
    <div class="row">
      <h1>{{ zoneInfo.zone_name }}</h1>
      <h2>Zone Number: {{ zoneInfo.zone_number }}</h2>
    </div>
    <div class="row">
      <div class="column">
        <h1>Current Temp</h1>
        <h1>{{ zoneInfo.current_temp }}</h1>
      </div>
      <div class="column">
        <div class="row">
          <h1>Set Temp</h1>
        </div>
        <div class="row">
          <div class="column">
            <h1>{{ zoneInfo.set_temp }}</h1>
          </div>
          <div class="column">
            <button>Click me</button><br />
            <button>Click me too</button>
          </div>
        </div>

        <div class="row">
          <div class="column">
            <div class="column">
              <p>set low: {{ zoneInfo.low_set }}</p>
            </div>
            <div class="column">
              <button>Click me</button><br />
              <button>Click me too</button>
            </div>
          </div>

          <div class="column">
            <div class="column">
              <p>set high: {{ zoneInfo.high_set }}</p>
            </div>
            <div class="column">
              <button>Click me</button><br />
              <button>Click me too</button>
            </div>
          </div>
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
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.container {
  padding: 2px 16px;
}
</style>
