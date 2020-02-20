import React, { Component } from "react";
import "./Authors.css";
import AuthorDisplay from "./AuthorDisplay";

export default class Authors extends Component {
   constructor(props){
       super(props);
       this.state = {
           authors: [
               {
                   id: 1,
                   name: "James",
               },
               {
                   id: 2,
                   name: "Mark",
                },
                {
                   id: 3,
                   name: "Eric Evans",
                },
                {
                   id: 4,
                   name: "William Turon",
                },
                {
                    id: 5,
                    name: "Noah Graifer",
                }
           ]
       };
   }
   
   
   
   
   render(){
    return(
        <div className="Author">
            <div className="lander">
                <AuthorDisplay author={this.state.authors} />
            </div>
        </div>
    );
  }
}