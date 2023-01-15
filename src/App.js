import './App.css';
import React, { useState, useEffect} from 'react';


const generateUsers = () => [
  {id:1, name:"irakli"},
  {id:2, name:"cotne"},
  {id:3, name:"giorgi"},
  {id:4, name:"erekle"},
  {id:5, name:"demna"},
  {id:6, name:"ana"},
  {id:7, name:"salome"},
  {id:8, name:"nini"},
  {id:9, name:"maka"},
  {id:10, name:"nato"},
]

const App = ()=> {
  const [users, setUsers] = useState([])

  useEffect(() => {
    setUsers(generateUsers())
  }, [])

  useEffect(() => {
    document.title = `${users.length} users length`
  }, [users])


  const deleteButton = () => {
    const randomIndex = Math.floor(Math.random() * users.length);
  
    setUsers ((prevUsers) => {
      const newUseArray = prevUsers.filter(
        (_, index) => index!==randomIndex
      )
      return newUseArray
    })
  }


  return (
    <div>
      {users.map ((user) => {
        console.log(user.name);
        return (
          <React.Fragment key={user.id}>
          <p>{user.name}</p>
        </React.Fragment>
        )
        
      })}
      <button onClick={deleteButton}>Delete random</button>
    </div>  
    
  );
}




export default App;
