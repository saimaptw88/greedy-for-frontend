// ログイン前はログインページにリダイレクト
export default function ({ redirect, store }) {
  const user = store.state.user.login
  if (user) {
    return redirect('/mypage')
  }
}
