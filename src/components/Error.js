import React, { Component } from 'react'
import styled from 'styled-components'

export default class Error extends Component {
    render() {
        return (
            <div className="banner">
                <Banner>
                    <div className="col-10 mx-auto text-center pt-5">
                        <h1 className="display-4">404</h1>
                        <h2 className="text-uppercase">
                        error</h2>
                        <section />
                        <h4 className="text-uppercase text-name">Page not found</h4>
                        <p className="text-name">The  requested URL " <em className="text-danger">{this.props.location.pathname}</em> " was not found. </p>
                    </div>
                </Banner>
            </div>
        )
    }
}

let Banner = styled.div`
    background: rgba(0, 0, 0, 0.4);
    color: var(--mainWhite);
    padding: 2rem 1rem;
	font-family: Hobo std;
    width: 80%;
    height: 60vh;
    margin: auto;
`
