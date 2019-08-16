import React from 'react'

export default class subForm extends React.Component {
    state = {
        firstName: "",
        lastName: "",
    }
    render() {
        return (
            <form>
                <h3>
                    don't be a stranger!
                </h3>
                <p>
                    i'm all about new and old tech. get in touch with me and let’s talk about geeky stuff or building something together. <b>never any spam, ads, or affiliate links</b>. 
                </p>
                <label style={{
                    paddingRight: "10px",
                }}>
                    <b>name</b>
                    <input type="text" name="name" style={{
                        marginLeft: "10px",
                    }} />
                </label>
                <label style={{
                    paddingRight: "10px",
                }}>
                    <b>email</b>
                    <input type="text" name="email" style={{
                        marginLeft: "10px",
                    }} />
                </label>
                <button type="submit">submit</button>
            </form>
        )
    }
}