<template>
  <div id="app">
    <b-container>
      <Days ref="days"></Days>
    </b-container>
  </div>
</template>

<script>
import Days from '@/components/Days'

export default {
  name: 'App',
  components: {
    Days
  },
  methods: {
    loop () {
      let refs = this.$refs
      refs.days.decrement()
    }
  }
}
</script>
