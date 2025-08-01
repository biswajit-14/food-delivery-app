import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Order Your Favourite Food Here</h2>
            <p>
                Choose from a diverse menu featuring a delectable dishes crafted with the finest ingredients and culinary expertise, Our mission is to satisfy your cravings and elevate your dinning experience, one delicious meal at a time.
            </p>
            <button>
                View Menu
            </button>
        </div>
    </div>
  )
}

export default Header