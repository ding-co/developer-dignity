<template>
  <div class="container">
    <div class="row row-cols-lg-auto g-3 align-items-center mb-1">
      <div class="col-12">
        <input
          class="form-control"
          type="search"
          placeholder="Name"
          v-model.trim="searchName"
          @keyup.enter="getCustomers"
        />
      </div>
      <!-- 조회  조건-->
      <div class="col-12">
        <button class="btn btn-primary me-1" @click="getCustomers">조회</button>
        <button class="btn btn-success me-1" @click="goToCreate">생성</button>
        <button class="btn btn-primary me-1" @click="doExcel">
          엑셀 다운로드
        </button>
      </div>
    </div>
    <div class="row">
      <div
        class="col-xl-3 col-lg-4 col-md-6 mb-2"
        :key="product.id"
        v-for="product in products"
      >
        <div class="card">
          <img
            v-if="product.img1"
            :src="`http://localhost:3000/static/images/${product.img1}`"
            alt="제품 사진"
            style="width: auto; height: 180px"
          />
          <img
            v-else
            src=""
            alt="제품 사진"
            style="width: auto; height: 180px"
          />
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#868e96"></rect>
          <div class="card-body">
            <h5 class="card-title">{{ product.product_name }}</h5>
            <p class="card-text">
              <i class="fas fa-building"></i>
              {{ $convertNumberFormat(product.original_price, '#,###') }}원 |
              {{ product.category_name }} || {{ product.supplier_name }}
            </p>

            <a class="btn btn-primary" @click="goToProduct(product.product_id)"
              >Detail</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      headers: [
        { title: 'Product No', key: 'product_no' },
        { title: 'Product Name', key: 'product_name' },
        { title: 'Category Name', key: 'category_name' },
        { title: 'Supplier Name', key: 'supplier_name' },
        { title: 'Original Price', key: 'original_price' },
        { title: 'Sales Price', key: 'sales_price' },
        { title: 'Stock', key: 'stock' }
      ],
      products: [],
      searchName: ''
    }
  },
  setup() {},
  created() {},
  async mounted() {
    this.products = await this.$get('/api/product')
  },
  unmounted() {},
  methods: {
    async getProducts() {
      const loader = this.$loading.show({ canCancel: false })
      this.products = await this.$get(
        `http://localhost:3000/products?name_like=${this.searchName}`
      )
      loader.hide()
    },
    goToProduct(id) {
      // query => URL에 노출되는 GET 방식
      // 북마크나 상품 상세 정보 볼 때는 GET 권장 (보안상 크게 위배 안되는 컨텐츠)
      this.$router.push({
        path: '/product/detail',
        query: { product_id: id, searchName: this.searchName }
      })

      // params => POST 방식
      // this.$router.push({ name: 'DetailView', params: { id } })
    },
    doExcel() {
      this.$ExcelFromTable(this.headers, this.products, 'products', {})
    },
    goToCreate() {
      this.$router.push({ path: '/product/create' })
    }
  }
}
</script>
