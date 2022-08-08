import axios from "axios";
import React, { useEffect, useState } from "react";
import ListItems from "./ListItems/ListItems";
import Loader from "../UI/Loader";


function Products() {

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


    return (
        <>
            <div className="product-list">
                {items.map(item => {
                    return <ListItems key={item.id} data={item} ></ListItems>
                })}
            </div>
            {loader && <Loader />}
        </>
    );
}
export default Products;