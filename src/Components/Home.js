import React, { Component } from 'react'
import {Fade} from 'react-reveal'
export default class Home extends Component {
    render() {
        return (
            <div>

                
                <Fade left>
                <h1 className="home-title">Movies Info</h1>
                    <div className="box">
                        <h3>Search for any Movie
                            and get the details of it.
                        </h3>
                    </div>
                </Fade>
            </div>
        )
    }
}
