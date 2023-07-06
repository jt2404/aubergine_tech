import { useEffect, useState } from "react";

const User = () => {
    const [user,setUser] = useState({});
    const getData = async () => {
        const data = await fetch("https://reqres.in/api/users/2");
        const res = await data.json();
        if(res){
            console.log(res.data);
            setUser(res.data);
        }
    }
    useEffect(() => {
        getData();
    },[]);

    return(
        <>
        {
            user ? (
                <>
                <img src={user.avatar} />
            <h1>{user.first_name}</h1>
            <h1>{user.last_name}</h1>
            </>
            ) : <h1>waiting</h1>
        }
            
        </>
    )
}

export default User;