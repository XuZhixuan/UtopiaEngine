<template>
  <div>
    <b-card>
      <b-card-body>
        <b-progress
          :value="days"
          :max="max"
          animated
          :variant="state"
        ></b-progress>
        <b-card-text> 还有{{ days }}天 </b-card-text>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Days",
  data() {
    return {
      days: 100,
      max: 100,
    };
  },
  methods: {
    increment() {
      ++this.days > this.max ? this.days = this.max : {}
      this.submit()
    },
    decrement() {
      --this.days < 0 ? this.days = 0 : {}
      this.submit()
    },
    submit () {
      let vm = this
      vm.$store.commit('changeDays', {
        num: vm.days,
        status: vm.days > 0
      })
    }
  },
  computed: {
    state() {
      if (this.days >= 80) {
        return "success";
      } else if (this.days >= 60) {
        return "info";
      } else if (this.days >= 40) {
        return "warning";
      } else if (this.days >= 20) {
        return "danger";
      } else {
        return "dark";
      }
    },
  },
  mounted () {
    this.submit()
  }
};
</script>
