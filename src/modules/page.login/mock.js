import Mock, {Random} from 'mockjs';
import FetchMock from 'fetch-mock';

FetchMock.mock('end:login', Mock.mock({
  "result": "success",
  "count": -1,
  "msg": "登录成功",
  "data": {
    'session_key':'@string(10)',
    'jobcard':'1111',
    'username':'游客'
  }
}));

FetchMock.mock('end:loginIdentify', Mock.mock({
  "result": "success",
  "count": -1,
  "msg": "成功",
  "data": {
    'identifycode':'1234',
  }
}));