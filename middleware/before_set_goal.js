export default function ({ redirect, store }) {
  const goal = store.state.goal.stoGoal
  if (goal.length === 0) {
    return redirect('/wants')
  }
}
