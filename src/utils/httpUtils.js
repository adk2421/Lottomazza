import axios from 'axios';
import qs from 'qs';

// API 통신 유틸
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
        const REACT_APP_API_URL = process.env.REACT_APP_API_URL;
        axios.defaults.baseURL = REACT_APP_API_URL;
    
        await axios({
                method: reqType,
                url: mappingUrl + (
                    reqType !== '' && reqType === 'GET'
                        ? '?' + qs.stringify(reqData)
                        : ''
                    ),
                responseType: 'json',
                data: reqData,
            })
            .then(function (response) {
                console.log(response);
                console.log(response.data);
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