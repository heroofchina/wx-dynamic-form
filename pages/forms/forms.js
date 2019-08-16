// pages/forms/forms.js

//导入组件ast数据结构 开发过程中有后端返回过来
import formConfig from '../../utils/formconfig.js';
import util from '../../utils/util.js';
console.log(util.vbind());
Page({

  /**
   * 页面的初始数据
   */
  data: {
    formList: formConfig
  },
  //对表单进行验证
  formValidate:function(item){
      if(item.force){
        console.log(item, item.force,item.label);
        //获取验证类型和验证方式
        let {type,value}=item.role;
        console.log('value',value);
         if (type==='reg'){
             value = util.vbind(value)
             console.log('value:::', value);
             return false;
             if(value.test(item.input_text)){
                return true;
             }else{
                let { msg } = item.role;
                if(!msg){
                  msg=item.label+'不合法';
                }
                console.log(msg);
                wx.showToast({
                  title: msg,
                  icon:'none'
                })
                return false;
             }
        }
        if (type === 'notnull'){
          if (item.input_text===''){
            let { msg } = item.role;
            if (!msg) {
              msg = item.label + '不为空';
            }
            wx.showToast({
              title: msg,
              icon: 'none'
            })
            return false;
          }else{
             return true;
          }
        }
      }
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
    // //console.log(forms);
    // forms.forEach((items,i)=>{
    //   //console.log(items.id);
    //   const v = this.selectComponent('#' + items.id);
    //   //console.log(items.id,':::',v);
    //   if (!this.formValidate(v)){
           
    //   }
    // });
    for (var key in forms){
         var items=forms[key];
         var v = this.selectComponent('#' + items.id);
         if (!this.formValidate(v)) {
             break;
         }else{
            console.log('okk');
         }
    }
  }
})