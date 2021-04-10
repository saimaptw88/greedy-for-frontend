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
            <draggable
              group="myGroup"
              @start="drag = true"
              @end="drag = false"
              :options="options"
            >
              <div
                class="category-wants"
                v-for="(want, index) in category.wants"
                :key="index"
                @click="openModal(category, want)"
              >
                {{ want.name }}
              </div>
            </draggable>
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
              </div>
            </v-overlay>
            <!-- モーダルウィンドウを終了 -->
          </v-col>
        </v-row>
        <!-- ページ更新ボタン -->
        <v-btn
          class="done_btn"
          width="200px"
          @click="wantsUpdate"
          bottom
          color="primary"
        >
          done
        </v-btn>
      </v-card>
    </v-card>
  </v-container>
</template>

<script>
import WantAdd from '@/components/app/WantAdd'
import draggable from 'vuedraggable'
export default {
  components: {
    WantAdd,
    draggable,
  },
  data() {
    return {
      // draggableの引数
      options: {
        animation: 200,
        myGroup: 'myGroup',
      },
      // storeの値を保存する
      wants: {
        id: '',
        category_id: '',
        name: '',
        priority: '',
        reachability: '',
        user: '',
      },
      modal: false,
      // カテゴリの種類
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
  computed: {
    // storeからwantを取得してdataに保存する
    stoWants() {
      const response = this.$store.state.wants.stoWants
      console.log(response)
      this.setWants()
      return response
    },
    // wantsをカテゴリーに分類する
    displayCategories() {
      this.setWants()
      return this.displayCategory()
    },
  },
  methods: {
    // wantを追加する
    wantAdd(wantName, categoryId) {
      console.log('test')
      this.$store.dispatch('wants/wantCreate', {
        name: wantName,
        categoryId,
      })
    },
    // モーダルウィンドウを開く
    openModal(category, want) {
      this.category = category
      Object.assign(this.form, want)
      this.modal = true
    },
    // モーダルウィンドウでwantを更新する
    wantUpdate() {
      let want = this.wants.find((want) => want.id === this.form.id)
      want = Object.assign(want, this.form)
      this.$store.dispatch('wants/wantUpdate', want)
      this.modal = false
    },
    // wantsをページ全体で更新
    async wantsUpdate() {
      await this.$store.dispatch('wants/wantsUpdate', this.wants)
    },
    // storeから得た値をdataに保存する
    setWants() {
      const wants = this.$store.getters['wants/wants']
      this.wants = wants
    },
    // wantsをカテゴリごとに分類する
    displayCategory() {
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
        return categories
      })
      return categories
    },
  },
  async created() {
    try {
      await this.$store.dispatch('wants/getWants')
    } catch (err) {
      const res = err.response
      console.log('created error :')
      console.log(res)
    }
    this.setWants()
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
