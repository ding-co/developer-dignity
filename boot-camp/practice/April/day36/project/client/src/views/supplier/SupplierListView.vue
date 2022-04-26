<template>
  <div class="container">
    <!-- 조회조건 -->
    <div class="row row-cols-lg-auto g-3 align-items-center mb-1">
      <div class="col-12">
        <input
          type="search"
          class="form-control"
          v-model.trim="searchName"
          @keyup.enter="getList"
          placeholder="Name"
        />
      </div>
      <div class="col-12">
        <button class="btn btn-primary me-1" @click="getList">조회</button>
        <button class="btn btn-success me-1" @click="goToCreate">생성</button>
        <button class="btn btn-info me-1" @click="doExcel">엑셀다운로드</button>
      </div>
    </div>
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Email</th>
          <th>Contact Name</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr :key="item.supplier_id" v-for="item in list">
          <td>{{ item.supplier_id }}</td>
          <td>
            <a @click="goToDetail(item.supplier_id)" style="cursor: pointer">{{
              item.supplier_name
            }}</a>
          </td>
          <td>{{ item.phone }}</td>
          <td>{{ item.address }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.contact_name }}</td>
          <td>
            <button
              class="btn btn-danger me-1"
              @click="doDelete(item.supplier_id)"
            >
              삭제
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      headers: [
        { title: 'ID', key: 'supplier_id' },
        { title: 'Name', key: 'supplier_name' },
        { title: 'Business No', key: 'business_no' },
        { title: 'Representative Name', key: 'representative_name' },
        { title: 'Phone', key: 'phone' },
        { title: 'Email', key: 'email' },
        { title: 'Address', key: 'address' },
        { title: 'Contact Name', key: 'contact_name' },
        { title: 'Contact Phone', key: 'contact_phone' },
        { title: 'Contact Email', key: 'contact_email' }
      ],
      list: [],
      searchName: ''
    }
  },
  setup() {},
  created() {},
  async mounted() {
    this.list = await this.$get('/api/supplier/')
  },
  unmounted() {},
  methods: {
    async getList() {
      const loader = this.$loading.show({ canCancel: false })
      this.list = (
        await this.$post('/api/supplier/search', {
          param: `%${this.searchName.toLowerCase()}%`
        })
      ).data
      loader.hide()
    },
    goToDetail(id) {
      this.$router.push({
        path: '/supplier/detail',
        query: {
          supplier_id: id
        }
      })
    },
    goToCreate() {
      this.$router.push({
        path: '/supplier/create'
      })
    },
    doExcel() {
      this.$ExcelFromTable(this.headers, this.list, 'category', {})
    },
    doDelete(id) {
      this.$swal({
        title: '공급자를 정말 삭제 하시겠습니까?',
        text: '삭제된 데이터는 복원되지 않습니다.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: '취소',
        confirmButtonText: '삭제'
      }).then(async (result) => {
        if (result.isConfirmed) {
          const loader = this.$loading.show({ canCancel: false })
          const r = await this.$delete(`/api/supplier/${id}`)
          loader.hide()
          if (r.status === 200) {
            this.$swal('공급자가 삭제 되었습니다.')
            this.getList()
          } else if (r.status === 501) {
            this.$swal(`삭제하려는 공급자로 등록된 제품이 ${r.count}건 존재합니다.`)
          }
        }
      })
    }
  }
}
</script>
