import Mock from 'mockjs';
import FetchMock from 'fetch-mock';

FetchMock.mock('end:getTablelist', Mock.mock({
  "result": "success",
  "count": -1,
  "msg": "成功",
  "data": [{
    'name':'@string(10)',
    'age':'1111',
    'address':'12321323231232323132132'
  }]
}));
