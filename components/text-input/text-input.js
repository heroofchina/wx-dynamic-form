// components/my-form/my-input.js
Component({
  /**
   * 组件的初始数据
   */
  options:{
    addGlobalClass: true,
  },
  properties:{
     label:{
       type:String,
       value:'',
     },
     formid:{
       type: String,
       value: '',
     },
    forminfo:{
      type:Object,
      value:{}
    }
  },
  data: {
     input_text:'',
  },
  behaviors: ['wx://component-export'],
  //组件最终对外导出的数据
  export() {
    return { input_text:this.data.input_text}
  },
  /**
   * 组件的方法列表
   */
  ready:function(){
    console.log(this.properties.forminfo);
    
  },
  methods: {
    enterValue:function(e){
       console.log(e.detail.value);
       this.setData({
         input_text: e.detail.value
       });
    }
  }
})
