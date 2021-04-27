export default function setup({ store }) {
  // storeのリクエストに対して割り込みを実行する
  store.$axios.interceptors.request.use((config) => {
    let headers = {}
    // store.gettersから値を取得
    headers = store.getters['user/headers']
    if (headers != null) {
      // オブジェクトのプロパティを取り出し、要素ごとに処理を実行する
      Object.keys(headers).forEach(function (key) {
        // headersの要素をconfigに代入する
        const value = headers[key]
        config.headers[key] = value
      })
      return config
    }
    return config
  })
}

// export default function setup({ store }) {
//   store.$axios.interceptors.request.use((config) => {
//     const headers = store.getters['user/headers'] || {}
//     for (key in headers) {
//       const value = headers[key]
//       config.headers[key] = value
//     }
//     return config
//   })
// }
