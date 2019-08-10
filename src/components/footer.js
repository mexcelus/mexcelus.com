import React from 'react'

export default class Footer extends React.Component {
    state = {
        firstName: "",
        lastName: "",
    }
    render() {
        return (
            <footer>
            <form>
                <label>
                    First name
                    <input type="text" name="firstName" />
                </label>
                <label>
                    Last name
                    <input type="text" name="lastName" />
                </label>
                <button type="submit">Submit</button>
            </form>
            </footer>
        )
    }
}