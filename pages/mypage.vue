<template>
  <div>
    <v-card>
      <v-card>
        <v-card-title>熱望する目標</v-card-title>
        <v-text-field
          label="私がどうしても達成したい願望"
          single-line
          outlined
          v-model="want.name"
        ></v-text-field>
      </v-card>
      <v-card>
        <v-card-title>熱望を達成したい理由</v-card-title>
        <v-text-field
          label="この熱望を達成したいのはなぜ？（メリット、デメリット、期間など）"
          single-line
          outlined
          v-model="want.why"
        ></v-text-field>
      </v-card>
      <v-card class="everyday-task">
        <v-card-title>熱望を達成するための毎日のタスク</v-card-title>
        <v-text-field
          label="熱望を達成するために、毎日何をするのが良さそうですか?"
          single-line
          outlined
          v-model="want.every_day_task"
        ></v-text-field>
        <v-btn
          depressed
          class="updateBtn"
          id="updateBtn"
          bottom
          color="primary"
          @click="done"
          >更新</v-btn
        >
      </v-card>
    </v-card>
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
.everyday-task {
  text-align: center;
  margin: 10px;
  .updateBtn {
    margin-bottom: 20px;
    min-width: 200px;
  }
}
</style>
