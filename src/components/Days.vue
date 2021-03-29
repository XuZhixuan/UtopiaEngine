<template>
  <div>
    <b-card>
      <b-card-body>
        还有{{ days }}天
        <b-progress
          :value="days"
          :max="max"
          animated
          :variant="state"
        ></b-progress>
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
    increment(i=1) {
      this.days += i > this.max ? this.days = this.max : null
      this.submit()
    },
    decrement(i=1) {
      this.days -= i < 0 ? this.days = 0 : null
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
