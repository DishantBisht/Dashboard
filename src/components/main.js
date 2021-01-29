import React,{Component} from 'react';
import Home  from "./home";
import Navbar from './navbar';
import Profile from './profile';
import Settings from './settings';
import Support from './support';
import Courses from './courses';
import Projects from './projects';
import Invite from './invite';
import { withRouter, Switch, Route, Redirect } from "react-router";

class Main extends Component{
    
    render(){
        return(
            <div className='wrapper'>
                <div><Navbar /></div>
                <div>
                    <Switch>
                        <Route exact path='/' component = {() => <Home />}/>
                        <Route path='/Profile' component={() => <Profile />} />
                        <Route path='/Projects' component={() => <Projects />} />
                        <Route path='/Support' component={() => <Support />} />
                        <Route path='/Courses' component={() => <Courses />} />
                        <Route path='/Invite' component={() => <Invite />} />
                        <Route path='/Settings' component={() => <Settings />} />
                        <Redirect to="/" />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default withRouter(Main);