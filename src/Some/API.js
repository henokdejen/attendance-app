import RequestInterface from './crudApiInterface'

/* 
 - mainURL value is hardcoded as an example as I amn't sure about what is the actual url you intended to acess
 - token: this is the authorization token. it should be set with a valid value taken from the login. may using state management 
 or window's localstorage
 - if you have additional api end points, you can add just the ways those exmaples are done.
 The benefit of organizing and keeping all endpoints in a single file is that it will be clean to use on other files or components
 and the other main benefit is that if we ever need to introduces changes to those endpoints, we just need to do the change on only this file.
 - if you ever need to access variables defined .env, you can import them here use them.
*/

function endpoints(){
    const mainURL = 'https://strive-school-testing-apis.herokuapp.com'
    const token = 'Basic dXNlcjI1OmdYN0hGNGhZYVl5SkF6cHQ'
    let commonConfig = {}
    commonConfig.headers = {
        'Authorization': token,
        'Content-Type': 'application/json'
    }
    const profile = {
        getMy: async () => {
            return RequestInterface.get(mainURL + '/api/profile/me', commonConfig)
        },
        getAll: () => {},
        getByUserName: () => { },
        create: () => { },
        uploadProfilePic: () => { },
        update: () => { },
        delete: () => { }
    };
    const experiences = {
        getMy: () => { }, // this is for the user experience call
        getSpecific: () => { },
        update: () => { },
        delete: () => { }
    }
    const posts = {
        getAll: () => { },
        getSpecific: () => { },
        create: () => { },
        update: () => { },
        delete: () => { }
    }

    return {profile, experiences, posts}
}

export default endpoints()