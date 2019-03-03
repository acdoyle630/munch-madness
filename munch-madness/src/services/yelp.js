import { get } from 'axios'
import keys from '../private/keys.json'

export const search = ( payload ) => {
    const baseUrl = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?'
    return get(
        `${baseUrl}location=${payload.location}&term=${payload.term}&price=${payload.price}&open_now=${payload.open_now}&radius=${payload.radius}&attributes=${payload.attributes}`,
        {
            headers: {
                'Authorization': "bearer " + keys.yelp,
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
            }
        }
    ).then((response) => {
        const index = Math.floor(Math.random() * Math.floor(response.data.businesses.length))
        return response.data.businesses[index]
    })
}