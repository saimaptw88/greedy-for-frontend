export default function ({app: {router}}, inject) {
  if(false){
    // inject empty gtag function for disabled mode
    inject('gtag', () => {})
    return
  }

  window.dataLayer = window.dataLayer || []
  function gtag () {
    dataLayer.push(arguments)
    if(true){
      console.debug('gtag tracking called with following arguments:', arguments)
    }
  }
  inject('gtag', gtag)
  gtag('js', new Date())
  gtag('config','G-TB2VLG02LP',)

  if(!false){
    router.afterEach((to) => {
      gtag('config', 'G-TB2VLG02LP', {'page_path': to.fullPath})
    })
  }

  // additional accounts
}
