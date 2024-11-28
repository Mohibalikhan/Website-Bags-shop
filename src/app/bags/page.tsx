import React from 'react'


const bags = () => {

  const bagdata =[
    {id:1,name:'Nike',price:400,description:'Luxury Leather bag',image:'/bag5.jpeg'},
    {id:2,name:'Dior',price:599,description:'Sporty Design',image:'/dior.jpeg'},
    {id:3,name:'Dior',price:700,description:'Elegant Design',image:'/dior2.jpeg'},
    {id:4,name:'Gucci',price:900,description:'Stylish Design',image:'/gucci.jpeg'},
    {id:5,name:'Gucci',price:1200,description:'Bold and Rugged',image:'/guccire.jpg'},
    {id:6,name:'Louis-Viton',price:2000,description:'Reliable and Affordable bag',image:'/lvpurse.jpeg'},

  ]
  return (
    <div>
      <div className='bags'>
        {bagdata.map((bag)=>(
          <div key={bag.id} className="bag-card">
            <img src={bag.image} alt={bag.name}/>
            <h3>{bag.name}</h3>
            <p>{bag.description}</p>
            <div className="price">${bag.price}</div>
            <button>Add to Cart</button>

          </div>
        ))}
      </div>
    </div>
  )
}

export default bags
