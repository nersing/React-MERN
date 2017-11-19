import axios from "axios";

const APIKey = '075c1b8498dd428fb53a10832d7b360c"'

export default {

runQuery: (topic, startYear, endYear) => {
  
    return axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json',  {
        params: {
            'api-key': APIKey,
            'q': topic,
            'begin_data': startYear,
            'end_date': endYear
        }
    }) 
    // .then(res => {
    //     return res.data.response;
    //     console.log(res)
    // })
},





}

