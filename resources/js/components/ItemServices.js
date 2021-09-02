const baseUrl = "http://127.0.0.1:8000/api/item"
import axios from "axios";
const ItemServices = {};

//...//

ItemServices.get = async (id) => {

  const urlGet = baseUrl+"/"+id
  const res = await axios.get(urlGet)
  .then(response=>{ return response.data })
  .catch(error => { return error })
  return res;

}

ItemServices.update = async data => {
    let urlSave = "/api/item";
    // if (data.get("id")) {
        urlSave = "/api/item/" +data.id +"?_method=PUT";
        const res = await axios
            .post(urlSave, data)
            .then(response => {
                $.notify({ message: "Item Updated" }, { type: "success" });
                return response.data;
            })
            .catch(error => {
                return [];
            });
        return res;
    // } else {
    //     const res = await axios
    //         .post(urlSave, data)
    //         .then(response => {
    //             $.notify({ message: "Item Created" }, { type: "success" });
    //             return response.data;
    //         })
    //         .catch(error => {
    //             return [];
    //         });
    //     return res;
    // }
};


export default ItemServices
