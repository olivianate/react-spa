import Mock from 'mockjs';
import FetchMock from 'fetch-mock';
const Random = Mock.Random;


FetchMock.mock('end:getdata', Mock.mock({
  "result": "success",
  "count": -1,
  "msg": "成功",
  "data|1-50": [{
    'key|+1':1,
    'number|+1':1,
    'name':'@string(10)',
    'age':'1111',
    'address':Random.region(),
    'time':Random.date()
  }]
}));

FetchMock.mock('end:deletedata', Mock.mock({
  "result": "success",
  "count": -1,
  "msg": "成功",
  "data": ""
}));
