<template>
  <div>
    <div class="add-btn" v-if="!show" @click="showInput">
      <span class="add-btn-text">＋追加</span>
    </div>
    <!-- <v-btn class="add-btn" v-if="!show" @click="showInput">追加</v-btn> -->
    <div class="add-btn" v-else>
      <div class="text">
        <v-textarea
          v-model="form"
          rows="2"
          solo
          class="text-field"
          label="新しい目標を入力してください"
        >
        </v-textarea>
      </div>
      <v-btn class="btn" color="primary" @click="addWant">追加</v-btn>
      <v-btn class="btn" color="gray" @click="closeInput">×</v-btn>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      form: '',
    }
  },
  props: ['categoryId'],
  methods: {
    showInput() {
      this.show = true
    },
    closeInput() {
      this.show = false
      this.form = ''
    },
    addWant() {
      if (this.form !== '') {
        this.$emit('wantAdded', this.form, this.categoryId)
        this.show = false
        this.form = ''
      } else {
        alert('追加する目標を入力してください')
      }
    },
  },
}
</script>
<style lang="scss">
.add-btn {
  max-width: 80%;
  height: 24px;
  margin: 0 auto;
  .text {
    margin-bottom: -25px;
  }
  .add-btn-text:hover {
    background-color: #aae2de;
    cursor: pointer;
  }
}
</style>
