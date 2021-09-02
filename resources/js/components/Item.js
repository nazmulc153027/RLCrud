
import { useState  } from 'react';
import axios from 'axios';
import { useNavigate, useHistory } from 'react-router-dom';

const Item = (props) => { 
    // state={
    //     name:"",
    //     text:"",
    //     desc:"",
    //     sell:"",
    //     purchase:"",
    // }
    const history = useHistory();
    const [name, setName] =  useState(null);
    const [text, setText] =  useState(null);
    const [desc, setDesc] =  useState(null);
    const [sell, setSell] =  useState(null);
    const [purchase, setPurchase] =  useState(null);


    // handleChange = (e)=>{
    //     this.setState({
    //         [e.target.name]:e.target.value
    //     })
    // }

    const saveItem = async(e)=>{
        // e.preventDefault()mane form sub korarerr por loading nibena
      e.preventDefault();
      const data = {name, text, desc, sell, purchase}
      const res = await axios.post("/item", data)
      .then((result) => {
        // setState({name:"", text:"",desc:"",sell:"",purchase:""})
        history.push('/')
    });
      console.log(res);
    //   if(res.data.status === 200){
    //       this.setState({name:"", text:"",desc:"",sell:"",purchase:""})
    //       this.props.navigate("/");
    //   }
    }

   
        return (
            <>
                <form onSubmit={saveItem}>
                <div className="row">
                <div className="col-6 offset-md-3">
                  <h1>Add Contact</h1>
                  <hr/>
                <div className="form-group">
                    <label htmlFor="exampleInputName">Name</label>
                    <input type="text" className="form-control" placeholder="Enter Name" value={name}   onChange={(event)=>setName(event.target.value)} name="name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputText">Text</label>
                    <input type="text" className="form-control" placeholder="Enter text" value={text} onChange={(event)=>setText(event.target.value)} name="text"/>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPhone">Description</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"  value={desc} onChange={(event)=>setDesc(event.target.value)} name="desc"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Sell Price</label>
                    <input type="text" className="form-control" placeholder="sell price" value={sell} onChange={(event)=>setSell(event.target.value)} name="sell"/>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Purchase Price</label>
                    <input type="text" className="form-control" placeholder="purchase price" value={purchase} onChange={(event)=>setPurchase(event.target.value)} name="purchase"/>
                </div>

                
                <button type="submit" className="btn btn-primary">Submit</button>
                </div>
                </div>
                </form>
            </>
        )
    }


// const withNavigate = (props) => {
//     let navigate = useNavigate();
//     return (
//         <div>
//             <Item {...props} navigate={navigate} />
//         </div>
//     );
// };


export default Item;


