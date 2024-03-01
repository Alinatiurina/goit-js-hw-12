import { input } from "../main";


export function getImages() {
const URL = 'https://pixabay.com/api/';
const KEY = '42513462-e11c37811c4211ba54194476f';
let QUERY = input;
const imageType = 'photo';
const orientation = 'horizontal';
const safesearch = 'true';
    
    let LINK = `${URL}?key=${KEY}&q=${QUERY}&image_type=${imageType}&orientation=${orientation}&safesearch=${safesearch}`;
    
    return fetch(LINK)
        .then(response => {
        if (!response.ok) {
            throw new Error(`Image error!`)
            }
        return response.json()
        }) 
        .catch(error => {
        alert('Incorrect request!')
    })
}
