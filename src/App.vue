<template>
  <div id="app">
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
    </b-container>
  </div>
</template>

<script>
import Days from '@/components/Days'
import Life from '@/components/Life'

export default {
  name: 'App',
  components: {
    Days,
    Life
  },
  methods: {
    loop () {
      let refs = this.$refs
      refs.days.decrement()
    }
  }
}
</script>
