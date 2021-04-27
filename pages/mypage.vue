<template>
  <div>
    <v-card>
      <v-card>
        <v-card-title>YOUR VISION</v-card-title>
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
        <v-card-title>why?</v-card-title>
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
        <v-card-title>my everday task</v-card-title>
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
  },
  updated() {
    this.setGoal()
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
    updateGoal(goal) {
      console.log('test')
      location.reload()
      this.$store.dispatch('goal/updateGoal', goal)
    },
  },
}
</script>
