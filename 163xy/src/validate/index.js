/*
功能：使用表单验证插件
*/
 
import Vue from 'vue'
import VeeValidata from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'

Vue.use(VeeValidata)

// 指定本地提示信息

VeeValidata.Validator.localize('zh_CN', {
  messages: zh_CN.messages,
  attributes: {
    phone: '手机号',
    code: '验证码',
    name: '用户名',
    pwd: '密码',
    captcha: '验证码',
    email: '邮箱'
  }
})

// 自定义验证规则

VeeValidata.Validator.extend('mobile', {
  messages: {
    zh_CN: filed => filed + '必须是11位手机号码' 
  },
  validate: value => {
    return /^1\d(10)$/.test(value)
  }
})