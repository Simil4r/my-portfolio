import React, { Component } from "react"
import * as Scroll from "react-scroll"
import Photo from './Photo';

let Element = Scroll.Element;

class About extends Component {
    render() {
        return (
            <Element name="about" className="abo d-flex justify-content-center align-items-start">
                <div className={"about d-flex col-9 flex-column"}>
                    <h1 className={"col-12"}>About</h1>
                    <div className={"d-flex col-12 flex-column flex-lg-row"}>
                        <div className="d-flex col-12 col-lg-8 flex-column">
                            My name is Michał Warchoł. Programming is my passion and I want to develop it.
                            Mainly I do front-end. I learned tools like React or Bootstrap to build user interfaces.
                            I am just a begginer and I am willing to master my skills as well as learn new ones.
                        <hr></hr>
                            School I have finished:
                                <ul>
                                <li>
                                    Upper-Secondary School:<br></br>
                                        Zespół Szkół Łączności im. "Obrońców Poczty Polskiej w Gdańsku" w Krakowie<br></br>
                                    <a href="http://tl.krakow.pl">http://tl.krakow.pl</a>
                                </li>
                            </ul>
                        </div>
                        <Photo />
                    </div>
                </div>
            </Element>
        );
    }
}

export default About;