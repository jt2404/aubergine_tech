import download from "downloadjs";
import html2canvas from "html2canvas";
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

    const downloadfile = async () => {
        const canvas = await html2canvas(document.body);
        const dataURL = canvas.toDataURL('image/png');
        download(dataURL, 'download.png', 'image/png');
    }

    return(
        <>
        {
            user ? (
                <>
                <img src={user.avatar} />
            <h1>{user.first_name}</h1>
            <h1>{user.last_name}</h1>
            <button onClick={downloadfile}>Download</button>
            </>
            ) : <h1>waiting</h1>
        }
            
        </>
    )
}

export default User;