import profiles from '../Samples/profile.json'

export function getAuthProfile (token) {
    //TODO
}

export function getProfileById (id) {
    return profiles.find(profile => profile.userId === parseInt(id))
}