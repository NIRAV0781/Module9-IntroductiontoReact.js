import React, { useState } from 'react'

const FormsinReact = () => {
  const [data,setData] = useState({name:"",email:"",password:""})
  const [alldata, setAlldata] = useState([])

  const handleAdd = (e)=>{
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSave = (e)=>{
    e.preventDefault()
    setAlldata([...alldata, data])
  }

  return (
    <div>
        <form onSubmit={handleSave}>
            <label htmlFor="">Name:</label>
            <input type="text" name='name' value={data.name} onChange={handleAdd} placeholder='Enter Name here'/><br/>
            <label htmlFor="">Email:</label>
            <input type="email" name='email' value={data.email} onChange={handleAdd}  placeholder='Enter Email here'/><br/>
            <label htmlFor="">Password:</label>
            <input type="password" name='password' value={data.password} onChange={handleAdd}  placeholder='Enter Password here'/>
            <button>Save</button>
        </form>
        <table border={2} cellPadding={10}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {
              alldata.map((i)=>{
                return(
                  <tr>
                    <td>{i.name}</td>
                    <td>{i.email}</td>
                    <td>{i.password}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
    </div>
  )
}

export default FormsinReact;
