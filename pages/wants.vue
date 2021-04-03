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
              draggable="true"
              @dragstart="dragWant(want)"
              @dragover="dragOverWant(want)"
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
                <v-btn color="primary" @click="wantUpdate">update</v-btn>
              </div>
            </v-overlay>
            <!-- モーダルウィンドウを終了 -->
          </v-col>
        </v-row>
        <v-btn class="done_btn" width="200px" bottom color="primary"
          >done</v-btn
        >
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
  data() {
    return {
      want: '',
      modal: false,
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
      wants: [
        {
          id: 1,
          name: 'want1',
          reachability: 100,
          priority: 1,
          user: 'saito',
          category_id: 1,
        },
        {
          id: 2,
          name: 'want2',
          reachability: 100,
          priority: 2,
          user: 'saito',
          category_id: 1,
        },
        {
          id: 3,
          name: 'want3',
          reachability: 100,
          priority: 3,
          user: 'saito',
          category_id: 1,
        },
        {
          id: 4,
          name: 'want4',
          reachability: 100,
          priority: 4,
          user: 'saito',
          category_id: 2,
        },
      ],
      form: {
        id: '',
        category_id: '',
        name: '',
        start_data: '',
        end_data: '',
        incharge_user: '',
        percentage: '',
      },
    }
  },
  computed: {
    // wantsをカテゴリーに分類する
    displayCategories() {
      const categories = []
      let wants = ''
      this.categories.map((category) => {
        wants = this.wants.filter((want) => want.category_id === category.id)
        categories.push({
          id: category.id,
          name: category.name,
          wants,
        })
        return categories
      })
      return categories
    },
    stoWants() {
      return this.$store.state.wants.stoWants
    },
  },
  methods: {
    // クリックしたタスクの状態を保存する
    dragWant(want) {
      this.want = want
    },
    // wantが交差した時にv-forで定義したindex( 並び順 )を交換する
    dragOverWant(overWant) {
      // wantが交差したか判断して、交差したなら実行
      if (overWant.id !== this.want.id) {
        // 持っているwantのindexを保存するための変数
        let deleteIndex
        // 交差したwantのindexを保存するための変数
        let addIndex
        // 持っているwant、交差したwantのindexを保存する
        this.wants.map((want, index) => {
          // 持っているwantのindexをdelteIndexに保存
          if (want.id === this.want.id) deleteIndex = index
          // 交差したwantのindexをaddIndexに保存
          if (want.id === overWant.id) addIndex = index
          return 0
        })
        // data/wantsからdeleteIndexに指示された要素を削除
        // 要素数が減り、残りの要素のindexがマイナス1される
        this.wants.splice(deleteIndex, 1)
        // wantがカテゴリを移動する際に、交差した別カテゴリwantのcategory_idを上書きする
        this.want.category_id = overWant.category_id
        // data/wantsにaddIndexで指示された要素にdata/wantを追加
        // 追加された要素以降の要素のindexが1足される
        this.wants.splice(addIndex, 0, this.want)
      }
    },
    // wantを追加する
    wantAdd(wantName, categoryId) {
      this.wants.push({
        id: Date.now(),
        category_id: categoryId,
        name: wantName,
      })
    },
    // モーダルウィンドウを開く
    openModal(category, task) {
      this.category = category
      Object.assign(this.form, task)
      this.modal = true
    },
    // ページ遷移時にwantsをストアから読み込む
    async getWants() {
      try {
        await this.$store.dispatch('wants/getWants')
      } catch (err) {
        const res = err.response
        console.log('get wants error :')
        console.log(res)
        alert('getWants error')
      }
    },
    // モーダルウィンドウでwantを更新する
    wantUpdate() {
      const task = this.tasks.find((task) => task.id === this.form.id)
      Object.assign(task, this.form)
      this.modal = false
    },
  },
  created() {
    this.getWants()
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
