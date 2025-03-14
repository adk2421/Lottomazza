import axios from 'axios';
import qs from 'qs';

const httpUtils = ({

    /**
     * 서버에 데이터를 전송하는 모듈
     * @param {*} mappingUrl -- URL
     * @param {*} reqType -- Request Type
     * @param {*} reqData -- Request Data
     * @returns response
     */
    httpMethod: async (mappingUrl, reqType, reqData) => {
        let resData = [];
        axios.defaults.baseURL = 'http://www.dhlottery.co.kr';
    
        await axios({
                method: reqType,
                url: mappingUrl + (
                    reqType === 'get'
                        ? '?' + qs.stringify(reqData)
                        : ''
                    ),
                responseType: 'json',
                data: reqData,
            })
            .then(function (response) {
                resData.data = response.data;
    
                if (resData.data)
                    resData.stts = true;
                else
                    resData.stts = false;
            })
            .catch(function(error) {
                console.log(error.code);
                resData = {
                    stts : false,
                    data : error.code
                };
            });
        
        return ( resData );
    }
})

export default httpUtils;