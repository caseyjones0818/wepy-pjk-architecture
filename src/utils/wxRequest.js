import wepy from 'wepy';
import util from './util';
import tip from './tip'

const wxRequestJsonBody = async(params = {}, url) => {
    // tip.loading();
    let data = params.query || {};

    let Authorization = wepy.getStorageSync('Authorization')
    let res = await wepy.request({
        url: url,
        method: params.method || 'GET',
        data: data,
        header: {'content-type': 'application/json','Authorization': Authorization},
        dataType: 'json',
    });
    // tip.loaded();
    return res;
};
const wxRequest = async(params = {}, url) => {
    // tip.loading();
    let data = params.query || {};

    let Authorization = wepy.getStorageSync('Authorization')
    let res = await wepy.request({
        url: url,
        method: params.method || 'GET',
        data: data,
        header: {'content-type': 'application/x-www-form-urlencoded','Authorization': Authorization},
    });
    // tip.loaded();
    return res;
};


module.exports = {
    wxRequestJsonBody,
    wxRequest
}
