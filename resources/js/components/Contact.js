import React, { Component} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
export default class Contact extends Component {
    state = {
        items:[]
    };
    getAllitem = async() =>{
        const res = await axios.get("/api/item",this.state)
      .then((result) => {
        // this.setState({list:res})
        // this.props.navigate("/");
        // console.log(result);
        this.setState({items:result.data.items})
      });
    }

    componentDidMount(){
        this.getAllitem();
    }
    render() {
        return (
            <>
            <div className="col-8 offset-md-2">
                <h1 className="">All List</h1>

                <table className="table table-hover">
                <thead>
                <tr>
                    <th>#</th>
                    <th>exampleInputName</th>
                    <th>Sell Price</th>
                    <th>Purchase Price</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {this.state.items.map((item,i) =>{
                    return(
                        <tr key={i}>
                        <td>{i+1}</td>
                        <td>{item.name}</td>
                        <td>{item.sell}</td>
                        <td>{item.purchase}</td>
                        <td>
                            
                        {/* <Link to={`/item/${i}`} activeClassName="active">{i}</Link> */}
                        <Link to={`/edit-item/${item.id}`}>Edit</Link>

                             |
                            <a>Delete</a>
                        </td>
                      </tr>
                    )
              })}
               
            
                </tbody>
            </table>
            </div>
            </>
        )
    }
}
