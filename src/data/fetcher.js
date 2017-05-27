// @flow
import 'whatwg-fetch'

class Fetcher {
    baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    createProxies(names: string) {
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