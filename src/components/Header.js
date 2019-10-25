import React, {Component} from 'react';
import logo from '../logo.svg';
import {Link} from "react-router-dom";

export default class Header extends Component {
    constructor() {
        super();

        this.state = {
          scroll: false
        };
        window.addEventListener('scroll', this.scrollD)
    }
    scrollD = () => {
        let previousScroll = 40;
       this.setState ({
         scroll:  document.body.scrollTop > previousScroll  || document.documentElement.scrollTop > previousScroll
       })
    };

    render() {
        return(

            <header onScroll={this.scrollD}
                     className={this.state.scroll ? "scroll_up" : "scroll_down" }
            >

                <div className = "container h-flex">
                  <Link to="/" className ="logo">
                      <img src = {logo} alt = "logo"/>
                  </Link>
                    <nav className = "links" >
                        <ul>
                            <li>
                                <Link to = "/" className = "menu__links">Лента</Link>
                            </li>
                            <li>
                                <Link to ="/profile/" className = "menu__links">Профиль</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

            </header>
        )
    }
}