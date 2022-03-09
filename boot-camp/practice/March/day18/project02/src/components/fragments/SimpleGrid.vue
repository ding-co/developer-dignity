<template>
  <div>
    <button class="btn btn-primary" v-if="enableExcelDownload" @click="doExcel">
      엑셀 다운로드
    </button>
    <div class="container">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th v-if="selectType === 'radio' || selectType === 'checkbox'"></th>
            <th :key="th.key" v-for="th in headers">{{ th.title }}</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="i" v-for="(item, i) in items">
            <td v-if="selectType === 'radio'">
              <input
                type="radio"
                name=""
                id=""
                :value="item[checkedKey]"
                v-model="checkedItem"
                @change="doSelect"
              />
            </td>
            <td v-else-if="selectType === 'checkbox'">
              <input
                type="checkbox"
                name=""
                id=""
                :value="item[checkedKey]"
                v-model="checkedItems"
                @change="doSelect"
              />
            </td>
            <td :key="th.key" v-for="th in headers">{{ item[th.key] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    headers: {
      type: Array,
      default: function () {
        return []
      }
    },
    items: {
      type: Array,
      default: function () {
        return []
      }
    },
    selectType: {
      type: String,
      default: ''
    },
    checkedKey: {
      type: String,
      default: ''
    },
    changeEventName: {
      type: String,
      default: 'change-item'
    },
    enableExcelDownload: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      checkedItem: '',
      checkedItems: [],
      sampleData: 'A'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    doSelect() {
      if (this.selectType === 'radio') {
        this.$emit(this.changeEventName, this.checkedItem)
      } else if (this.selectType === 'checkbox') {
        this.$emit(this.changeEventName, this.checkedItems)
      }
    },
    doPrint() {
      console.log('doPrint 함수 호출')
      console.log(this.sampleData)
    },
    doExcel() {
      console.log('엑셀 다운로드')
    }
  }
}
</script>
