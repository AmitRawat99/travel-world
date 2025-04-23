import React, { useState } from 'react'
import '../../styles/Booking.scss'
import { useNavigate } from 'react-router-dom'
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap'


const Booking = ({ tour, avgRating }) => {

    const { price, reviews, } = tour;

    const [creditials, setcreditials] = useState({ 
        userId : '01',
        userEmail : 'examle12@gmail.com',
        fullName : "",
        phone  : "",
        guessSize: 1,
        bookAt : "", 
    })

    

    const handleChange = e => {
        setcreditials(prev => ({ ...prev, [e.target.id]: e.target.value }))
        e.preventDefault();
        console.log(creditials);
    }
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault()
        navigate("/thank-you")
    }

    const serviceFee = 10;
    const TotalAmount = Number(price) * Number(creditials.guessSize) + Number(serviceFee)

    return (
        <>
            <div className="booking">
                <div className="booking_top d-flex align-item-center justify-content-between">
                    <h3>${price} <span>/Per Person</span></h3>
                    <span className='tour_rating d-flex align-item-center gap-1'>
                        <i class='ri-star-fill'></i>{avgRating === 0 ? null : avgRating}({reviews.length})
                    </span>
                </div>
                <div className="booking_form">
                    <h5>Information</h5>
                    <Form className="booking_info_form" onSubmit={handleClick}>
                        <FormGroup>
                            <input type="text" placeholder='Fill The Name' id='fullName' required onChange={handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <input type="number" placeholder='Enter Your Number' id='number' required onChange={handleChange} />
                        </FormGroup>
                        <FormGroup className='d-flex align-item-center gap-3'>
                            <input type="date" placeholder='Fill The Name' id='bookAt' required onChange={handleChange} />
                            <input type="number" placeholder='Fill The Name' id='guessSize' required onChange={handleChange} />
                        </FormGroup>
                    </Form>
                </div>
                <div className="booking_bottom">
                    <ListGroup>
                        <ListGroupItem className='border-0 px-0'>
                            <h5 className='d-flex align-item-center gap-2'>${price}<i className='ri-close-line'></i>1 Person</h5>
                            <span>${price}</span>
                        </ListGroupItem>
                        <ListGroupItem className='border-0 px-0'>
                            <h5>Service Charge </h5>
                            <span>${serviceFee}</span>
                        </ListGroupItem>
                        <ListGroupItem className=' total border-0 px-0'>
                            <h5>Total</h5>
                            <span>${TotalAmount}</span>
                        </ListGroupItem>
                    </ListGroup>
                    <Button onClick={handleClick} className='btn primary__btn w-100 mt-4'>Book Now</Button>
                </div>
            </div>
        </>
    )
}

export default Booking
