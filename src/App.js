import React,{useState,useEffect} from 'react'
import Card from "./Components/Card";
import axios from "axios";
import CardImg from './Components/CardImg';
import "./App.css"




function App() {


  const [user, setuser] = useState([]);
  const [userImg, setuserImg] = useState([]);



  // const getUsersImg = () => {

  //   axios.get(`https://jsonplaceholder.typicode.com/users`).then((response)=>{
  //     let dataImg=response.data
  //     console.log(dataImg)
  //     setuserImg(dataImg)

      


  //   })


  // }
  const getUsers = () => {
    setTimeout(()=>{
      axios.get(`https://jsonplaceholder.typicode.com/users`).then((response)=>{
        let data=response.data
        console.log(data)
        setuser(data)
  
        
  
  
      })
    },200)

    // axios.get(`https://jsonplaceholder.typicode.com/users`).then((response)=>{
    //   let data=response.data
    //   console.log(data)
    //   setuser(data)

      


    // })


  }


  useEffect(() => {
    getUsers();

    // getUsersImg();
  }, []);
  return (
    <div>


<div class="sk-chase">
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
</div>


      {
        userImg.map((imgapi)=>{
          return(
            <><CardImg img={imgapi.name}/>
            
            </>
          )
        })
      
      }
      <div>
        {user.map((api) => {
        return (
          <>
            <Card

              name={api.name}
              email={api.email}
              phone={api.phone}
              company={api.company.name}
              website={api.website}
              address={api.address.street}
              address1={api.address.suite}
              address2={api.address.zipcode}
            />
          </>
        );
      })}
        
    

      </div>




    </div>
  )
}

export default App
