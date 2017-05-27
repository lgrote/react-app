import 'whatwg-fetch'

class Fetcher {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    createProxies(names) {
        console.log(names)
        return fetch(this.baseUrl + '/response.json', {
            method: 'GET',
            // method: POST,
            // body: new FormData(names)
        }).then(function(response) {
            return response.json()
        })
    }
}
export default Fetcher;