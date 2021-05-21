<template>
  <div class="bk">
    <v-card class="text">
      <div class="vision">
        <h2 class="vision-title">目標を一つに絞る</h2>
        <v-card-text class="vision-text">
          このアプリは、目標設定が下手くそな僕のために開発しました。
          目標設定は簡単ですが、目標達成は難しいです。
          大抵やる気があっても最後までやり続けることができません。
          理由は設定した目標が自分の熱望するものではないからです。
          例えば、仕事のためのスキルアップを目標にしても僕はやる気が出ないので、挫折すると思います。
          それよりも、自分が熱望するものを発見し、目標に設定できれば最後までやり切れるはずだと考えました。
          そこで、<b>自分の熱望するものを見つける</b>というコンセプトでこのアプリを作成しました
          ※感想やアドバイス、問題点があったらご意見をいただけると幸いです。どうぞ宜しくお願いします。
        </v-card-text>
      </div>
      <img src="/images/usageImg.png" class="midle-img" />
      <div class="usage">
        <h2>使い方</h2>
        <v-card-text class="usage-text">
          ①まずログインしてください ②次にサイドバー"find my
          goal"をクリックして達成したい目標を書き出してください。
          ここでは自分の目標を書き出して、その目標が他人から期待されているかどうかで分類してください(ドラッグ＆ドロップ)
          優先度が高いものを上にドラッグ＆ドロップもしてください.
          ③goalの分類が終わったら"DONE"ボタンをクリックしてmypageへ遷移してください
          ④最後にmypageで目標を達成したい理由、そのための毎日のタスクを登録してください
        </v-card-text>
      </div>
      <v-btn
        class="white--text"
        bottom
        color="#00d8db"
        id="start-btn"
        @click="login"
        >Start</v-btn
      >
    </v-card>
  </div>
</template>
<script>
export default {
  computed: {
    stoLogin() {
      return this.$store.state.user.login
    },
  },
  methods: {
    login() {
      if (this.stoLogin) {
        window.location.href = '/wants'
      } else {
        window.location.href = '/users/login'
      }
    },
  },
}
</script>
<style lang="scss">
.bk {
  text-align: center;
  background-color: #d5f2f0;
  background-image: url('~@/static/images/topImg.jpg');
  background-size: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  .text {
    margin: 60% auto 0px;
    width: 85%;
    .vision {
      margin: 5px auto 10px;
      .vision-title {
        padding-top: 30px;
      }
    }
    .midle-img {
      width: 100%;
    }
    .usage {
      margin-top: 20px;
      .usage-text {
        margin: 10px;
      }
    }
    .white--text {
      margin: 20px;
      min-width: 200px;
    }
  }
}
</style>
