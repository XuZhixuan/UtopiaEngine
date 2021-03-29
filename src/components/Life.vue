<template>
  <b-card>
    <font-awesome-icon class="life-icon" icon="heart" /> &nbsp;{{ lives }}
    |
    <font-awesome-icon class="hand-icon" icon="hand-paper" /> &nbsp;{{ hands }}
  </b-card>
</template>

<script>
export default {
  name: "Life",
  data() {
    return {
      lives: 6,
      hands: 0
    };
  },
};
</script>

<style>
.life-icon {
  color: #28a745;
}

.hand-icon {
  color: #6c757d;
}
</style>
