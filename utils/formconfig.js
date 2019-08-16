const formConfig = [
  {
    fieldId: '101', //对应动态表单层级
    fieldName: '基本信息',
    formInfo: [    //每个层级下面 具体表单元素
      {
        label: '名字',//标题
        type: 'text', //表单类型 text,upload,picker,time
        id: 'input-name-form',   //表单id
        placeholder: '输入您的姓名',//设置文本框默认提示
        data: [], //填充表单的数据 例如下拉框
        role: {
          type: 'notnull',
          value: '',//正则表达式
          msg: '名字不为空',
        },
        force: true,//是否必输入
      },
      {
        label: '身份证',//标题
        type: 'text', //表单类型 text,upload,picker,time
        id: 'input-id-form',   //表单id
        placeholder: '输入您的姓名',//设置文本框默认提示
        data: [], //填充表单的数据 例如下拉框
        role: {
          //验证规则正则表单式 
          //1.reg正则表达式 
          //2.notnull 非空验证 
          //3.null 不验证
          type: 'reg',
          msg:'身份证不合法',
          value: '/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}$/',//正则表达式
        },
        force: true,//是否必输入
      },
      {
        label: '性别',//标题
        type: 'picker', //表单类型 text,upload,picker,time
        id: 'input-sex-form',   //表单id
        placeholder: '输入您的姓名',//设置文本框默认提示
        data: [
          { id: 1, name: '男' },
          { id: 2, name: '女' },
        ], //填充表单的数据 例如下拉框
        role: {
          type: 'notnull',
          value: '',//正则表达式
          msg: '请选择性别',
        },
        force: true,//是否必输入
      }
    ]
  },
  {
    fieldId: '102',
    fieldName: '参赛信息',
    formInfo: [
      {
        label: '参赛编号',//标题
        type: 'text', //表单类型 text,upload,picker,time
        id: 'match-id-form',   //表单id
        placeholder: '输入您的姓名',//设置文本框默认提示
        data: [], //填充表单的数据 例如下拉框
        role: {
          type: 'reg',
          value: '',//正则表达式
        },
        force: false,//是否必输入
      },
      {
        label: '组别',//标题
        type: 'picker', //表单类型 text,upload,picker,time
        id: 'group-id-from',   //表单id
        placeholder: '输入您的姓名',//设置文本框默认提示
        data: [
          { id: 1, name: '第一组' },
          { id: 2, name: '第二组' },
          { id: 3, name: '第三组' },
        ], //填充表单的数据 例如下拉框
        role: {
          //验证规则正则表单式 
          //1.reg正则表达式 
          //2.notnull 非空验证 
          //3.null 不验证
          type: 'reg',
          value: '',//正则表达式
        },
        force: false,//是否必输入
      },
      {
        label: '参赛时间',//标题
        type: 'time', //表单类型 text,upload,picker,time
        id: 'join-time-form',   //表单id
        placeholder: '选择时间',//设置picker未选择默认提示
        data: [], //填充表单的数据 例如下拉框
        role: {
          type: 'reg',
          value: '',//正则表达式
        },
        force: false,//是否必输入
        timeType:'date',//当类型为time的时候 指定具体的时间控件类型  date是年月日选择器 还是周  time还是天的日期（时分） timeType
        endTime: '',//设置 表示有效日期范围的开始，字符串格式为"YYYY-MM-DD"
        starTime: ''//设置 表示有效日期范围的开始，字符串格式为"YYYY-MM-DD"
      },
      {
        label: '上传证书',//标题
        type: 'upload', //表单类型 text,upload,picker,time
        id: 'upload-zhn-form',   //表单id
        placeholder: '输入您的姓名',//设置文本框默认提示
        data: [], //填充表单的数据 例如下拉框
        role: {
          type: 'reg',
          value: '',//正则表达式
        },
        force: false,//是否必输入
      },
      {
        label: '所在区域',//标题
        type: 'region', //表单类型 text,upload,picker,time
        id: 'region-area-form',   //表单id
        placeholder: '当前选择',//设置文本框默认提示
        data: [], //填充表单的数据 例如下拉框
        role: {
          type: 'reg',
          value: '',//正则表达式
        },
        force: false,//是否必输入
      }
    ]
  },
]



export default formConfig;