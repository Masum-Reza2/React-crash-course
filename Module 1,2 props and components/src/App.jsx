import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  // think like react
  let name = <h1>Hello world</h1>
  let address = <p>Thanmondi Dhaka</p>
  let email = <h2>masumreza4280@gmail.com</h2>

  // more like this
  let user = (
    <div>
      {name}
      {name}
      {address}
      {email}
    </div>
  );

  // React components should always start with capital letter. instead of rewritting codes again and again do this
  let UserCom = (props) => {
    return (
      <div>
        <h1>Name : {props.name}</h1>
        <p> Age : {props.age}</p>
        <p>E-mail : {props.email}</p>
      </div>
    )
  }

  let JobInfo = (props) => {
    return (
      <div>
        <h1>Name : {props.name}</h1>
        <h1>Salary : {props.salary}</h1>
        <h1>Position : {props.position}</h1>

      </div>
    )
  }


  return (
    <>
      <div>
        {/* {user} */}

        {/* <UserCom name={'Masum Reza'} age={22} email={'masumreza4380@gmail.com'} /> */}

        {/* <UserCom name={'Habiib Reza'} age={25} email={'Haibullah4380@gmail.com'} /> */}

        <JobInfo name = {'Hablu'} salary = {28000} position = {'Web Developer'}/>
      </div>
    </>
  )
}

export default App