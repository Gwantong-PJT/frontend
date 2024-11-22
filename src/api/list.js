import { localAxios } from '@/util/http-commons'

const local = localAxios()

// 시도 리스트 가져오기
function listSido(success, fail) {
  local.get(`/list/sido`).then(success).catch(fail)
}

// 구군 리스트 가져오기
function listGugun(param, success, fail) {
  local.get(`/list/gugun`, { params: param }).then(success).catch(fail)
}

// 관광정보 리스트 가져오기
function listAttraction(param, success, fail) {
  local.get(`/list/attraction`, { params: param }).then(success).catch(fail)
}

// 나이 리스트 가져오기
function listAge(param, success, fail) {
  local.get(`/list/age`)
}

export { listSido, listGugun, listAttraction, listAge }
