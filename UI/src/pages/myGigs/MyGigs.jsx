import React from 'react'
import "./myGigs.css"
import { Link } from 'react-router-dom'

const MyGigs = () => {
  return (
    <div className='myGigs'> 
    <div className="container">
      <div className="title">
        <h1>Gigs</h1>
        <Link to="/add">Add New Gig</Link>
      </div>
      <table>
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Price</th>
          <th>Sales</th>
          <th>Contact</th>
        </tr>
              <tr >
                <td>
                  <img className="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjceCkXpY_cdo7oBs1dcdgUlT99wkVcEH-sWNw42EDIVEhprGdz2NwTBai57Z_sBovtH4&usqp=CAU" alt="" />
                </td>
                <td>GIG</td>
                <td>40</td>
                <td>90</td>
                <td>
                  <img
                    className="delete"
                    src="https://cdn-icons-png.flaticon.com/512/3687/3687412.png"
                    alt=""
                    onClick={() => handleDelete()}
                  />
                </td>
              </tr>
              <tr >
                <td>
                  <img className="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjceCkXpY_cdo7oBs1dcdgUlT99wkVcEH-sWNw42EDIVEhprGdz2NwTBai57Z_sBovtH4&usqp=CAU" alt="" />
                </td>
                <td>GIG</td>
                <td>40</td>
                <td>90</td>
                <td>
                  <img
                    className="delete"
                    src="https://cdn-icons-png.flaticon.com/512/3687/3687412.png"
                    alt=""
                    onClick={() => handleDelete()}
                  />
                </td>
              </tr>
              <tr >
                <td>
                  <img className="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjceCkXpY_cdo7oBs1dcdgUlT99wkVcEH-sWNw42EDIVEhprGdz2NwTBai57Z_sBovtH4&usqp=CAU" alt="" />
                </td>
                <td>GIG</td>
                <td>40</td>
                <td>90</td>
                <td>
                  <img
                    className="delete"
                    src="https://cdn-icons-png.flaticon.com/512/3687/3687412.png"
                    alt=""
                    onClick={() => handleDelete()}
                  />
                </td>
              </tr>
    
      </table>
    </div>
    </div>
  )
}

export default MyGigs