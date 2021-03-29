<template>
  <v-card>
    <v-card-title>WHAT DO YOU WANT TO BE OR ACHIVE? </v-card-title>
    <v-card-subtitle>RIGHT DOWN YOUR GOALS</v-card-subtitle>
    <v-card class="main-conteiner">
      <v-card-title>YOUR GOALS</v-card-title>

      <v-row class="categories-container" justify="center">
        <v-col
          class="categories"
          v-for="(category, index) in displayCategories"
          :key="index"
        >
          <div class="category-name">{{ category.name }}</div>
          <div
            class="category-tasks"
            v-for="(task, index) in category.tasks"
            :key="index"
            draggable="true"
            @dragstart="dragTask(task)"
            @dragover="dragOverTask(task)"
          >
            {{ task.name }}
          </div>
          <task-add></task-add>
        </v-col>
      </v-row>
    </v-card>
    <v-btn max-width="30%" block color="primary"> DONE </v-btn>
  </v-card>
</template>

<script>
import TaskAdd from '@/components/app/TaskAdd'
export default {
  components: {
    TaskAdd,
  },
  data() {
    return {
      task: '',
      categories: [
        {
          id: 1,
          name: 'your desire',
          collapsed: false,
        },
        {
          id: 2,
          name: 'goals you have to do',
          collapsed: false,
        },
      ],
      tasks: [
        {
          id: 1,
          name: 'task1',
          start_data: '2021-3-28',
          end_data: '2021-3-28',
          incharge_user: 'saito',
          percentage: 100,
          category_id: 1,
        },
        {
          id: 2,
          name: 'task2',
          start_data: '2021-3-28',
          end_data: '2021-3-28',
          incharge_user: 'saito',
          percentage: 100,
          category_id: 1,
        },
        {
          id: 3,
          name: 'task3',
          start_data: '2021-3-28',
          end_data: '2021-3-28',
          incharge_user: 'saito',
          percentage: 100,
          category_id: 1,
        },
        {
          id: 4,
          name: 'task4',
          start_data: '2021-3-28',
          end_data: '2021-3-28',
          incharge_user: 'saito',
          percentage: 100,
          category_id: 1,
        },
        {
          id: 5,
          name: 'task5',
          start_data: '2021-3-28',
          end_data: '2021-3-28',
          incharge_user: 'saito',
          percentage: 100,
          category_id: 2,
        },
      ],
    }
  },
  computed: {
    // categories() {
    //   return this.$store.state.wants.categories
    // },
    // tasks() {
    //   return this.$store.state.wants.tasks
    // },
    displayCategories() {
      const categories = []
      let tasks = ''
      this.categories.map((category) => {
        tasks = this.tasks.filter((task) => task.category_id === category.id)
        categories.push({
          id: category.id,
          name: category.name,
          tasks,
        })
        return categories
      })
      return categories
    },
  },
  methods: {
    dragTask(task) {
      this.task = task
    },
    dragOverTask(overTask) {
      if (overTask.id !== this.task.id) {
        let deleteIndex
        let addIndex
        this.tasks.map((task, index) => {
          if (task.id === this.task.id) deleteIndex = index
          if (task.id === overTask.id) addIndex = index
          return 0
        })
        this.tasks.splice(deleteIndex, 1)
        this.task.category_id = overTask.category_id
        this.tasks.splice(addIndex, 0, this.task)
      }
    },
  },
}
</script>

<style lang="scss">
.main-conteiner {
  margin: 0 auto;
  .categories-container {
    margin: 0 auto;
    .categories {
      float: left;
      margin: 2%;
      background-color: gray;
      min-width: 200px;
      min-height: 150px;
      .category-name {
        margin-bottom: 5%;
      }
      .category-tasks {
        margin: 2px;
        padding: 1px 3px;
        border: solid 1px white;
      }
      .add-btn {
        margin: 0 auto;
      }
    }
  }
}
</style>
