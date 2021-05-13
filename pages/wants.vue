<template>
  <v-container>
    <v-card class="main-container">
      <v-card-title>WHAT DO YOU WANT TO BE OR ACHIVE? </v-card-title>
      <v-card-subtitle>RIGHT DOWN YOUR GOALS</v-card-subtitle>
      <v-card class="sab-conteiner">
        <v-card-title>YOUR GOALS</v-card-title>

        <v-row class="categories-container" justify="center">
          <!-- カテゴリを表示 -->

          <v-col
            class="categories"
            v-for="(category, index) in displayCategories"
            :key="index"
          >
            <div class="category-name">{{ category.name }}</div>
            <!-- wantを表示 -->
            <div
              class="category-wants"
              v-for="(want, index) in category.wants"
              :key="index"
              @dragstart="dragStart(want)"
              @dragover="dragOver(want)"
              @dragend="dragEnd(category)"
              draggable="true"
              @click="openModal(category, want)"
            >
              {{ want.name }}
            </div>
            <!-- want表示を終了 -->
            <!-- want追加/削除ボタンを表示 -->
            <want-add
              @wantAdded="wantAdd"
              :category_id="category.id"
            ></want-add>
            <!-- モーダルウィンドウの表示 -->
            <v-overlay v-show="modal">
              <div class="modal_base" v-show="modal">
                <div
                  class="modal_overlay"
                  v-show="modal"
                  @click="modal = false"
                ></div>
              </div>
              <div class="modal_content">
                <v-textarea
                  light
                  color="primary"
                  background-color="white"
                  auto-grow
                  outlined
                  rows="1"
                  row-height="3"
                  v-model="form.name"
                  ><p>{{ form.name }}</p></v-textarea
                >
                <!-- 更新ボタン -->
                <v-btn color="primary" @click="wantUpdate">update</v-btn>
                <!-- 削除ボタン -->
                <v-btn color="gray" @click="wantDelete">delete</v-btn>
              </div>
            </v-overlay>
            <!-- モーダルウィンドウを終了 -->
          </v-col>
        </v-row>
        <!-- ページ更新ボタン -->
        <v-btn
          class="done_btn"
          width="200px"
          bottom
          color="primary"
          @click="setGoal"
        >
          done
        </v-btn>
      </v-card>
    </v-card>
  </v-container>
</template>

<script>
import WantAdd from '@/components/app/WantAdd'
export default {
  components: {
    WantAdd,
  },
  middleware: ['before_auth'],
  data() {
    return {
      want: '',
      wants: [],
      modal: false,
      // カテゴリの種類
      categories: [
        {
          id: 1,
          name: 'your desire',
        },
        {
          id: 2,
          name: 'goals you have to do',
        },
      ],
      form: {
        id: '',
        category_id: '',
        name: '',
        reachability: '',
        priority: '',
        user: '',
      },
    }
  },
  async created() {
    await this.$store.dispatch('wants/getWants')
    this.setWants()
  },
  async beforeUpdate() {
    await this.wantsUpdate(this.wants)
  },
  mounted() {
    const parent = document.getElementsByClassName('categories')
    console.log(parent)
    for (let i = 0; i < 2; i++) {
      parent[i].setAttribute('id', i + 1)
    }
  },
  computed: {
    stoWants() {
      return this.$store.state.wants.stoWants
    },
    stoGoal() {
      return this.$store.state.goal.stoGoal
    },
    // wantsをカテゴリーに分類する
    displayCategories() {
      const categories = []
      let wants = ''
      const data = this.wants
      this.categories.map((category) => {
        wants = data.filter((want) => want.category_id === category.id)
        categories.push({
          id: category.id,
          name: category.name,
          wants,
        })
      })
      return categories
    },
  },
  methods: {
    dragStart(want) {
      this.want = want
    },
    dragOver(overWant) {
      if (overWant.id !== this.want.id) {
        let startIndex
        let endIndex
        this.wants.map((want, index) => {
          if (want.id === this.want.id) {
            startIndex = index
            want.priority = index
          }
        })
        this.wants.map((want, index) => {
          if (want.id === overWant.id) endIndex = index
        })
        this.wants.splice(startIndex, 1)
        this.want.category_id = overWant.category_id
        this.wants.splice(endIndex, 0, this.want)
        console.log('test')
      }
    },
    dragEnd(category) {
      const parent = document.getElementsByClassName('categories')
      // console.log(want, category)
      const want = this.want
      for (let i = 0; i < 2; i++) {
        if (
          parent[i].textContent.includes(`${category.name}\n+ADD GOAL`) ===
            false &&
          parent[i].childElementCount === 3
        ) {
          if (category.id === 1) {
            want.category_id = i + 1
          } else {
            want.category_id = i
          }
          this.wantReUpdate(want)
        }
      }
      console.log(parent[0].id)
    },

    // wantを追加する
    wantAdd(wantName, categoryId) {
      let num = 0
      const wants = []
      // this.wantsの中からcategoryIdが同一のwantを抽出
      this.wants.map((want) => {
        if (want.category_id === categoryId) {
          wants.push(want)
        }
      })
      // wantsの中のpriorityの最大値を抽出
      if (wants.length === 0) {
        num = 0
      } else {
        wants.map((want) => {
          if (want.priority >= num) {
            num = want.priority
          }
        })
        num += 1
      }
      this.$store.dispatch('wants/wantCreate', {
        name: wantName,
        categoryId,
        priority: num,
      })
      location.reload()
    },
    // wantを更新(モーダルウィンドウ)
    wantUpdate() {
      let want = this.wants.find((want) => want.id === this.form.id)
      want = Object.assign(want, this.form)
      this.modal = false
      this.$store.dispatch('wants/wantUpdate', want)
    },
    wantReUpdate(want) {
      this.$store.dispatch('wants/wantUpdate', want)
      location.reload()
    },
    // wantの削除(モーダルウィンドウ)
    wantDelete() {
      const want = this.wants.find((want) => want.id === this.form.id)
      this.$store.dispatch('wants/wantDelete', want.id)
      this.modal = false
      location.reload()
    },
    // モーダルウィンドウを開く
    openModal(category, want) {
      this.category = category
      Object.assign(this.form, want)
      this.modal = true
    },
    // storeから得た値をdataに保存する
    setWants() {
      let wants = this.stoWants
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
      wants = wants1.concat(wants2)
      this.wants = wants
    },
    async wantsUpdate(wants) {
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
      wants = wants1.concat(wants2)
      await this.$store.dispatch('wants/updates', wants)
    },
    async setGoal() {
      await this.$store.dispatch('goal/createGoal')
      window.location.href = '/mypage'
    },
  },
}
</script>

<style lang="scss">
.main-container {
  position: relative;
  .modal_base {
    display: flex;
    justify-content: center;
    padding: 0px;

    .modal_overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0.5;
    }
    .modal_content {
      margin-top: -10px;
    }
  }

  .sab-conteiner {
    text-align: center;
    margin: 10px;
    .done_btn {
      margin-bottom: 20px;
    }
    .categories-container {
      margin: 0 auto;
      .categories {
        text-align: left;
        float: left;
        margin: 2%;
        background-color: gray;
        min-width: 200px;
        min-height: 150px;
        .category-name {
          padding-left: 3%;
          margin-bottom: 5%;
        }
        .category-wants {
          margin: 2px;
          padding: 1px 5px;
          border: solid 1px white;
        }
        .add-btn {
          margin: 0 auto;
        }
      }
    }
  }
}
</style>
