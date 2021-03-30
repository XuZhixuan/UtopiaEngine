<template>
  <b-container>
    <div class="status">
      <b-row>
        <b-col>
          <Days ref="days"></Days>
        </b-col>
        <b-col cols="2">
          <Life></Life>
        </b-col>
      </b-row>
    </div>
    <div class="core">
      <b-card no-body>
        <b-tabs>
          <b-tab active title="冒险"></b-tab>
          <b-tab title="背包">
            <Inventory></Inventory>
          </b-tab>
          <b-tab title="日历"></b-tab>
        </b-tabs>
      </b-card>
    </div>
  </b-container>
</template>

<script>
import Days from "@/components/Days";
import Life from "@/components/Life";

import Inventory from '@/components/Inventory'

export default {
  name: "App",
  components: {
    Days,
    Life,
    Inventory
  },
  methods: {
    loop() {
      let refs = this.$refs;
      refs.days.decrement();
    },
  },
};
</script>

<style>
.core {
  margin-top: 10px;
}
</style>
