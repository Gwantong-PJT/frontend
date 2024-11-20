import { localAxios } from '@/util/http-commons'

const local = localAxios()

function listArticle(param, success, fail) {
  local.get(`/notice/`, { params: param }).then(success).catch(fail)
}

function detailArticle(noticeNo, success, fail) {
  local.get(`/notice/${noticeNo}`).then(success).catch(fail)
}

function registArticle(article, success, fail) {
  console.log('boardjs article', article)
  local.post(`/notice`, JSON.stringify(article)).then(success).catch(fail)
}

function getModifyArticle(noticeNo, success, fail) {
  local.get(`/notice/modify/${noticeNo}`).then(success).catch(fail)
}

function modifyArticle(article, success, fail) {
  local.put(`/notice`, JSON.stringify(article)).then(success).catch(fail)
}

function deleteArticle(noticeNo, success, fail) {
  local.delete(`/notice/${noticeNo}`).then(success).catch(fail)
}

export { listArticle, detailArticle, registArticle, getModifyArticle, modifyArticle, deleteArticle }
