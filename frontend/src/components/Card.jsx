import React, { useState } from 'react'
import { usedispatchcart } from './ContextReducer'

const Card = ({ foodItem }) => {
    const dispatch = usedispatchcart()
    const options = foodItem.options || []
    const sizes = options.length > 0 ? Object.keys(options[0]) : []
    const [size, setSize] = useState(sizes[0] || '')
    const [quantity, setQuantity] = useState(1)
    const price = size && options[0] ? Number(options[0][size]) : 0
    const fallbackImages = {
        burger: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80',
        pizza: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=700&q=80',
        default: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=80'
    }
    const fallbackImage = fallbackImages[foodItem.CategoryName?.toLowerCase()] || fallbackImages.default

    const handleAddToCart = () => {
        dispatch({
            type: 'ADD',
            item: {
                id: foodItem._id || foodItem.name,
                name: foodItem.name,
                qty: Number(quantity),
                size,
                price: Number(price),
                img: foodItem.img
            }
        })
    }

    return (
        <div className="card mt-3" style={{ width: '18rem', maxHeight: '420px' }}>
            <img src={foodItem.img || fallbackImage} onError={(event) => { event.currentTarget.src = fallbackImage }} className="card-img-top dish-image" alt={foodItem.name} />
            <div className="card-body">
                <h5 className="card-title">{foodItem.name}</h5>
                <p className="card-text">{foodItem.description}</p>
                <div className="container w-100">
                    <select className='m-1 h-100 bg-success rounded' value={quantity} onChange={(event) => setQuantity(event.target.value)}>
                        {Array.from(Array(6), (e, i) => {
                            return <option key={i + 1} value={i + 1}>{i + 1}</option>
                        })}
                    </select>
                    <select className='m-2 h-100  bg-success rounded' value={size} onChange={(event) => setSize(event.target.value)}>
                        {sizes.map((option) => <option key={option} value={option}>{option}</option>)}
                    </select>
                    <div className="d-inline h-100 fs-5">
                        {price === 0 ? 'Price not available' : `Rs. ${price * Number(quantity)}`}
                    </div>
                </div>
                <button className='btn btn-success mt-2' onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Card