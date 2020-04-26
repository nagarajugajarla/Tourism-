import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Counters from './comonents/Counters';


import CounterView from './comonents/CounterView.jsx';
import Spinner from './comonents/Spinner.jsx';

import { BrowserRouter as Router, Switch,Route, Link} from "react-router-dom";




import Filter from './comonents/Filter';
import FooterCompt from './comonents/FooterCompt';
import Dropdown from './comonents/Dropdown';

import Options from './comonents/Options';



 class Home extends Component {

    constructor(props){
    super(props);
    this.state ={

            counters : [
                {id:1, name:"Goa",imagepath:'Images/Goa.jpg',Address:"10 Places", Type:"High"},
                {id:2, name:"Kerala",imagepath:'Images/Kerala.webp',Address:"7 Places", Type:"High"},
                {id:3, name:"Madhurai",imagepath:'Images/Madurai.jpg',Address:"5 Places", Type:"Default"},
                {id:4, name:"Rameshwaram",imagepath:'Images/Rameshwaram.jpg',Address:"8 Places", Type:"Medium"},
                {id:5, name:"New Delhi",imagepath:'Images/Delhi.jpg',Address:"15 Places", Type:"High"},
                {id:6, name:"Punjab",imagepath:'Images/Punjab.jpg',Address:"9 Places", Type:"Medium"}
                ],
                searchvalue:'',
                Filtervalue :'Default'   
      };
    }
      searchData= (event) => {
        this.setState({searchvalue:event.target.value})
    }

    Datafilter=(e) => {

        console.log('value', e.target.value);
        this.setState({Filtervalue:e.target.value})
    }   
      handleIncrement = counter =>{

          const counters = [...this.state.counters];
          const index = counters.indexOf(counter);
          counters[index] = {...counter};
          counters[index].value++;
          this.setState({counters});

      }


      handleDelete =(counterID) => {
          const counters = this.state.counters.filter(c => c.id !== counterID);
          this.setState({counters})
      }

      handleReset(){
        this.setState({counters : []});
      }


    render() {

        let searchData = this.state.counters.filter(c => {
        console.log(c.name,'test');
            return c.name.toLowerCase().includes(this.state.searchvalue.toLowerCase())
        })

        return (
        <div>
          
            <Filter searchData = {this.searchData} /> 
            <div id="root" class="container">
             
            <Dropdown FilterData={this.Datafilter} />
                <Spinner />
          
            <main className="container container-body">
        
            <Counters  searchData={searchData}  searchtxt={
                this.state.searchvalue} onReset ={this.handleReset} onDelete ={this.handleDelete} onIncrement={this.handleIncrement}/>
            </main>
           
            </div>
            </div>
        );
    }
}

const Features = () =>{
    return(

        <div className='container'>
            <p>In this example we have 3 “pages” handled by the router: a home page, an about page, and a users page. As you click around on the different Links, the router renders the matching Route.Note: Behind the scenes a Link renders an  with a real href, so people using the keyboard for navigation or screen readers will still be able to use this app.</p>
        </div>
    )
}


const About = () =>{
  
    return(
        <div>
     

          <Options />
        </div>
    )
}

function Warning(props){
    if(!props.warn){
        return (<p>null</p>);
    }
    return(
        <div>Warning..!!</div>
    )
}
class App extends React.Component{
    constructor(props){
        super(props);
        this.state={status:""}
    }
    render(){
        return(




<React.Fragment>
    <Router>
    <div className='main-nav-cont'>
        <nav class="nav ">
        <Link to ="/">Home</Link>
        <Link to ="/Features">Features</Link>
        <Link to ="/About">About US</Link>
        </nav>
    </div>

        <Switch>
            <Route  path ="/" exact component={Home} />
            <Route path="/CounterPage"   component={CounterView} />
            <Route path="/Features"  component={Features} />
            <Route path="/About"  component={About} />
            <Route path="/HomePage"  component={Home} />
        </Switch>
   </Router>
   <FooterCompt />
</React.Fragment>
)
}
}
export default App;
