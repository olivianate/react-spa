import HttpUtils from "../../utils/ajax";
export const FETCH_REQUIREMENT = "FETCH_REQUIREMENT";
export const FETCH_REQUIREMENT_FAILURE = "FETCH_REQUIREMENT_FAILURE";
export const FETCH_REQUIREMENT_SUCCESS = "FETCH_REQUIREMENT_SUCCESS";
export const DELETE_REQUIREMENT = "DELETE_REQUIREMENT";
export const DELETE_REQUIREMENT_FAILURE = "FETCH_REQUIREMENT_FAILURE";
export const DELETE_REQUIREMENT_SUCCESS = "FETCH_REQUIREMENT_SUCCESS";
export const OPEN_MODAL = "OPEN_MODAL";
export const OPEN_EDIT_MODAL = "OPEN_EDIT_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

function fetchReq(params) {
  return { type: FETCH_REQUIREMENT, params };
}

function fetchReqFailure(error) {
  return { type: FETCH_REQUIREMENT_FAILURE, error };
}

function fetchReqSuccess(data) {
  return { type: FETCH_REQUIREMENT_SUCCESS, data };
}

export function openModal(payload) {
  return{ type:OPEN_MODAL, payload };
}

export function openEditModal(payload) {
  return { type:OPEN_EDIT_MODAL, payload};
}

export function closeModal(payload){
  return{ type:CLOSE_MODAL, payload };
};

function deleteReq(params) {
  return { type: DELETE_REQUIREMENT, params };
}
function deleteReqFailure(error) {
  return { type: DELETE_REQUIREMENT_FAILURE, error };
}

function deleteReqSuccess(data) {
  return { type: DELETE_REQUIREMENT_SUCCESS, data };
}

const getdata = "/getdata";
const deletedata= "/deletedata";

//获取需求列表
export function fetchRequirement(data) {
  return dispath => {
    dispath(fetchReq(data));
    return HttpUtils({ url:getdata, data })
      .then(json => {
        dispath(fetchReqSuccess(json));
      })
      .catch(error => dispath(fetchReqFailure(error)));
  };
}

//删除
export function deleteRequirement(data) {
  return dispath => {
    dispath(deleteReq(data));
    return HttpUtils({ url:deletedata, data })
      .then(json => {
        dispath(deleteReqSuccess(json));
      })
      .catch(error => dispath(deleteReqFailure(error)));
  };
}

