/**
 * @fileoverview 封装请求库 request 做一些容错
 * @author huangss
 */
const request = require('request');

/**
 * SafeRequest 更加安全的请求库
 * @class
 */
class SafeRequest{
    /**
     *  @constructor
     */
    constructor(){}

    /**
     *  请求方法
     * @param {Object} options
     * @example
     *  request({
     *      uri: uri,
     *      method: 'get',
     *      json: true
     * })
     */
    static request(options){
        return new Promise((resolve, reject) =>{
            let result = {
                code: -1,
                message: 'request向后端请求数据失败',
                data:[]
            }
            request(options, (error, res, body) => {
                if (error) {
                    result.message = error.message;
                    reject(result);
                }

                result.code = 1;
                result.message = 'ok';
                result.data = body;

                resolve(result);
            });
        });
    }
}

module.exports = SafeRequest;