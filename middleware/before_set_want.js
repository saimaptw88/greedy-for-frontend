// ログイン前はログインページにリダイレクト
export default function ({ redirect, store }) {
  const wants = store.state.wants.stoWants
  if (wants.length === 0) {
    return redirect('/wants')
  }
}
