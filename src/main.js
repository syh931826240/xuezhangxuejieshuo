// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {
  Notification,Alert
} from 'element-ui';
import axios from "axios"
import store from "./store/store.js"
import { emoji } from './utils/emoji.js'
import {
  Button,
  Input,
  Tag,
  Col,
  Card,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Dialog,
  Form,
  FormItem,
  Select,
  Option,
  Radio,
  Tabs,
  TabPane,
  Table,
  TableColumn,
  Collapse,
  CollapseItem,
  Row,
  Tooltip,
  Popover
} from 'element-ui';
import $ from "jquery"
Vue.use(Tooltip);
Vue.use(Row);
Vue.use(Collapse);
Vue.use(CollapseItem)
Vue.use(Button);
Vue.use(Input)
Vue.use(Tag)
Vue.use(Col)
Vue.use(Card)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Dialog)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Select, Option)
Vue.use(Radio)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(axios)
Vue.use(Popover)
Vue.prototype.axios = axios
Vue.config.productionTip = false
Vue.prototype.$notify = Notification;
Vue.prototype.$alert = Alert;
Vue.prototype.emoji = emoji
/* eslint-disable no-new */
Vue.filter('NumFormat', function (value) {
  if (!value) return '0.00';

  /*原来用的是Number(value).toFixed(0)，这样取整时有问题，例如0.51取整之后为1，感谢Nils指正*/
  var intPart = Number(value) | 0; //获取整数部分
  var intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,'); //将整数部分逢三一断

  var floatPart = ".00"; //预定义小数部分
  var value2Array = value.split("."); //这个value必须是字符串才能使用这个过滤器别搞错了

  //=2表示数据有小数位
  if (value2Array.length == 2) {
    floatPart = value2Array[1].toString(); //拿到小数部分

    if (floatPart.length == 1) { //补0,实际上用不着
      return intPartFormat + "." + floatPart + '0';
    } else {
      return intPartFormat + "." + floatPart;
    }

  } else {
    return intPartFormat + floatPart;
  }

})

new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
