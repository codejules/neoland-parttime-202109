function Search(props) {
    return <form onSubmit={event => {
        event.preventDefault()

        var query = event.target.query.value

        props.onQuery(query)

        // try {
        //     searchVehicles(query, (error, vehicles) => {
        //         if (error) return alert(error.message)
        //         this.setState({ vehicles })
        //     })
        // } catch (error) {
        //     alert(error.message)
        // }

    }}>
        <input type="text" name="query" placeholder="Encuentra tu coche" />
        <button>Search</button>
    </form>
}