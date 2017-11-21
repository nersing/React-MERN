import axios from "axios";

const APIKey = '&api-key=075c1b8498dd428fb53a10832d7b360c'
const URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'

export default {

runQuery: (query, startYear, endYear) => {
  
    return axios.get(URL + '?' + query + APIKey )

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
        return res._id;
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



