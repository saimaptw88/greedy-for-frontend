<template>
  <v-row>
    <v-card class="main-content">
      <v-card-title>私が達成したい目標</v-card-title>
      <v-card-text
        >達成したい目標を全て書き出してみましょう。<br />
        新しく目標を追加するときは＋新規目標から追加してみてください。<br />
        追加後はドラッグ＆ドロップで移動できます。</v-card-text
      >
      <v-card-title>目標設定ツール</v-card-title>
      <v-col class="category-container">
        <div class="category" id="category1">
          <p>やり遂げたい目標</p>
          <draggable group="task" :list="wantsCategory1">
            <div
              class="item"
              v-for="item in wantsCategory1"
              :key="item.no"
              @click="openModal(item)"
            >
              {{ item.name }}
            </div>
          </draggable>
          <Modal v-if="modal" @close-modal="closeModal">
            <v-textarea
              v-model="form.name"
              color="primary"
              auto-grow
              outlined
              rows="2"
              row-height="4"
              ><p>{{ form.name }}</p></v-textarea
            >
            <v-btn color="#48ebef" @click="wantUpdate">更新</v-btn>
            <v-btn color="#f1a0f7" @click="wantDelete">削除</v-btn>
          </Modal>
          <want2Add :categoryId="1" @wantAdded="wantAdd"></want2Add>
        </div>
      </v-col>
      <v-col class="category-container">
        <div class="category" id="category2">
          <p>なんとなくの目標</p>
          <draggable
            v-model="wantsCategory2"
            group="task"
            :list="wantsCategory2"
          >
            <div
              class="item"
              v-for="item in wantsCategory2"
              :key="item.no"
              @click="openModal(item)"
            >
              {{ item.name }}
            </div>
          </draggable>
          <Modal v-if="modal" @close-modal="closeModal">
            <v-textarea
              v-model="form.name"
              color="primary"
              auto-grow
              outlined
              rows="2"
              row-height="4"
              ><p>{{ form.name }}</p></v-textarea
            >
            <v-btn color="#48ebef" @click="wantUpdate">更新</v-btn>
            <v-btn color="#f1a0f7" @click="wantDelete">削除</v-btn>
          </Modal>
          <want2Add :categoryId="2" @wantAdded="wantAdd"></want2Add>
        </div>
      </v-col>
    </v-card>
  </v-row>
</template>
<script>
import draggable from 'vuedraggable'
import Modal from '@/components/app/Modal'
import want2Add from '@/components/app/want2Add'
export default {
  components: {
    draggable,
    Modal,
    want2Add,
  },
  data() {
    return {
      modal: false,
      form: {
        id: '',
        category_id: '',
        name: '',
        reachability: '',
        priority: '',
        user: '',
      },
      wantsCategory1: [],
      wantsCategory2: [],
    }
  },
  computed: {
    stoWants() {
      return this.$store.state.wants.stoWants
    },
  },
  async created() {
    await this.$store.dispatch('wants/getWants')
    this.setWants()
  },
  async beforeUpdate() {
    await this.wantsUpdate()
  },
  async beforeDestroy() {
    await this.wantsUpdate()
  },
  methods: {
    setWants() {
      const wants = this.stoWants
      const wants1 = []
      const wants2 = []
      wants.map((want) => {
        if (want.category_id === 1) {
          wants1.push(want)
        } else {
          wants2.push(want)
        }
      })
      wants1.map((want, index) => {
        want.priority = index
      })
      wants2.map((want, index) => {
        want.priority = index
      })
      this.wantsCategory1 = wants1
      this.wantsCategory2 = wants2
    },
    openModal(item) {
      this.form = item
      console.log(this.form)
      this.modal = true
    },
    closeModal() {
      this.modal = false
    },
    wantUpdate() {
      const wants1 = this.wantsCategory1
      const wants2 = this.wantsCategory2
      const wants = wants1.concat(wants2)

      let want = wants.find((want) => want.id === this.form.id)
      want = Object.assign(want, this.form)
      this.modal = false
      this.$store.dispatch('wants/wantUpdate', want)
    },
    wantDelete() {
      console.log('test')
      const wants = this.wantsCategory1.concat(this.wantsCategory2)
      const want = wants.find((want) => want.id === this.form.id)
      if (this.form.category_id === 1) {
        const result1 = this.wantsCategory1.splice(want.priority, 1)
        console.log(result1)
      } else {
        const result2 = this.wantsCategory2.splice(want.priority, 1)
        console.log(result2)
      }
      console.log('test')
      this.$store.dispatch('wants/wantDelete', want.id)
      this.modal = false
    },
    async wantsUpdate() {
      const wants1 = this.wantsCategory1
      const wants2 = this.wantsCategory2
      wants1.map((want, index) => {
        want.priority = index
        want.category_id = 1
      })
      wants2.map((want, index) => {
        want.priority = index
        want.category_id = 2
      })
      const wants = wants1.concat(wants2)
      await this.$store.dispatch('wants/wantsUpdate', wants)
    },
    wantAdd(wantName, categoryId) {
      let num = 0
      const want = this.form

      // 並び順を取得(priority)
      if (categoryId === 1) {
        if (this.wantsCategory1.length !== 0) {
          this.wantsCategory1.map((want) => {
            if (num < want.priority) {
              num = want.priority
            }
          })
          num += 1
        }
      } else if (categoryId === 2) {
        if (this.wantsCategory2.length !== 0) {
          this.wantsCategory2.map((want) => {
            if (num < want.priority) {
              num = want.priority
            }
          })
          num += 1
        }
      } else {
        console.log('error categoryId')
      }

      want.name = wantName
      want.priority = num
      want.category_id = categoryId

      this.$store.dispatch('wants/wantCreate', {
        name: wantName,
        categoryId,
        priority: num,
      })

      if (categoryId === 1) {
        this.wantsCategory1.push(want)
      } else {
        this.wantsCategory2.push(want)
      }
    },
  },
}
</script>
<style lang="scss">
.main-content {
  min-height: 500px;
  min-width: 85%;
  margin: 100px auto 0;
  .category-container {
    width: 50%;
    float: left;
    .category {
      background-color: #d6f2f0;
      text-align: center;
      min-height: 250px;
      .item {
        max-width: 80%;
        border: 1px solid #48ebef;
        margin: 3px auto;
        background-color: white;
        cursor: pointer;
      }
      .add-btn {
        margin-top: 10px;
      }
    }
  }
}
</style>
