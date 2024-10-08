import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import React1 from 'react';

function App() {
let fooditems=[]
// let fooditems=['Dal','roti','Greeen veg','salad','Milk']



  return  <>
  
    <h1>Healthy Foods</h1>
  {fooditems.length===0 ? <h3>No food to eat</h3>:null} 

    <ul class="list-group">
  {fooditems.map(item =><li class="list-group-item">{item}</li>)}
</ul>
</>
}

export default App
