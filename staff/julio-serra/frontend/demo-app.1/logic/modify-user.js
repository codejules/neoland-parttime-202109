function modifyUser(token, data, callback) {
    validateToken(token)
    validateData(data)
    validateCallback(callback)

    var xhr = new XMLHttpRequest

    xhr.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.addEventListener('load', function () {
        if (this.status === 400 || this.status === 401 || this.status === 409) {
            var res = JSON.parse(this.responseText)

            var error = res.error

            callback(new Error(error))
        } else if (this.status === 204) {
            callback(null)
        }
    })

    xhr.setRequestHeader('Authorization', 'Bearer ' + token)
    xhr.setRequestHeader('Content-type', 'application/json')

    var json = JSON.stringify(data)

    xhr.send(json)
}