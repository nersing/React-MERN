import axios from "axios";

const APIKey = '075c1b8498dd428fb53a10832d7b360c"'

export default {

runQuery: (term, startYear, endYear) => {
    return axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json',  {
        params: {
            'api-key': APIKey,
            'q': term,
            'begin_data': startYear,
            'end_date': endYear
        }
    }) 
    .then(res => {
        return res.data.response
    })
},

getSaved:() => {
    return axios.get('/api/saved')
    .then(res => {
        return res
    })
},

postSaved: (title, date, url) => {
    const newArticle = {title: title, data: date, url: url};
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
            'url': url
        }
    }).then(res => {
        return res;
    })
}



}

