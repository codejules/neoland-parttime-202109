function registerUser(name, username, password, callback) {

        validateName(name)
        validateUsername(username)
        validateUsername(password)
        validateCallback(callback)

    // registerUser('Julio', 'julio', '123', console.log)
    var xhr = new XMLHttpRequest

    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.addEventListener('load', function() {
        if (this.status === 409) {
            var res = JSON.parse(this.responseText)

            var error = res.error

            callback(new Error(error))
        } else if (this.status === 201) {
            callback(null)
        }
    })

    xhr.setRequestHeader('Content-type', 'application/json')

    // var json = '{"name": "' + name + '", "username": "' + username + '", "password": "' + password + '" }'

    var data = {}

    data.name = name
    data.username = username
    data.password = password

    var json = JSON.stringify(data)

    xhr.send(json)

}