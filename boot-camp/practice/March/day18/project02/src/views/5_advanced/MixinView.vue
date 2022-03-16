<template>
  <div></div>
</template>
<script>
// import Axios from '@/mixins/axios'
import Formatter from '@/mixins/formatter'
export default {
  // mixins: [Axios],
  mixins: [Formatter],
  components: {},
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {},
  created() {},
  mounted() {
    console.log('컴포넌트에서 출력')
    // this.printA()
    this.getCustomers()
    console.log(this.$convertDateFormat('20220315', 'YYYY-MM-DD'))
    console.log(this.$convertNumberFormat(3500, '#,###'))
    console.log(this.$convertNumberFormat(235643500, '#,###'))
    console.log(this.$convertNumberFormat(5425.1, '#,###.##'))
    console.log(this.$convertNumberFormat(5425.1, '#,###.#0'))
    console.log(this.$convertNumberFormat(5425.1, '#.###,#0'))
    console.log(this.$convertNumberFormat(5425.1, '$#,###.#0'))
    console.log(this.$convertNumberFormat(-5425.1, '$#,###.#0'))
    console.log(this.$convertNumberFormat(125, '#,###.#0%'))
  },
  unmounted() {},
  methods: {
    async getCustomers() {
      const customers = await this.$get('http://localhost:3000/customers')
      console.log(customers)
    }
  }
}
</script>
