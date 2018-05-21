import HttpUtils from "../../utils/ajax";
export const FETCH_REQUIREMENT = 'FETCH_REQUIREMENT'
export const FETCH_REQUIREMENT_FAILURE = 'FETCH_REQUIREMENT_FAILURE'
export const FETCH_REQUIREMENT_SUCCESS = 'FETCH_REQUIREMENT_SUCCESS'


function fetchReq(params) {
  return { type: FETCH_REQUIREMENT, params };
}

function fetchReqFailure(error) {
  return { type: FETCH_REQUIREMENT_FAILURE, error };
}

function fetchReqSuccess(data) {
  return { type: FETCH_REQUIREMENT_SUCCESS, data };
}

const getTableList = "/getTablelist";

//获取需求列表
export function fetchRequirement(data) {
  return dispath => {
    dispath(fetchReq(data));
    return HttpUtils( getTableList, data )
      .then(json => {
        dispath(fetchReqSuccess(json))
      })
      .catch(error => dispath(fetchReqFailure(error)));
  };
}
