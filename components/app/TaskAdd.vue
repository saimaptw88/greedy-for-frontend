<template>
  <div>
    <v-btn v-if="!show" @click="showInput" depressed color="#808080"
      >+add goal</v-btn
    >
    <div v-else>
      <div>
        <v-textarea
          label="your goal"
          auto-grow
          outlined
          rows="1"
          row-height="15"
        ></v-textarea>
      </div>
      <div>
        <v-btn>add</v-btn>
        <v-btn @click="closeInput">delete</v-btn>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
    }
  },
  methods: {
    showInput() {
      this.show = true
    },
    closeInput() {
      this.show = false
    },
  },
}
</script>
