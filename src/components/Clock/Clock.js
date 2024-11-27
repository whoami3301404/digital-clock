import React from "react";
import Week from "../Week/Week";
import "./Clock.css";

class Clock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hour: new Date().getHours().toString().padStart(2, "0"),
            minute: new Date().getMinutes().toString().padStart(2, "0")
        }
    }

    componentDidMount() {
        this.interval = setInterval(this.updateTime.bind(this), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    updateTime() {
        this.setState({
            hour: new Date().getHours().toString().padStart(2, "0"),
            minute: new Date().getMinutes().toString().padStart(2, "0")
        });
    }

    render() {
        return (
            <div className="time-container">
                <><Week /></>
                <div className="clock">
                    {this.state.hour}
                    <span className="separator">:</span>
                    {this.state.minute}
                </div>
            </div>
        )
    }
}

export default Clock;