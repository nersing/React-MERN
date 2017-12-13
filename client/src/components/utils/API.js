import axios from "axios";

const APIKey = '&api-key=075c1b8498dd428fb53a10832d7b360c'
const URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'

export default {

runQuery: (query, startYear, endYear) => {
    
    console.log('this is the full API URL we are making ', URL + '?' + 'q=' + query + '&begin_date=' + startYear + '&end_date=' + endYear + APIKey);
  

    'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=baseball&begin_date=19800603&end_date=19900603&api-key=075c1b8498dd428fb53a10832d7b360c'

    return axios.get(URL + '?' + 'q=' + query + '&begin_date=' + startYear + '&end_date=' + endYear + APIKey);
   

},

getSaved:() => {
    return axios.get('/api/saved')
    .then(res => {
        return res
    });
},

postSaved: (title, date, url) => {
    var newArticle = {title: title, data: date, url: url};
    return axios.post('/api/saved', newArticle)
    .then(res => {
        return res.data_id;
    })

},

delateSaved: (title, date, url) => {
    return axios.delete('/api/saved', {
        params: {
            'title': title,
            'date': date,
            'url': url,
        }
    }).then(res => {
        return res;
    })
}



}



