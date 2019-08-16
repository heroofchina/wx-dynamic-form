// components/text-picker/text-picker.js
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
    input_text:'',
    hx_index:0,
  },
  //组件最终对外导出的数据
  export() {
    return {
      input_text: this.data.input_text,
      force: this.properties.forminfo.force,
      role: this.properties.forminfo.role }
  },
  ready:function(){
     let ops=this.properties.forminfo.data;
     this.setData({
        input_text:ops[0].name
     });
  },
  /**
   * 组件的方法列表
   */
  methods: {
    bindPickerChange:function(e){
      let lists=this.properties.forminfo.data;
      console.log(lists[e.detail.value].name)
      this.setData({   //给变量赋值
        hx_index: e.detail.value,
        input_text: lists[e.detail.value].name
      })
    }
  }
})
