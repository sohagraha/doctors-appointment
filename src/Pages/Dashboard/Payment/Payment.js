import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm/CheckoutForm';

const stripePromise = loadStripe('pk_test_51JxWDBGIWdVyJ0HEnrY06cVlR4CPr5gymnpvXoJHYNXXKcnmFmvjlUEvPNERXRgKn41LfAhuh5oV8f1dzzbs9y5r00AygwVn5W');

const Payment = () => {
    const { appointmentId } = useParams()
    const [appointment, setAppointment] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data))
    }, [appointmentId])
    return (
        <div>
            <h1>{appointment.patientName}</h1>
            <h1>{appointment.serviceName}</h1>
            <h4>${appointment.price}</h4>
            {
                appointment?.price &&
                <div><Elements stripe={stripePromise}>
                    <CheckoutForm
                        appointment={appointment}
                    />
                </Elements></div>
            }
        </div>
    );
};

export default Payment;