const express = require('express')
const router = express.Router()
const FoodItem = require('../models/FoodItem')
const Order = require('../models/Order')

const displayData = async (req, res) => {
	try {
		const foodItems = await FoodItem.find({})
		res.json(foodItems)
	} catch (error) {
		console.error('Unable to load food items:', error.message)
		res.status(500).json({ error: 'Unable to load food items' })
	}
}

router.get('/foodData', displayData)
router.post('/foodData', displayData)
router.post('/displaydata', displayData)

router.post('/orderData', async (req, res) => {
    try {
        const { email, orderItems, totalAmount } = req.body

        if (!email || !Array.isArray(orderItems) || orderItems.length === 0) {
            return res.status(400).json({ success: false, message: 'Invalid order data' })
        }

        const newOrder = new Order({
            email,
            orderItems,
            totalAmount,
            date: new Date()
        })

        await newOrder.save()
        return res.json({ success: true, message: 'Order saved successfully' })
    } catch (error) {
        console.error('Order save failed:', error.message)
        return res.status(500).json({ success: false, message: 'Unable to save order' })
    }
})

router.get('/myOrderData', async (req, res) => {
    try {
        const email = req.query.email

        if (!email) {
            return res.status(400).json({ success: false, message: 'Email is required' })
        }

        const myOrderData = await Order.find({ email })
        return res.json({ success: true, orderData: myOrderData })
    } catch (error) {
        console.error('Error loading order history:', error.message)
        return res.status(500).json({ success: false, message: 'Unable to load orders' })
    }
})

module.exports = router