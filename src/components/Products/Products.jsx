import axios from "axios";
import React, { useEffect, useState } from "react";
import ListItems from "./ListItems/ListItems";
import Loader from "../UI/Loader";


function Products({onAddItem, onRemoveItem}) {

    const [items, setItems] = useState([]);
    const [loader,setLoader]=useState(true);
    const [presentItems, setPresentItems]=useState([])


    useEffect(() => {

        async function fetchitems() {
            try{
                const response = await axios.get("https://e-commerce-project-efc05-default-rtdb.firebaseio.com/items.json");
                const data = response.data;
                const transformedData = data.map((item, index) => {
                    return {
                        ...item,
                        id: index
                    }
    
                })
                setLoader(false);
                setItems(transformedData);
            }
            catch(error){
                setLoader(false);
                console.log(error);
                alert("Some Error Occured");
            }
            finally{
                setLoader(false);
            }
            

        }

        fetchitems();
    }, [])

    const handleAddItem=(id)=>{
        if(presentItems.indexOf(id)>-1){
            return;
        }
        setPresentItems([...presentItems,id])
        onAddItem();

    }
    const handleRemoveItem=(id)=>{
        let index=presentItems.indexOf(id)
        if(index>-1){
            let items=[...presentItems]
            items.splice(index,1)
            setPresentItems([...items])
        }
        onRemoveItem();

    }

    return (
        <>
        <div className="product-list">
            {items.map(item => {
                return <ListItems onAdd={handleAddItem} onRemove={handleRemoveItem} key={item.id} data={item} ></ListItems>
            })}
        </div>
        {loader && <Loader/>}
        </>
    );
}
export default Products;