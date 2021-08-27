// 11
// import './module'
// auto import
import {Excel} from '@/components/excel/Excel';
import {Header} from '@/components/header/Header';
import {Toolbar} from '@/components/toolbar/Toolbar';
import {Formula} from '@/components/formula/Formula';
import {Table} from '@/components/table/Table';
// 34
import './scss/index.scss'

// 118
const excel = new Excel('#app', {
  components: [
    // 124
    Header,
    Toolbar,
    Formula,
    Table
  ]
})
// console.log('Excel: ', excel)
excel.render()
// console.log('Index.js working')
