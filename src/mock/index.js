/*
 * @Author: your name
 * @Date: 2020-04-15 11:15:39
 * @LastEditTime: 2020-06-09 14:13:28
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \project\src\mock\index.js
 */ 
import Mock from 'mockjs';
import examplesList from './examplesList'
import base from '@/api/base';

Mock.setup({
    timeout: '200-600'
});
Mock.mock('/list/examplesList', 'post', examplesList.listRes);

export default Mock;