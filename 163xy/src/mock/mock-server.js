import Mock from 'mockjs'
import mainData from './mainData.js'

Mock.mock('/home', {code: 0, data: mainData})

