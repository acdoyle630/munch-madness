import { get } from 'axios'
import keys from '../private/keys.json'


export const zipSearch = (zipCode) => {
    console.log(keys)
    const url = `https://api.zip-codes.com/ZipCodesAPI.svc/1.0/GetZipCodeDetails/${zipCode}?key=${keys.zip2}`
    return get(url).then((res) => {
        return res.data
    })
}