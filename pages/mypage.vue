<template>
  <div>
    <v-row class="main-card" justify="center">
      <v-card hover class="items">
        <v-card-title class="item-title">達成したい目的</v-card-title>
        <v-card-text>
          達成したい目的は、やり遂げたい目標で優先度が最も高いものです。<br />この目的を達成することが最も重要で、最大限集中して取り組みましょう。
        </v-card-text>
        <v-text-field
          label="私がどうしても達成したい願望"
          single-line
          outlined
          v-model="want.name"
          class="text-field"
        ></v-text-field>
      </v-card>
      <v-card hover class="items">
        <v-card-title class="item-title">目的を達成する理由</v-card-title>
        <v-card-text>
          なぜこの目標を達成したいのか？<br />プログラミング学習はエラーの連続でモチベーションを保つのが大変です。<br />ここで学習を続ける理由を書き出し、モチベーションが保てなくなった時に見返しましょう。
        </v-card-text>
        <v-textarea
          class="text-field"
          name="input-7-4"
          outlined
          label="私がどうしても達成したい願望"
          v-model="want.why"
        ></v-textarea>
      </v-card>
      <v-card hover class="items">
        <v-card-title class="item-title">
          目的達成のための毎日のタスク
        </v-card-title>
        <v-card-text>
          毎日簡単に達成できるタスクを設定しましょう。毎日15分でできるタスクを設定しましょう。
        </v-card-text>
        <v-text-field
          label="毎日15分続けるタスク"
          single-line
          outlined
          v-model="want.every_day_task"
          class="text-field"
        ></v-text-field>
      </v-card>
      <v-btn
        depressed
        class="updateBtn"
        id="updateBtn"
        bottom
        color="primary"
        @click="done"
        >更新</v-btn
      >
    </v-row>
  </div>
</template>

<script>
export default {
  middleware: ['before_auth', 'before_set_want'],
  data() {
    return {
      want: '',
      wants: [],
    }
  },
  computed: {
    stoWants() {
      return this.$store.state.wants.stoWants
    },
    stoWant() {
      return this.$store.state.wants.stoWant
    },
  },
  async created() {
    await this.getWants()
    await this.getWant()
    this.setWants()
    this.setWant()
  },
  beforeUpdate() {
    this.updateWant()
  },
  beforeDestroy() {
    this.updateWant()
  },
  methods: {
    async getWants() {
      await this.$store.dispatch('wants/getWants')
    },
    setWants() {
      this.wants = this.stoWants
    },
    async getWant() {
      let want = ''
      this.stoWants.map((i) => {
        if (i.category_id === 1 && i.priority === 0) {
          want = i
        }
      })
      await this.$store.dispatch('wants/getWant', want)
    },
    setWant() {
      this.want = this.stoWant
    },
    updateWant() {
      this.$store.dispatch('wants/wantUpdate', this.want)
    },
    async done() {
      await this.updateWant()
      location.reload()
    },
  },
}
</script>
<style lang="scss">
.main-card {
  width: 85%;
  margin: 100px auto 0;
  text-align: center;
  .items {
    margin-top: 10px;
    margin-bottom: 15px;
    .item-title {
    }
    .text-field {
      margin: 0 auto;
      width: 90%;
    }
  }
  .updateBtn {
    margin: 20px;
    width: 200px;
  }
}
</style>
