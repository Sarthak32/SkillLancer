import React from 'react'
import "./Catcard.css"
import { Link } from 'react-router-dom';


function Catcard({ item }) {
  return (
    <Link to="/gig?cat=design">
      <div className="catCard">
        <img src={item.img} alt="" />
        <span className="desc">{item.desc}</span>
        <span className="title">{item.title}</span>
      </div>
    </Link>
  );
}
export default Catcard;