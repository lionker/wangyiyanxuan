import Mock from 'mockjs'
import mainData from './mainData'

Mock.mock('/main', {code: 0, data: mainData})

