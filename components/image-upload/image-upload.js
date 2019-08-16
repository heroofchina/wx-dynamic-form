// components/image-upload/image-upload.js
import util from '../../utils/util.js';
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

  /**
   * 组件的初始数据
   */
  data: {
     wx_back_image:'',
     inputType:'upload',
     input_text:'', //获取到上传成功以后的输入地址
  },
  behaviors: ['wx://component-export'],
  export() {
    return { 
      input_text: this.data.input_text,
      force: this.properties.forminfo.force,
      role:this.properties.forminfo.role
      }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    uploadImage:function(){
       wx.chooseImage({
         count: 1,
         sizeType: ['original','compressed'],
         sourceType: ['album', 'camera'],
         success: (res)=>{
           console.log(res);
           const { tempFilePaths} =res;
           console.log('wx image path::::',tempFilePaths[0]);
           this.setData({
             wx_back_image: tempFilePaths[0]
           });
           util.wx_upload_image(tempFilePaths[0]).then((resp)=>{
               console.log(resp);
               this.setData({
                 inputType: 'uploaded',
                 input_text: resp,
               });
           });
         },
       })
    },
  }
})
