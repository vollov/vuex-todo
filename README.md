# todo

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

## vue auto rebuild
- config/index.js dev:poll: true,

## load scss
- npm install sass-loader node-sass style-loader --save-dev

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

  <Table stripe ref="selection" :columns="columns1" :data="todos" @on-select-all="handleSelectAll()" @on-select="handleSelect"></Table>

  handleSelectAll(selection) {
    console.log('all selected status=>%j', selection)
    //this.$refs.selection.selectAll(status);
  },
data() {
  return {
    columns1: [{
        type: 'selection',
        width: 60,
        align: 'center'
      },

      {
        title: 'Title',
        key: 'title'
      },
      {
        title: 'Created',
        key: 'created'
      }
    ],
    data1: [{
        id: 1,
        name: 'John Brown',
        age: 18,
        address: 'New York No. 1 Lake Park',
        date: '2016-10-03'
      },
      {
        id: 2,
        name: 'Jim Green',
        age: 24,
        address: 'London No. 1 Lake Park',
        date: '2016-10-01'
      },
      {
        id: 3,
        name: 'Joe Black',
        age: 30,
        address: 'Sydney No. 1 Lake Park',
        date: '2016-10-02'
      },
      {
        id: 4,
        name: 'Jon Snow',
        age: 26,
        address: 'Ottawa No. 2 Lake Park',
        date: '2016-10-04'
      }
    ]
  }
},
