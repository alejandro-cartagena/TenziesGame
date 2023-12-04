import React from "react";

export default function Die(props) {

    const face = `die-${props.value}`
    let dieDotEl = null

    switch (face) {
        case "die-1":
            dieDotEl = (
                <div
                    onClick={props.holdDice}
                    className={`die ${face}`}
                    style={{ backgroundColor: props.isHeld && "#59E391" }}
                >
                    <span className="dot"> </span>
                </div>
            );
            break;
        case "die-2":
            dieDotEl = (
                <div
                    onClick={props.holdDice}
                    className={`die ${face}`}
                    style={{ backgroundColor: props.isHeld && "#59E391" }}
                >
                    <span className="dot"> </span>
                    <span className="dot"> </span>
                </div>
            );
            break;
        case "die-3":
            dieDotEl = (
                <div
                    onClick={props.holdDice}
                    className={`die ${face}`}
                    style={{ backgroundColor: props.isHeld && "#59E391" }}
                >
                    <span className="dot"> </span>
                    <span className="dot"> </span>
                    <span className="dot"> </span>
                </div>
            );
            break;
        case "die-4":
            dieDotEl = (
                <div
                    onClick={props.holdDice}
                    className={`die ${face}`}
                    style={{ backgroundColor: props.isHeld && "#59E391" }}
                >
                    <div className="column">
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                    <div className="column">
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
            );
            break;
        case "die-5":
            dieDotEl = (
                <div
                    onClick={props.holdDice}
                    className={`die ${face}`}
                    style={{ backgroundColor: props.isHeld && "#59E391" }}
                >
                    <div className="column">
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                    <div className="column">
                        <span className="dot"></span>
                    </div>
                    <div className="column">
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
            );
            break;
        case "die-6":
            dieDotEl = (
                <div
                    onClick={props.holdDice}
                    className={`die ${face}`}
                    style={{ backgroundColor: props.isHeld && "#59E391" }}
                >
                    <div className="column">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                    <div className="column">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
            );
            break;

        default:
            break;
    }


    return dieDotEl
}