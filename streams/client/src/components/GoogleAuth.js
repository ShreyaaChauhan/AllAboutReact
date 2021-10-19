import React, { Component } from 'react'

export default class GoogleAuth extends Component {
    componentDidMount() {
        window.gapi.load('client:auth2', ()=>{
            window.gapi.client.init({
                clientId: '664406710757-3rqht2lniqfnvomn5lfm4khk44mgq762.apps.googleusercontent.com',
                scope:'email'
            })
        })
    }
    render() {
        return (
            <div>
                Google auth
            </div>
        )
    }
}
