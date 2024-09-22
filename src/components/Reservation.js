import React, {useState} from "react";
import Image from "../images/reservation.jpg";
import "./reservation1.scss"

function Reservation() {
    const [occasion, setOccasion] = useState('');
    const [date, setDate] = useState('');
    const [guests, setGuests] = useState('');
    const [time, setTime] = useState('');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [specialRequest, setSpecialRequest] = useState('');

    const handleSubmit = ((e) => {
        e.preventDefault();
        const reservationData = {
            occasion,
            date,
            guests,
            time,
            fullName,
            email,
            mobileNumber,
            specialRequest,}; 
        console.log("Reservation Data:", reservationData);
    })

    return (
        <section className="reservation">
            <h2>Reservations</h2>
                <div onSubmit={handleSubmit} className="reservation-wrap">
                    <div className="form-wrap">
                        <section className="booking-details">
                            <h3>Booking Details</h3>
                                <div className="res-container">
                                    <label>
                                        Occasion
                                        <input
                                            type="text"
                                            value={occasion}
                                            onChange={(e) => setOccasion(e.target.value)}
                                            placeholder="Occasion"
                                        />
                                    </label>
                                    <label>
                                        Date
                                        <input
                                            type="date"
                                            value={date}
                                            onChange={(e) => setDate(e.target.value)}
                                            required
                                        />
                                    </label>
                                    <label>
                                        No. Of Guests
                                        <input
                                            type="number"
                                            value={guests}
                                            onChange={(e) => setGuests(e.target.value)}
                                            required
                                            min={"2"}
                                            max={"20"}
                                            placeholder="No of guests"
                                        />
                                    </label>
                                    <label>
                                        Time
                                        <input
                                            type="time"
                                            value={time}
                                            onChange={(e) => setTime(e.target.value)}
                                            required
                                            
                                        />
                                    </label>
                                </div>
                        </section>

                        <section className="personal-details">
                            <h3>Personal Details</h3>
                                <div className="res-container">
                                    <label>
                                        Full Name
                                        <input
                                            type="text"
                                            value={fullName}
                                            onChange={(e) => setFullName(e.target.value)}
                                            maxLength={30}
                                            required
                                            placeholder="Full Name"
                                        />
                                    </label>
                                    <label>
                                        E-mail
                                        <input
                                            type="email"
                                            value={fullName}
                                            onChange={(e) => setEmail(e.target.value)}
                                            maxLength={30}
                                            required
                                            placeholder="E-mail"
                                        />
                                    </label>
                                    <label>
                                        Mobile Number
                                        <input
                                            type="textl"
                                            value={mobileNumber}
                                            onChange={(e) => setMobileNumber(e.target.value)}
                                            minLength={9}
                                            maxLength={10}
                                            required
                                            placeholder="(+46)"
                                        />
                                    </label>
                                    <label>
                                        Special Request
                                        <input
                                            type="textl"
                                            value={specialRequest}
                                            onChange={(e) => setSpecialRequest(e.target.value)}
                                            placeholder="Special request"
                                        />
                                    </label>
                                </div>
                        </section>

                        <button type="submit">Confirm Reservation</button>
                    </div>
                    <div className="resimg-wrap">
                        <img src={Image} alt="Reservation" />
                    </div>
                    
                </div>

    </section>
    )
}

export default Reservation