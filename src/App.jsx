import Navbar from './Navbar'
import Card from './components/Card'

const food_items = [
  {
    "name": "Butter Chicken",
    "cost": 350,
    "type": "Non-Veg",
    "img" : "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "sub-info" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, impedit!",
    "rating" : 3.5
  },
  {
    "name": "Paneer Butter Masala",
    "cost": 280,
    "type": "Veg",
    "img" : "https://images.unsplash.com/photo-1708793873401-e8c6c153b76a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "sub-info" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, impedit!",
    "rating" : 4.5

  },
  {
    "name": "Chicken Biryani",
    "cost": 400,
    "type": "Non-Veg",
    "img" : "https://images.unsplash.com/photo-1697155406055-2db32d47ca07?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "sub-info" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, impedit!",
    "rating" : 4.9
  },
  {
    "name": "Aloo Gobi",
    "cost": 150,
    "type": "Veg",
    "img" : "https://images.unsplash.com/photo-1652545296893-ff9227b3512e?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "sub-info" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, impedit!",
    "rating" : 3.7
  }
]

function App(){
  return <>
  <Navbar></Navbar>
  Here's an array of JSON objects with Indian food details:

  <div className="flex gap-4">
    {
      food_items.map(item=><Card img={item.img} name={item.name} costVal={item.cost} foodType={item.type} foodInfo={item['sub-info']} rating={item.rating} />)
    }
    
  </div>
  
  <h1>Hi This is React</h1>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus non vitae, exercitationem suscipit architecto eveniet alias beatae soluta! Cum, eos.</p>
  </>
}

export default App;