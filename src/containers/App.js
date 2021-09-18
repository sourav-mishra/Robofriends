import React, {Component} from 'react';
import CardList from '../Components/CardList';
import Searchbox from '../Components/Searchbox';
import Scroll from '../Components/Scroll';
import './App.css';

//STATE = object that describe our application
//STATE >> props

class App extends Component{
	constructor(){
		super()
		this.state= {
			robot: [],
	            searchfield: ''
		}
	}
       
      componentDidMount(){
      	fetch('https://jsonplaceholder.typicode.com/users')
      	.then(response=> response.json())
      	.then(users => this.setState({robot: users }));
      }

 	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
		
	}
	render(){
		const {robot, searchfield} = this.state;
		const filteredRobot = robot.filter(robot =>{
		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
      if(!robot.length){
      	 return <h1>🙋</h1> 
      } else {
      return (
		<div className='tc'>
		   <h1 className='f1'>ROBOFRIENDS</h1>
		   <Searchbox searchChange={this.onSearchChange}/>
		   <Scroll>
               <CardList robot={filteredRobot}/>
		   </Scroll>
		</div>
	    );
       }
    }
}

export default App;