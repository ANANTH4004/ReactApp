import { useEffect, useState } from "react"
import Profile from "./Profile"


const HttpExample = () => {
    const [profiles, setProfiles] = useState([])
    useEffect(()=> {
        fetch('https://api.github.com/users', {
            method: 'GET',
            mode: 'cors', // enable CORS (default for cross-origin fetch)
            headers: {
              'Accept': 'application/json',
            }
        }).then((res) => res.json().then((data) => {
            console.log(data)
            console.log("key", data.map(data => data.id))
            setProfiles(data)
        }))
    }, [])
    return (
        <>  
            <div     style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 20,
        }}>
               {profiles.map((profile,index) => {
                return(
                <div style={{
                    flexBasis: "10%", // 3 per row
                    backgroundColor: "#fff",
                    borderRadius: 12,
                    padding: 16,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    display: "flex",
                    justifyContent: "center",
                  }}>
                    <Profile key={profile.id} link={profile.html_url} pic={profile.avatar_url} />
                </div>
                )
               })}
            </div>
        </>
    )
}

export default HttpExample