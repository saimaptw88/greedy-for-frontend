<template>
  <div>
    <v-card>
      <v-card>
        <v-card-title>YOUR DESIRE</v-card-title>
        <v-text-field
          label="Vision I realy desire to achive"
          single-line
          outlined
          v-model="want.name"
        ></v-text-field>
      </v-card>
      <v-card>
        <v-card-title>Why you achive the DESIRE?</v-card-title>
        <v-text-field
          label="Why you want to achive this vision?"
          single-line
          outlined
          v-model="want.why"
        ></v-text-field>
      </v-card>
      <v-card class="everyday-task">
        <v-card-title>Your everday task</v-card-title>
        <v-text-field
          label="What do you nead to do everyday to achive this vision?"
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
          >update</v-btn
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
  }
}
</style>
