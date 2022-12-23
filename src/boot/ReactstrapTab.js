import React,{Component} from "react";
import {TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';

class ReactstrapTab extends Component{
    constructor(props){
        super(props);
        this.state={TabState:'react'}
    }

    toggle = (tabnum)=> {
        if(this.state.TabState !== tabnum) this.setState({TabState:tabnum});
    }

    render() {
        return (
            <div>
                <Nav tabs>
                <NavItem>
                    <NavLink onClick={()=> {this.toggle('react');}}>Furst Tab</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink onClick={()=> {this.toggle('즈스연');}}>Second Tab</NavLink>
                </NavItem>
                </Nav>
                <TabContent activeTab={this.state.TabState}>
                    <TabPane tabId="react"><h3>react</h3></TabPane>
                    <TabPane tabId="즈스연"><h3>즈스연</h3></TabPane>
                </TabContent>

            </div>
        );
    }
}

export default ReactstrapTab;