// pages/forms/forms.js

//导入组件ast数据结构 开发过程中有后端返回过来
import formConfig from '../../utils/formconfig.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    formList: formConfig
  },
  getInputValue:function(){
    // const v = this.selectComponent('#my-input');
    // console.log(v);
    // const ids=this.data.formIds;
    // for(var key in ids){
    //   console.log(ids[key], key, `#${key}`);
    //    console.log(this.selectComponent(`#${key}`));
    // }
    let result =[];
    formConfig.forEach((item,i)=>{
         result.push(item.formInfo)
    })
    //console.log(result);
    var forms=result.reduce((a,b)=>{
      return a.concat(b)
    })
    //console.log(forms);
    forms.forEach((items,i)=>{
      //console.log(items.id);
      const v = this.selectComponent('#' + items.id);
      console.log(items.id,':::',v);
    });
  }
})