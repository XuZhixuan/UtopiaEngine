export default {
  dice(time=1) {
    let results = []
    for (let i = 0; i < time; i++) {
      results.push(Math.ceil(Math.random() * 5 + 0.5))
    }
    return results
  }
}
