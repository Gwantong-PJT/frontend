import { localAxios } from '@/util/http-commons'

const local = localAxios()

function listArticle(param, success, fail) {
  local.get(`/hotplace/`, { params: param }).then(success).catch(fail)
}

function detailArticle(hotplaceNo, success, fail) {
  local
    .get(`/hotplace/${hotplaceNo}`, {
      headers: {
        Jwt: sessionStorage.getItem('refreshToken'),
        'User-Id': sessionStorage.getItem('userId'),
      },
    })
    .then(success)
    .catch(fail)
}

function registArticle(article, success, fail) {
  console.log('boardjs article', article)
  local.post(`/hotplace`, JSON.stringify(article)).then(success).catch(fail)
}

function getModifyArticle(hotplaceNo, success, fail) {
  local.get(`/hotplace/modify/${hotplaceNo}`).then(success).catch(fail)
}

function modifyArticle(article, success, fail) {
  local.put(`/hotplace`, JSON.stringify(article)).then(success).catch(fail)
}

function deleteArticle(hotplaceNo, success, fail) {
  local
    .delete(`/hotplace/${hotplaceNo}`, {
      headers: {
        Jwt: sessionStorage.getItem('refreshToken'),
        'User-Id': sessionStorage.getItem('userId'),
      },
    })
    .then(success)
    .catch(fail)
}

export { listArticle, detailArticle, registArticle, getModifyArticle, modifyArticle, deleteArticle }
