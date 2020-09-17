import React from "react";

// import {  Table } from "react-bootstrap";

const TableBox = (props) => {
// class TableBox extends Component {

        return ( 
        
            <tr>
            {/* {this.state.contacts.map((c) => ( */}
              
                 <td>{props.id}</td> 
                  <td>{props.name}</td>
                  <td>{props.mail}</td>
                  <td>{props.phone}</td>
                  <td>{props.address}</td>
                  {/* ))} */}
                </tr>
         

         );
    }

 
export default TableBox;