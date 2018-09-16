import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import * as React from "react";
import './css/styles.css';

interface IState {
        results: any,
        quizArray:any[],
        amt: number,
      }
  
      const buttonStyle = {
        background: '	#0066CC',
        borderRadius: 3,
        border: 0,
        color: 'white',
        fontSize: '16px',
      };

      const scrollStyle ={
        width:'200px',
        fontSize:'20px',
      }


export default class App extends React.Component <{}, IState> {

    constructor(props: any) {
      super(props);
      this.state = {
      quizArray: [],
      results: "",
      amt: 1,
      }
              // React components using ES6 classes no longer autobind this to non React methods so we need to add this
      this.getQuizzes = this.getQuizzes.bind(this);
      }
            
// research fetch api components
// you need to change the state when the response is successfully returned
        public getQuizzes() {

                fetch('https://opentdb.com/api.php?amount=' + this.state.amt, {

                })
                .then((response : any) => {
                  if (!response.ok) {
                    this.setState({results: response.statusText})
                  }
                  else {
                        response.json().then((data:any) => this.setState({
                                quizArray: data.results, 
                                results: response.statusText}))
                  }
                  return response
                })
        }

         public handleChange = (amt:any) => (event:any) => {
                this.setState({
                  amt: event.target.value,
                });
              };

        
        public render() {
                return (
                  <div className="centreText"> 
                      {/* React components must have a wrapper node/element */}

                        <div className="userInput">
                          <form autoComplete="off">
                            <TextField
                                id="numberofQuiz"
                                label="Number of Questions"
                                value={this.state.amt}
                                onChange={this.handleChange('amt')}
                                type="number"
                                style={scrollStyle}
                                InputProps={{ inputProps: { min: 1, max: 10 } }}
                                InputLabelProps={{
                                shrink: true,
                                }}
                                        margin="normal"
                                />
                            </form>
                          
                                <div className='getQuizButton'>
                                <Button style={buttonStyle} onClick={this.getQuizzes}>Get Quizzes</Button>
                                </div>
                                </div>
                                {/* <div className="returnResults">
                                <p>{this.state.results}</p>
                                <ul>
                                        {this.state.quizArray.map(d => <li key={d.question}>{d.question}</li>)}
                                </ul>
                                </div> */}
                                <div>   
                                <table className="resultsTable">
                                        <tr className = 'quesHeader'>
                                        <th>Quiz Question</th>
                                        <th>Quiz Answer</th>
                                        </tr>
                                        {this.state.quizArray.map(d =><tr key={this.state.amt}> <td key={d.question}>{d.question.replace(/&quot;/g, '\"')}</td> <td key={d.correct_answer}>{d.correct_answer}</td></tr>)}  
                                        
                                </table>
                                </div>
                        
                                
                        </div>
                        

                        
                );
        }

        
}