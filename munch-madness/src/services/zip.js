import { get } from 'axios'
import keys from '../private/keys.json'


export const zipSearch = (zipCode) => {
    const url = `https://cors-anywhere.herokuapp.com/https://www.zipcodeapi.com/rest/${keys.zip}/info.json/${zipCode}/degrees`
    return get(url).then((res) => {
        return res.data
    })
}