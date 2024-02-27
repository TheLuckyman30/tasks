import React from "react";
import "./App.css";
<<<<<<< HEAD
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div>
            <div className="App">
                <header className="App-header">
                    Hello World
                    <br /> Author: Brandon Nauta
                    <br /> Class: CISC275
                </header>
            </div>
            <h1 className="App-welcomeHeader"> Welcome to my Website! </h1>
            <div>
                <Container className="App-columns">
                    <Row>
                        <Col className="App-columnLeft">
                            <p style={{ fontSize: "30px" }}>
                                <b>Favorite Videogame Series:</b>
                            </p>
                            <img
                                src={require("./assets/images/Animal-Crossing-Logo.png")}
                                className="App-image"
                                alt="A picture of the Animal Crossing logo"
                            />
                            <p className="App-listHeader">
                                <b>Why is it my favorite?</b>
                            </p>
                            <ul className="App-list">
                                <li> It is very relaxing </li>
                                <li> I love the progression </li>
                                <li> And it is very fun </li>
                            </ul>
                            <div className="App-rectangles"></div>
                        </Col>
                        <Col className="App-columnRight">
                            <p style={{ fontSize: "30px" }}>
                                <b>Funny Button:</b>
                            </p>
                            <Button onClick={() => console.log("Hello World!")}>
                                Log Hello World
                            </Button>
                            <div className="App-rectangles"></div>
                        </Col>
                    </Row>
                </Container>
            </div>
=======
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
>>>>>>> upstream/task-state
        </div>
    );
}

export default App;
