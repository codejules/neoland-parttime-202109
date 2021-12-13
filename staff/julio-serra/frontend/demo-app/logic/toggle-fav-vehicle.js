function toggleFavVehicle(token, id, callback) {
    if (typeof token !== 'string') throw new TypeError('token is not string')
    if (!token.trim()) throw new Error('token is empty or blank')
    if (token.split('.').length !== 3) throw new Error('invalid token')

    if (typeof id !== 'string') throw new TypeError('id is not string')
    if (!id.trim()) throw new Error('id is empty or blank')

    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    const xhr = new XMLHttpRequest

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.addEventListener('load', function() {
        if (this.status === 401) {
            const res = JSON.parse(this.responseText)
            const error = res.error

            callback(new Error(error))
        } else if (this.status === 200) {
            const user = JSON.parse(this.responseText)

            const favs = user.favs || []

            const index = favs.indexOf(id)

            if (index < 0)
                favs.push(id)

            else
                favs.splice(index, 1)

            const xhr = new XMLHttpRequest

            xhr.open ('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')

            xhr.addEventListener('load', function() {
                if (this.status === 400 || this.status === 401 || this.status === 409) {
                    const res = JSON.parse(this.responseText)

                    const error = res.error

                    callback(new Error(error))

                } else if (this.status === 204) {
                    callback(null)
                }
            })

            xhr.setRequestHeader('Authorization', 'Bearer ' + token)
            xhr.setRequestHeader('Content-type', 'aplication/json')

            const data = { favs: favs }

            const json = JSON.stringify(data)

            xhr.send(json)

        }
    })

    xhr.setRequestHeader('Authorization', 'Bearer ' + token)

    xhr.send()


}