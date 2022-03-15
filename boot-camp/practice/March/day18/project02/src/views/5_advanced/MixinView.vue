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
