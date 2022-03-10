import Button from "react-bootstrap/Button";
import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component{

    state = {
        counter:[
            {id:1, value:1},
            {id:2, value:7},
            {id:3, value:0},
            {id:4, value:0}
        ]
    };

    handleDelete = counterId=>{
        console.log( counterId);
        const counters = this.state.counter.filter(c=>c.id !== counterId);
        this.setState({ counter : counters});
    };

    handleIncrement = counter1 =>{

        const counters = [...this.state.counter];
        const index =  counters.indexOf(counter1);
        counters[index] = {...counter1};
        counters[index].value++;
        this.setState({counter:counters})
        console.log(counter1);
    }

    handleReset = () =>{
        const counters =  this.state.counter.map(c=>{
            c.value = 0;
            return c;
        });
        this.setState({counter : counters});
    }
    render(){

        return(
        <div>
            <Button onClick={this.handleReset}>Reset</Button><br></br>
            {this.state.counter.map(c =>(
            <Counter 
                key={c.id} 
                onDelete={this.handleDelete} 
                onIncrement={this.handleIncrement}
                value={c.value} 
                id={c.id}
                counter = {c}
                selected={true}
                />
                
               
            
            ))}
        </div>
        )
    };
}
export default Counters;