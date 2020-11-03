import { Button, Table, TableColumn, Pagination, Form, FormItem, Input, Dropdown, DropdownItem, DropdownMenu, Row, Col, RadioGroup, RadioButton, Radio, Divider, Upload, Steps, Step, Checkbox } from 'element-ui'

const ElementUI = {
  install: function(Vue) {
    Vue.use(Button)
    Vue.use(Table)
    Vue.use(TableColumn)
    Vue.use(Pagination)
    Vue.use(Form)
    Vue.use(FormItem)
    Vue.use(Input)
    Vue.use(Dropdown)
    Vue.use(DropdownItem)
    Vue.use(DropdownMenu)
    Vue.use(Row)
    Vue.use(Col)
    Vue.use(RadioGroup)
    Vue.use(RadioButton)
    Vue.use(Radio)
    Vue.use(Divider)
    Vue.use(Upload)
    Vue.use(Steps)
    Vue.use(Step)
    Vue.use(Checkbox)
  }
}

export default ElementUI
