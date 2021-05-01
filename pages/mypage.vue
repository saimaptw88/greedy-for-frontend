<template>
  <div>
    <v-card>
      <v-card>
        <v-card-title>YOUR DESIRE</v-card-title>
        <v-text-field
          label="Vision I realy desire to achive"
          single-line
          outlined
          v-model="goal.name"
        ></v-text-field>
        <v-btn
          depressed
          class="updateBtn"
          color="primary"
          @click="updateGoal(this.goal)"
          >update vision</v-btn
        >
      </v-card>
      <v-card>
        <v-card-title>Why you achive the DESIRE?</v-card-title>
        <v-text-field
          label="Why you want to achive this vision?"
          single-line
          outlined
          v-model="goal.why"
        ></v-text-field>
        <v-btn
          depressed
          class="updateBtn"
          color="primary"
          @click="updateGoal(this.goal)"
          >update reson</v-btn
        >
      </v-card>
      <v-card>
        <v-card-title>Your everday task</v-card-title>
        <v-text-field
          label="What do you nead to do everyday to achive this vision?"
          single-line
          outlined
          v-model="goal.every_day_task"
        ></v-text-field>
        <v-btn
          depressed
          class="updateBtn"
          color="primary"
          @click="updateGoal(this.goal)"
          >update task</v-btn
        >
      </v-card>
    </v-card>
  </div>
</template>

<script>
export default {
  middleware: ['before_auth', 'before_set_goal'],
  data() {
    return {
      goal: {
        name: '',
        priority: '',
        category_id: '',
        why: '',
        reachability: '',
        every_day_task: '',
      },
    }
  },
  computed: {
    stoGoal() {
      return this.$store.state.goal.stoGoal
    },
  },
  async created() {
    await this.getGoal()
    this.setGoal()
  },
  async beforeupdated() {
    await this.updateGoal(this.goal)
    location.reload()
  },
  async updated() {
    await this.setGoal()
  },
  beforeDestroy() {
    this.updateGoal(this.goal)
  },
  methods: {
    async getGoal() {
      await this.$store.dispatch('goal/getGoal')
    },
    setGoal() {
      this.goal = this.stoGoal
    },
    async updateGoal(goal) {
      await this.$store.dispatch('goal/updateGoal', goal)
      location.reload()
    },
  },
}
</script>
