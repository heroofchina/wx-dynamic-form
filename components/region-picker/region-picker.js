// components/region-picker/region-picker.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    addGlobalClass: true,
  },
  properties: {
    label: {
      type: String,
      value: '',
    },
    formid: {
      type: String,
      value: '',
    },
    forminfo: {
      type: Object,
      value: {}
    }
  },
  behaviors: ['wx://component-export'],
  /**
   * 组件的初始数据
   */
  data: {
    input_text: '',
  },
  //组件最终对外导出的数据
  export() {
    return {
      input_text: this.data.input_text,
      force: this.properties.forminfo.force,
      role: this.properties.forminfo.role }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    bindPickerChange: function (e) {
      console.log(e);
      this.setData({   //给变量赋值
        input_text: e.detail.value
      })
    }
  }
})
