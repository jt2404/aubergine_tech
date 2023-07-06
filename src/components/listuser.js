import { useEffect, useState } from "react";
import "./user.css";
const ListUser = () => {
    const [data1,setData] = useState();
    const getData = async () => {
        console.log("hi");
        const url = "https://reqres.in/api/users?page=2";
        const data = await fetch(url);
        const res = await data.json();
        if(res){
            setData(res.data);
            console.log(res.data);
        }
    }
    useEffect(() => {
        getData();
    },[]);

    return(
        <>
                <div className="di">
            {
                data1 ? (
                    
                data1.map((val) => {
                    return(
                        <a href="/user"><Card val={val}/></a>
                    )
                }) 
                ) : 
                <h1>No data present</h1>
            }
            </div>
        </>
    )
}

const Card = (props) => {
    return(
        <>
            <div className="div1">
                <div className="div1_1">
                    <img src={props.val.avatar} className="img_1"/>
                </div>
                <div className="div1_2">
                    <h1>{props.val.first_name}</h1>
                    <h4>{props.val.email}</h4>
                </div>
            </div>
        </>
    )
}

export default ListUser;