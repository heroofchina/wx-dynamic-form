const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const wx_upload_image=function(path){
    return new Promise((resolve,reject)=>{
      // wx.uploadFile({
      //   url: '',
      //   filePath: path,
      //   name: 'fileimage',
      //   success: (resp) => {
      //     console.log(resp);
      //     resolve();
      //   },
      //   fail:(err)=>{
      //      reject();
      //   }
      // })
      resolve('https://123.com/01.png');
    })
}

var vbind=function(fn){
  
}

module.exports = {
  formatTime: formatTime,
  wx_upload_image: wx_upload_image,
  vbind: vbind
}
