
import { useState,useEffect} from 'react';
import axios from 'axios';
import ItemServices from './ItemServices';
import { useNavigate,  useParams,useHistory } from 'react-router-dom';

const edititem = (props) => { 
    const {id} = useParams();
    const history = useHistory();
    // console.log(id);
    // state={
    //     name:"",
    //     text:"",
    //     desc:"",
    //     sell:"",
    //     purchase:"",
    // }


    // const history = useHistory();
    const [name, setName] =  useState(null);
    const [text, setText] =  useState(null);
    const [desc, setDesc] =  useState(null);
    const [sell, setSell] =  useState(null);
    const [purchase, setPurchase] =  useState(null);


    useEffect(()=>{

        async function fetchDataItem(){
        //   let id = props.match.params.id;
        const res = await ItemServices.get(id);
        console.log(res)
        //   if (res.success) {
            console.log(res);
            const item = res.item
           

            // setId(item.id)
            setName(item.name)
            setText(item.text)
            setDesc(item.desc)
            setSell(item.sell)
            setPurchase(item.purchase)
        //   }
        //   else {
        //     alert(res.message)
        //   }
        }
        fetchDataItem();
    
    }, [])

    // handleChange = (e)=>{
    //     this.setState({
    //         [e.target.name]:e.target.value
    //     })
    // }

    const updateItem = async(e)=>{
        // e.preventDefault()mane form sub korarerr por loading nibena
      e.preventDefault();
      

      const data = {id, name, text, desc, sell, purchase}
      console.log(data)
      const res = await ItemServices.update( data)
      
    //   if (res.success) {
    //     alert(res.message)
    //   }
    //   else {
    //     alert(res.message)
    //   }
    history.push('/')
    }

   
        return (
            <>
                <form onSubmit={updateItem}>
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

                
                <button type="submit" className="btn btn-primary">Update</button>
                </div>
                </div>
                </form>
            </>
        )
    }


// const withNavigate = (props) => {
//     let navigate = useNavigate();
//     let params = useParams();
//     return (
//         <div>
//             <EditItem {...props} navigate={navigate} params />
//         </div>
//     );
// };


export default edititem;


