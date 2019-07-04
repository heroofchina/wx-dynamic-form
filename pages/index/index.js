//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    //测试视频列表
    videoList: [
      {
        "typeid": 1,
        "videoimg": "../../images/p001.png",
        "videoname": "测试视频1",
        "videourl": "https://media.w3.org/2010/05/sintel/trailer.mp4"
      },
      {
        "typeid": 2,
        "videoimg": "../../images/p002.png",
        "videoname": "测试视频2",
        "videourl": "http://www.w3school.com.cn/example/html5/mov_bbb.mp4"
      },
     ],
    liveList:[
      {
        "typeid": 1,
        "videoimg": "../../images/p001.png",
        "videoname": "直播视频1", "videourl":'http://pili-media.live-test.v2gogo.com/recordings/z1.v2gogo-live-test.620b18566a5d4848b6d8ca789a1120c3/1534301729.flv'
      },
      {
        "typeid": 2,
        "videoimg": "../../images/p001.png",
        "videoname": "直播视频2", "videourl": 'http://pili-media.live-test.v2gogo.com/recordings/z1.v2gogo-live-test.620b18566a5d4848b6d8ca789a1120c3/1534301729.flv'
      }
    ],
    playerType:'live',
    fitType:'contain'
  },
  //修改视频属性 保证只有一个video被创建
  controlVideoPlayer: function (list, index) {
    if(list.length===0){
       return [];
    }else{
       list.forEach((item,i)=>{
         if (index === i){
           item.video_is_player=true;
         }else{
           item.video_is_player=false;
         }
       });
       return list;
    }
  },
  onLoad:function(){
    if(this.data.playerType==='video'){
      let videolist = this.controlVideoPlayer(this.data.videoList, 0);
      console.log(videolist)
      this.setData({
        videoList: videolist
      });
    }else{
      let _listlist = this.controlVideoPlayer(this.data.liveList, 0);
      this.setData({
        videoList: _listlist
      });
    }
    
  },
  //上滑事件
  swipeUpper:function(e){
    const { newindex}=e.detail;
    let videolist = this.controlVideoPlayer(this.data.videoList, newindex);
    this.setData({
      videoList: videolist
    });
  },
  //下滑事件
  swipeDown:function(e){
    const { newindex } = e.detail;
    let videolist = this.controlVideoPlayer(this.data.videoList, newindex);
    this.setData({
      videoList: videolist
    });
  },
  //下滑到最后一条数据
  swipeToEnd: function (e) {
     wx.showLoading({
       title: '加载中',
       duration:1000
     })
    const {newindex,playerType}=e.detail;
    console.log('playerType', playerType);
    var newdata = [{
      "typeid": 3,
      "videoimg": "../../images/p003.jpeg",
      "videoname": "测试视频3",
      "videourl": "http://www.w3school.com.cn/example/html5/mov_bbb.mp4"
    }]
    //live mode
    newdata = [{
      "typeid": 2,
      "videoimg": "../../images/p001.png",
      "videoname": "直播视频2", "videourl": 'http://pili-media.live-test.v2gogo.com/recordings/z1.v2gogo-live-test.620b18566a5d4848b6d8ca789a1120c3/1534301729.flv'
    }, {
        "typeid": 2,
        "videoimg": "../../images/p001.png",
        "videoname": "直播视频2", "videourl": 'http://pili-media.live-test.v2gogo.com/recordings/z1.v2gogo-live-test.620b18566a5d4848b6d8ca789a1120c3/1534301729.flv'
      }];

    let res = this.data.videoList;
    this.setData({
      videoList: this.controlVideoPlayer(res.concat(newdata), newindex),
    });
  },
  //点击左侧按钮
  menuTap:function(e){
    const { buttontype, buttonname, itemid}=e.detail;
    console.log(buttontype, buttonname, itemid);
    switch (buttontype){
        case "1":
        console.log(buttonname,'调用收藏接口');
        wx.showToast({
          title: '收藏',
          duration:1500
        })
        break;

        case "2":
        console.log(buttonname, '打开发消息弹框或者新页面');
        wx.showToast({
          title: '打开消息框',
          duration: 1500
        })
        break;

        case "3":
        console.log(buttonname,'调用微信分享');
        wx.showToast({
          title: this.data.playerType,
          duration: 1500
        })
        
        break;
    }
  },
  //上滑到第一条数据
  swipeToStart: function (e) {
    wx.showToast({
      title: '当前第一个视频',
      icon: 'none'
    })
     console.log(e);
  },
  
})
