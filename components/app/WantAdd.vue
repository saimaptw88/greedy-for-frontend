<template>
  <div>
    <v-btn
      v-if="!show"
      @click="showInput"
      class="white--text"
      depressed
      color="#2de9ed"
    >
      +新規目標
    </v-btn>
    <div v-else>
      <div>
        <v-textarea
          label="your goal"
          auto-grow
          outlined
          rows="1"
          row-height="15"
          v-model="wantName"
        ></v-textarea>
      </div>
      <div>
        <v-btn @click="addWant">追加</v-btn>
        <v-btn @click="closeInput">削除</v-btn>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      wantName: '',
    }
  },
  props: ['category_id'],
  methods: {
    showInput() {
      this.show = true
    },
    closeInput() {
      this.show = false
      this.wantName = ''
    },
    addWant() {
      if (this.wantName !== '') {
        this.$emit('wantAdded', this.wantName, this.category_id)
        this.show = false
        this.wantName = ''
      }
    },
  },
}
</script>
<style lang="scss">
.add-btn {
  color: #36dbde;
}
</style>
