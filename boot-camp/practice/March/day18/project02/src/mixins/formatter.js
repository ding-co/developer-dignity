export default {
  methods: {
    // 날짜 formatter
    // 한국 - 2022.03.15
    // 2022-03-15
    // 2022/03/15
    // 미국 - Mar 15, 2022
    // 유럽 - 15.03.2022
    $convertDateFormat(d, f) {
      let year = ''
      let month = ''
      let day = ''

      // d: '20220315' or new Date()
      if (typeof d === 'string') {
        year = d.substr(0, 4)
        month = d.substr(4, 2)
        day = d.substr(6, 2)
      } else if (typeof d === 'object') {
        year = d.getFullYear()
        month = (d.getMonth() + 1).toString().padStart(2, '0')
        day = d.getDate().toString().padStart(2, '0')
      }

      // f: 'YYYY.MM.DD'
      return f.replace('YYYY', year).replace('MM', month).replace('DD', day)
    },

    // 금액 formatter
    // 한국 - 3,500
    // 미국 - 3,500.00 or $3,500.00
    // 유럽 - 3.500,00

    // #,###
    // #,###.00
    // #,###.##
    // #.###,##

    $convertCurrencyFormat(n, f) {}
  }
}
