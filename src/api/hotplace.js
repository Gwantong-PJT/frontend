import { localAxios } from '@/util/http-commons'

const local = localAxios()

function listHotplace(param, success, fail) {
  local.get(`/hotplace/`, { params: param }).then(success).catch(fail)
}

function detailHotplace(hotplaceNo, success, fail) {
  local.get(`/hotplace/${hotplaceNo}`).then(success).catch(fail)
}

function registHotplace(hotplace, success, fail) {
  console.log('hotplacejs hotplace', hotplace)
  local.post(`/hotplace`, JSON.stringify(hotplace)).then(success).catch(fail)
}

function getModifyHotplace(hotplaceNo, success, fail) {
  local.get(`/hotplace/modify/${hotplaceNo}`).then(success).catch(fail)
}

function modifyHotplace(hotplace, success, fail) {
  local.put(`/hotplace`, JSON.stringify(hotplace)).then(success).catch(fail)
}

function deleteHotplace(hotplaceNo, success, fail) {
  local.delete(`/hotplace/${hotplaceNo}`).then(success).catch(fail)
}

export {
  listHotplace,
  detailHotplace,
  registHotplace,
  getModifyHotplace,
  modifyHotplace,
  deleteHotplace,
}
