import React, {Component} from 'react';
import logo from '../logo.svg';

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
                  <a href = "#" className ="logo">
                      <img src = {logo} alt = "logo"/>
                  </a>
                    <nav className = "links" >
                        <ul>
                            <li>
                                <a href = "#" className = "menu__links">Лента</a>
                            </li>
                            <li>
                                <a href = "#" className = "menu__links">Профиль</a>
                            </li>
                        </ul>
                    </nav>
                </div>

            </header>
        )
    }
}