import axios from "axios";
import React, { useEffect, useState } from "react";
import ListItems from "./ListItems/ListItems";
import Loader from "../UI/Loader";


function Products({ onAddItem, onRemoveItem, eventState }) {

    const [items, setItems] = useState([]);
    const [loader, setLoader] = useState(true);


    useEffect(() => {

        async function fetchitems() {
            try {
                const response = await axios.get("https://e-commerce-project-efc05-default-rtdb.firebaseio.com/items.json");
                const data = response.data;
                const transformedData = data.map((item, index) => {
                    return {
                        ...item,
                        quantity: 0,
                        id: index
                    }

                })
                setLoader(false);
                setItems(transformedData);
            }
            catch (error) {
                setLoader(false);
                console.log(error);
                alert("Some Error Occured");
            }
            finally {
                setLoader(false);
            }


        }

        fetchitems();
    }, [])

    useEffect(() => {
        if (eventState.id > -1) {
            if (eventState.type === 1) {
                handleAddItem(eventState.id)
            } else if (eventState.type === -1) {
                handleRemoveItem(eventState.id)
            }
        }

    }, [eventState])

    const handleAddItem = id => {
        let data = [...items]
        let index = data.findIndex(i => i.id === id)
        data[index].quantity += 1;
        setItems([...data])
        onAddItem(data[index]);

    }
    const handleRemoveItem = id => {
        let data = [...items]
        let index = data.findIndex(i => i.id === id)
        if (data[index].quantity !== 0) {
            data[index].quantity -= 1;
            setItems([...data])
            onRemoveItem(data[index]);
        }

    }

    return (
        <>
            <div className="product-list">
                {items.map(item => {
                    return <ListItems onAdd={handleAddItem} onRemove={handleRemoveItem} key={item.id} data={item} ></ListItems>
                })}
            </div>
            {loader && <Loader />}
        </>
    );
}
export default Products;