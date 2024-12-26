import { Component } from 'react'
import './app-search.css'


export default class AppSearch extends Component  {
   render() {

    return(
        <div className=" app-search ">
            
            <h2>Search or Filter</h2>
            <input type="Search" placeholder="Type here " />
            <button>Search</button>
        </div>
    )
   }
}