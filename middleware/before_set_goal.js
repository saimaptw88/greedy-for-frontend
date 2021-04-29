export default function ({ redirect, store }) {
  const goal = store.state.goal.stoGoal
  if (goal === null) {
    redirect('/wants')
  }
}
