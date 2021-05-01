<template>
  <div>
    <v-card>
      <v-card class="vision">
        <v-card-title>辛くても継続できることを見極める</v-card-title>
        <v-card-text>
          <p>このアプリは、目標設定が下手くそな僕のために開発しました。</p>
          <div>
            目標設定の時に、この資格があったら良さそうなど他人の期待に応えるための目標を設定してしまいますが、僕の場合こんなものは大抵続かず挫折します。
          </div>
          <p>
            それより、真に自分の熱望することを見つければ途中で挫折しようが、再度挑戦するようになります。
          </p>
          <div>
            僕は熱望することに集中している限り、辛くても継続できると確信しています。
          </div>
          <div>
            理由は、辛くても続けられるものが自分の熱望しているものだからです。
          </div>
          <p>
            例えばアプリ開発はすごく大変で一時間に1回は挫折しますが、あなたが開いているこのページも挫折を繰り返して実現したアプリの1ページです。
          </p>
          <p>
            僕は自分のことに集中するため、集中すべき目標を見つけるためにこのアプリを作りました。
          </p>
          <p>
            ※感想やアドバイス、問題点があったらご意見をいただけると幸いです。どうぞ宜しくお願いします。
          </p>
        </v-card-text>
      </v-card>
      <v-card class="usage">
        <v-card-title>USAGE</v-card-title>
        <v-card-text>
          <div>①まずログインしてください</div>
          <p>
            メールアドレスはなんでも大丈夫なはずです。例：tester0@sample.com
          </p>
          <div>
            ②次にサイドバー"goals"をクリックしてgoal設定をおこないます。
          </div>
          <p>
            ここでは自分の目標を書き出して、その目標が他人から期待されているかどうかで分類してください(ドラッグ＆ドロップ)
          </p>
          <p>
            ③goalの分類が終わったら"DONE"ボタンをクリックしてmypageへ遷移してください
          </p>
          <p>
            ④最後にmypageでgoalを達成したい理由、そのための毎日のタスクを登録してください
          </p>
          <v-btn color="primary" @click="login">Start Amaimon</v-btn>
        </v-card-text>
      </v-card>
    </v-card>
  </div>
</template>
<script>
export default {
  methods: {
    login() {
      window.location.href = '/users/login'
    },
  },
}
</script>
