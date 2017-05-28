// @flow
import 'whatwg-fetch';

export default (names: string, baseUrl: string = '') =>
  fetch(`${baseUrl}response.json`, { method: 'GET' })
    .then(response => response.json())
    .catch(e => console.error(e)); // always catch promises
