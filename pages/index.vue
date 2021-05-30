<template>
  <div class="bk">
    <v-card class="text">
      <div class="vision">
        <h2 class="vision-title">目的と優先順位を明確にする</h2>
        <v-card-text class="vision-text">
          <div><b>エンジニアとして転職すると決めた</b></div>
          <p>
            そのためにプログラミング学習を始めたが継続が難しい。何よりモチベーションが続かない。
            プログラミングはエンジニアになるためで、エンジニアになるのは自由な働き方を目指すためだが、
            それならブログでも良いのでは？
          </p>
          <div>とりあえず今日はYoutubeでもみて明日からまた頑張ろう。</div>
          <p><b>僕の実体験です。</b></p>
          <div>
            プログラミング学習でモチベーションを維持するのは難しいです。
          </div>
          <div>
            みたことないエラーに出会い、解決したらまた別のエラーが出てきます。しかもプログラミングは強制されていないのでいつでもやめることができます。
          </div>
          <p>だからこと、</p>
          <div><b>なぜプログラミング学習をするのか？</b>という目的</div>
          <p>
            <b>プログラミングが自分にとってどのくらい優先度が高いのか？</b
            >という優先順位
          </p>
          <div>この2つに答えられることが重要だと思っています。</div>
          <p>
            紙に書き出しても良いですが、目的の書き換えや優先順位の並び替えが自由にできた方がとっつきやすいと思います。
          </p>
          <div>
            <b
              >目的と優先順位を簡単に明確にすることで、エンジニアを目指す人のモチベーション維持を手伝う。</b
            >これがこのアプリの存在意義です。
          </div>
        </v-card-text>
        <v-btn @click="login" class="start-btn white--text" color="#e196e6">
          トライアルページへ移動</v-btn
        >
      </div>
      <img src="/images/usageImg.png" class="midle-img" />
      <div class="usage">
        <h2>使い方</h2>
        <v-card-text class="usage-text">
          <p>①まずはログインをお願いします</p>
          <img src="login.png" class="midle-img" />
          <p>
            ②次に目標を書き出して優先順位をつけます。<br />終わったら完了ボタンをクリックしてください。
          </p>
          <img src="howToUseWantsVue.png" class="midle-img" />
          <p>③最後に遷移先でなぜこの目的を達成したいのかを書いてみてください</p>
          <img src="mypage.png" class="midle-img" />
        </v-card-text>
      </div>
      <v-btn
        class="start-btn white--text"
        bottom
        color="#e196e6"
        id="start-btn"
        @click="login"
        >トライアルページへ移動</v-btn
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
        window.location.href = '/trial'
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
      margin: 30px auto 0;
      width: 80%;
    }
    .usage {
      margin-top: 20px;
      .usage-text {
        margin: 10px;
        text-align: center;
      }
    }
    .white--text {
      margin: 20px;
      min-width: 200px;
    }
  }
}
</style>
