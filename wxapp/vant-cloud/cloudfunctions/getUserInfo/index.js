// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'vn-l6uyl'
cloud.init()
const db = cloud.database({ env })

// 云函数入口函数
exports.main = async (event, context) => {
  const groupNum = await db.collection('user-group').where({
    userId: cloud.getWXContext().OPENID
  })
  .get()

  const storeUser = await db.collection('user').where({
    openId: cloud.getWXContext().OPENID
  })
  .get()

  return {
    groupNum: groupNum.data.length,
    stroreUser: storeUser.data[0]
  }
}