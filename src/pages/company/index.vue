<template>
  <div>
    <h1>会社店舗別ランキング</h1>
    <nuxt-link to = '/'>TOP</nuxt-link>
    <thead>
      <tr>
        <th>順位</th>
        <th>会社名</th>
        <th>スコア</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="score,index in scores" :key="index">
        <th>{{index + 1}}</th>
        <td>{{ score.name}}</td>
        <td>{{ score.score}}</td>
      </tr>
    </tbody>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scores: []
    }
  },
  async mounted() {
    try {
      const snapshot = await this.$fire.firestore.collection("ranking-of-company").orderBy('score', 'desc').orderBy('created_at', 'asc')
      snapshot.onSnapshot(querySnapshot => {
        this.scores = querySnapshot.docs.map(d => d.data())
      })
    } catch (e) {
      console.log(e)
    }
  }
}
</script>
