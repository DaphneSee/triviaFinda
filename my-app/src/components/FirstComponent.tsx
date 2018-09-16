import * as React from "react";

export default class FirstComponent extends React.Component<{}> {

        public render() {
                return (
                        <div className="centreText">
                                {/* React components must have a wrapper node/element */}
                                <h1>Welcome to Trivia Finda! </h1>
                                <p>Ever needed to plan a trivia party? but stuck on what questions to ask? well, trivia finda is here for you</p>
                                <p>Select the amount of questions you would like to have to get random trivia questions! </p>
                        </div>
                );
        }
}