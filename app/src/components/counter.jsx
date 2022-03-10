import React, { Component} from 'react'
import Button from 'react-bootstrap/Button';
class Counter extends Component{
    // state ={
    //     count : this.props.value
    // };

    // constructor(){
    //     super();
    //    this.handleIncreament= this.handleIncreament.bind(this);
    //     //console.log('Constructor', this);
    // };

    // handleIncreament=()=>{
    //     this.setState({count:this.state.count+1})
    //    console.log("Increment clicked");
    // };
    render(){
       //console.log('props', this.props);
        return (
            <div>
               
                <span>{this.formatCount()}   </span>
                
                <Button onClick={() =>  this.props.onIncrement(this.props.counter)}>Increment</Button>
                <Button onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</Button>
                <br></br>
                <br></br>
            </div>
        );
    }

   
    formatCount(){
        const count = this.props.counter.value;
        return count === 0 ? <h1>Zero</h1> :  count;
    }
}

export default Counter;