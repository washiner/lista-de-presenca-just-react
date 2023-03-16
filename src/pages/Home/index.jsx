import React, { useState, useEffect } from "react";
import "./styles.css";
import { Card } from "../../components/Card";

export function Home() {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({name:'', avatar:''})

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      }),
      
    };

    setStudents((prevState) => [...prevState, newStudent]);
  }
  
// esse e um jeito de fazer usando asynce e await 

  useEffect(() => {
    async function fetchData(){
      const Response = await fetch('https://api.github.com/users/washiner')
      const data = await Response.json()
      console.log("DADOS ===> ", data)

      setUser({
        name: data.name,
        avatar: data.avatar_url
      })
    }
    fetchData()
  },[])


  // esse e um jeito de fazer sem usar async e await 
  // useEffect(()=>{
  //   //corpo onde quero que execute
  //   fetch('https://api.github.com/users/washiner')
  //   .then(Response => Response.json())
  //   .then(data => {

  //     setUser({
  //       name: data.name,
  //       avatar: data.avatar_url,
  //     })

  //   })
  // },[])

  return (
    <div className="container">
      <header>
        <h1>Lista de presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="foto de perfil"></img>
        </div>
      </header>
      <input
        type="text"
        placeholder="Digite o nome..."
        onChange={(e) => setStudentName(e.target.value)}
      />

      <button type="button" onClick={handleAddStudent}>
        Adicionar
      </button>

      {students.map((student) => (
        <Card key={student.time} name={student.name} time={student.time} />
      ))}
    </div>
  );
}
