import React from "react";
import "./Week.css";

class Week extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            week: ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],
            day: new Date().getDay()
        }
    }

    componentDidMount() {
        this.interval = setInterval(this.updateWeek.bind(this), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    updateWeek() {
        this.setState({
            day: new Date().getDay()
        });
    }

    render() {
        return (
            <div className="week-container">
                {this.state.week.map((week, index) => <span key={week} className={index === this.state.day && "active"}>{week}</span>)}
            </div>
        )
    }
}

export default Week;