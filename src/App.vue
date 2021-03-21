<template>
  <div id="app">
    <Days ref="days"></Days>
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
      let refs = this.refs
      refs.days.decrement()
    }
  }
}
</script>
