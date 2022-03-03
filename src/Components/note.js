import React, { useState, useEffect } from "react";
import Card from "./Components/Card";
import axios from "axios";

function App() {
  const [user, setuser] = useState([]);
  // const [userImg, setuserImg] = useState([]);



  // const getUsersImg = () => {
  //   let usedatapi = "https://jsonplaceholder.typicode.com/users`";
  //   axios.get(usedatapi).then((response)=>{
  //     let dataImg=response.data;
  //     setuserImg(dataImg)


  //   })}


  const getUsers = () => 

    axios.get(`https://jsonplaceholder.typicode.com/users`).then((response)=>{
      console.log(response)


    })


  }

  useEffect(() => {
    getUsers();
    // getUsersImg();
  }, []);
  return (
    <div>
      <h1>App</h1>




      {/* {userImg.map((imgUrl)=>{
        return(
          <>hello ram</>
        )

      })} */}




      {/* {user.map((api) => {
        return (
          <>
            <Card
              name={api.name}
              email={api.email}
              house={api.company}
              website={api.website}
            />
          </>
        );
      })} */}
    </div>
  );


export default App;