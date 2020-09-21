import React, { Component } from 'react';
import Counters from './counters';

class Program extends Component {
    state = {  
        counters: [
            {id: 1 , value: 4},
            {id: 2 , value: 0},
            {id: 3 , value: 0},
            {id: 4 , value: 0},
            ]
            };
        
    
        handleIncrement = counter => {
            const counters = [...this.state.counters];
            const index = counters.indexOf(counter);
            counters[index] = {...counter};
            counters[index].value++;
            this.setState({ counters });
        
        }
       
        handleReset = () =>{
               const counters = this.state.counters.map(c=>{
                    c.value = 0;
                    return c;
                })
                this.setState({counters});
            }
        
        handeDelete = counterId =>{
            const counters = this.state.counters.filter(c => c.id !== counterId);
            this.state.counters = counters;
            this.setState({ counters });
    
        }
    
        handleAdd = () =>{
          const counters = [...this.state.counters,{id:this.state.counters.length + 1 , value:0}]
        this.setState({ counters });
    }
    render() { 
        return (
            <React.Fragment>
          <main className="container">
          <Counters  
            counters={this.state.counters}
            onReset={this.handleReset}  
            onIncrement = {this.handleIncrement} 
            onDelete = {this.handeDelete}
            onAdd={this.handleAdd}
            />
          </main>
          </React.Fragment>
        );
        }
     }
export default Program
;