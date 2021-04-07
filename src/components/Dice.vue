<template>
  <div>
    <b-card
      border-variant="primary"
    >
      <table>
        <tr>
          <td><font-awesome-icon :class="class_name(candidate[0])" :icon="icon_name(candidate[0])" size="3x"></font-awesome-icon></td>
          <td><font-awesome-icon :class="class_name(candidate[1])" :icon="icon_name(candidate[1])" size="2x"></font-awesome-icon></td>
        </tr>
      </table>
      <hr>
      <table>
        <tr>
          <td @click="fill(0)"><font-awesome-icon :class="class_name(numbers[0])" :icon="icon_name(numbers[0])" size="2x"></font-awesome-icon></td>
          <td @click="fill(1)"><font-awesome-icon :class="class_name(numbers[1])" :icon="icon_name(numbers[1])" size="2x"></font-awesome-icon></td>
          <td @click="fill(2)"><font-awesome-icon :class="class_name(numbers[2])" :icon="icon_name(numbers[2])" size="2x"></font-awesome-icon></td>
        </tr>
        <tr>
          <td @click="fill(3)"><font-awesome-icon :class="class_name(numbers[3])" :icon="icon_name(numbers[3])" size="2x"></font-awesome-icon></td>
          <td @click="fill(4)"><font-awesome-icon :class="class_name(numbers[4])" :icon="icon_name(numbers[4])" size="2x"></font-awesome-icon></td>
          <td @click="fill(5)"><font-awesome-icon :class="class_name(numbers[5])" :icon="icon_name(numbers[5])" size="2x"></font-awesome-icon></td>
        </tr>
      </table>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'Dice',
  data () {
    return {
      numbers: [0, 0, 0, 0, 0, 0],
      candidate: [0 ,0]
    }
  },
  computed: {
    filled () {
      for (let i = 0; i < this.numbers.length; i++) {
        if (this.numbers[i] == 0) {
          return false
        }
      }
      return true
    }
  },
  watch: {
    candidate: {
      immediate: true,
      handler (val) {
        // 如果当前没有完全填充且候选号码已用尽，则继续投色子
        if (!this.filled && val[0] == 0) {
          this.random_candidates()
        }
      }
    },
    numbers () {
      // 如果当前已经完全填充
      if (this.filled) {
        let result = (this.numbers[3] - this.numbers[0]) * 100
        result += (this.numbers[4] - this.numbers[1]) * 10
        result += (this.numbers[5] - this.numbers[0])

        // 触发组件事件，回传数字
        this.$emit('filled', result)
      }
    }
  },
  methods: {
    icon_name (i) {
      let num_name = [
        'square',
        'dice-one',
        'dice-two',
        'dice-three',
        'dice-four',
        'dice-five',
        'dice-six'
      ]

      return num_name[i]
    },
    class_name (i) {
      return 'dice-' + i
    },
    random_candidates () {
      this.candidate = this.$utils.dice(2)
    },
    fill(i) {
      console.log('Click ' + i)
      // 使用 Array.splice(...) 方法，使组件可以监听数据变化，自动渲染
      this.numbers.splice(i, 1, this.candidate[0])
      this.candidate.splice(0, 1, this.candidate[1])
      this.candidate.splice(1, 1, 0)
    }
  }
}
</script>

<style lang="scss">
.dice-0 {
  color: #6c757d;
}
.dice-1 {
  color: #28a745;
}
.dice-2 {
  color: #20c997;
}
.dice-3 {
  color: #007bff;
}
.dice-4 {
  color: #ffc107;
}
.dice-5 {
  color: #dc3545;
}
.dice-6 {
  color: #6f42c1;
}
</style>
