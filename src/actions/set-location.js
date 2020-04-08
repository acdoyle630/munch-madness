export const SET_LOCATION = 'SET_LOCATION'

export const setLocation = (location) => {
    console.log(location)
 return  {  location,
    type: SET_LOCATION}
}
