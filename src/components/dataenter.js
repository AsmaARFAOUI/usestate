import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import {useState} from 'react'

const Enter = () => {

  const [item, setItem] = useState({
    name: "" ,
    lastname:"",
    username:""
    })

function add (){
     const inpp1 = document.getElementById("inp1")
     const inpp2 = document.getElementById("inp2")
     const inpp3 = document.getElementById("inp3")
      setItem(item => ({
      name: inpp1.value,
      lastname: inpp2.value,
      username: inpp3.value
      }))

      const tr = document.createElement("tr");
      tr.innerHTML  = `
        <tr>
          <td>1</td>
          <td>${item.name}</td>
          <td>${item.lastname}</td>
          <td>${item.username}</td>
        </tr>
      `
      document.getElementById("tablebody").appendChild(tr);
  }

  return(
    <>
    <h1>bonjour </h1>
    <Form>
        <Form.Control type="email" placeholder="email" id="inp1"/>
        <Form.Control type="email" placeholder="email" id="inp2"/>
        <Form.Control type="email" placeholder="email" id="inp3"/>
        <Button variant="primary" onClick={add}>
        Submit
      </Button>
    </Form>

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody id="tablebody">
        
      </tbody>
    </Table>
    </>
  )
}

export default Enter