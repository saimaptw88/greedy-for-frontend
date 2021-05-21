<template>
  <div>
    <v-row class="main-card" justify="center">
      <v-card hover class="items">
        <v-card-title class="item-title">熱望する目標</v-card-title>
        <v-card-text>
          熱望する目標は、find my
          goalのページで設定したやり遂げたい目標で優先度が最も高いものです。<br />
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
        <v-card-title class="item-title">熱望を達成したい理由</v-card-title>
        <v-card-text>
          なぜこの目標を達成したいのか？達成した時の気持ちやメリットを書いて、モチベーションを高めましょう。
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
          熱望を達成するための毎日のタスク
        </v-card-title>
        <v-card-text>
          目標を達成するには毎日の積み重ねが大事です。毎日15分でできるタスクを設定しましょう。
        </v-card-text>
        <v-text-field
          label="熱望を達成するために、毎日何をするのが良さそうですか?"
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
