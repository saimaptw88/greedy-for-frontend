<template>
  <v-row>
    <v-card class="main-content">
      <v-card-title>私が達成したい目的</v-card-title>
      <v-card-text
        >達成したい目的を全て書き出してみましょう。<br />
        新しく目的を追加するときは＋追加から追加してみてください。<br />
        追加後はドラッグ＆ドロップで移動できます。</v-card-text
      >
      <v-card-title>目的設定ツール</v-card-title>
      <v-col class="category-container">
        <div class="category" id="category1">
          <p>やり遂げたい目的</p>
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
        <modal-for-tryal v-if="modalForTryal" @close-modal="closeModalForTryal">
          <v-card-title>やり遂げたい目的</v-card-title>
          <v-card-text
            >どうしても達成したいあなたが最も集中するべき目的です。</v-card-text
          >
          <v-text-field solo v-model="wantsCategory1[0].name"></v-text-field>
          <v-card-title>目的を達成したい理由</v-card-title>
          <v-card-text
            >この目的を達成した時のメリットや気持ちなどを書いてモチベーションを高めましょう。</v-card-text
          >
          <v-textarea solo label="目的を達成したい理由"></v-textarea>
          <v-btn color="primary" to="/users/signup">始める</v-btn>
          <v-btn @click="modalForTryal = false">閉じる</v-btn>
        </modal-for-tryal>
      </v-col>
      <v-btn
        bottom
        color="primary"
        width="60%"
        class="done-btn"
        @click="tryalMypage"
      >
        完了</v-btn
      >
    </v-card>
  </v-row>
</template>
<script>
import draggable from 'vuedraggable'
import Modal from '@/components/app/Modal'
import ModalForTryal from '@/components/app/ModalForTryal'
import want2Add from '@/components/app/want2Add'
export default {
  components: {
    draggable,
    Modal,
    ModalForTryal,
    want2Add,
  },
  data() {
    return {
      modal: false,
      modalForTryal: false,
      form: {
        id: '',
        category_id: '',
        name: '',
        reachability: '',
        priority: '',
      },
      wantsCategory1: [],
      wantsCategory2: [],
    }
  },
  methods: {
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
      console.log(want)
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
      this.modal = false
    },
    wantAdd(wantName, categoryId) {
      let num = 0
      const want = {
        id: '',
        category_id: '',
        name: '',
        reachability: '',
        priority: '',
      }

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

      console.log('test')
      want.name = wantName
      want.priority = num
      want.category_id = categoryId

      if (categoryId === 1) {
        this.wantsCategory1.push(want)
      } else {
        this.wantsCategory2.push(want)
      }
      this.form = ''
    },
    tryalMypage() {
      if (this.wantsCategory1.length !== 0) {
        this.modalForTryal = true
      } else {
        alert('やり遂げたいも目的を追加してください')
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
  text-align: center;
  .done-btn {
    margin: 10px auto;
  }
}
</style>
