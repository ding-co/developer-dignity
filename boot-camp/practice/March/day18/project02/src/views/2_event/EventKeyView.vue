<template>
  <input type="search" name="" id="" @keyup.enter="doSearch" />
  <button @click="doSearch">조회</button>
</template>

<script>
export default {
  data() {
    return {
      sampleData: ''
    }
  },
  methods: {
    doSearch() {
      console.log('doSearch 실행')
    },
    checkEnter() {
      if (event.keyCode === 13) {
        this.doSearch()
      }
    }
  }
}
</script>

<style></style>
