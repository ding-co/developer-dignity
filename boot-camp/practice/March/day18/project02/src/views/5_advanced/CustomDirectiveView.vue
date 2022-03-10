<template>
  <div>
    <div><input type="text" name="" id="" v-focus /></div>
    <div><input type="text" name="" id="" v-number /></div>
    <div><input type="text" name="" id="" v-lowercase /></div>
    <div><input type="text" name="" id="" v-uppercase /></div>
    <div><input type="text" name="" id="" v-korean /></div>
  </div>
</template>
<script>
export default {
  components: {},
  directives: {
    // focus: {
    //   mounted(ele) {
    //     ele.focus()
    //   }
    // },
    // number: {
    //   mounted(ele) {
    //     ele.addEventListener('keydown', () => {
    //       // console.log(event.key, event.keyCode)
    //       if (
    //         !(
    //           (event.keyCode >= 48 && event.keyCode <= 57) ||
    //           event.keyCode === 8 ||
    //           event.keyCode === 37 ||
    //           event.keyCode === 39 ||
    //           event.keyCode === 46 ||
    //           event.keyCode === 13 ||
    //           event.keyCode === 9
    //         )
    //       ) {
    //         event.preventDefault()
    //       }
    //     })
    //     ele.addEventListener('keyup', () => {
    //       event.target.value = event.target.value.replace(/\D/g, '')
    //     })
    //   }
    // }
    // number: {
    //   mounted(ele) {
    //     ele.addEventListener('input', () => {
    //       console.log(event.target.value)
    //       event.target.value = event.target.value.replace(/[^0-9]/g, '')
    //     })
    //   }
    // },
    // lowercase: {
    //   mounted(ele) {
    //     ele.addEventListener('input', () => {
    //       console.log(event.target.value)
    //       event.target.value = event.target.value.replace(/[^a-z]/g, '')
    //     })
    //   }
    // },
    // uppercase: {
    //   mounted(ele) {
    //     ele.addEventListener('input', () => {
    //       console.log(event.target.value)
    //       event.target.value = event.target.value.replace(/[^A-Z]/g, '')
    //     })
    //   }
    // },
    // korean: {
    //   mounted(ele) {
    //     ele.addEventListener('input', () => {
    //       console.log(event.target.value)
    //       event.target.value = event.target.value.replace(
    //         /[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g,
    //         ''
    //       )
    //     })
    //   }
    // }
  },
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
