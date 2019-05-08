import Mock from 'mockjs'
import mainData from './mainData'
import category from './category.json';

Mock.mock('/main', {code: 0, data: mainData})

Mock.mock('/categorylist', {code: 0, data: category});