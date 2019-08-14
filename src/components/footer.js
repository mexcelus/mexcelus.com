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
                <label style={{
                    paddingRight: "10px",
                }}>
                    <b>First name</b>
                    <input type="text" name="firstName" style={{
                        marginLeft: "10px",
                    }}/>
                </label>
                <label style={{
                    paddingRight: "10px",
                }}>
                    <b>Last name</b>
                    <input type="text" name="lastName" style={{
                        marginLeft: "10px",
                    }}/>
                </label>
                <button type="submit">Submit</button>
            </form>
            </footer>
        )
    }
}