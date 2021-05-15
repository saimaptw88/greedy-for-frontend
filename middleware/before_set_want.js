export default function ({ redirect, store }) {
  const wants = store.state.wants.stoWants
  let hasCategoryId1 = 0
  console.log(wants)
  wants.map((want) => {
    if (want.category_id === 1) {
      hasCategoryId1 += 1
    }
  })
  console.log(hasCategoryId1)
  if (wants.length === 0 || hasCategoryId1 === 0) {
    return redirect('/wants')
  }
}
