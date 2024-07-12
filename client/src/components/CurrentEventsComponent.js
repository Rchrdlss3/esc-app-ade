import React, { useState, useEffect } from 'react';

const CurrentEventsComponent = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const apiKey = 'your_ticketmaster_api_key'; // Replace with your Ticketmaster API key
            const apiUrl = 'https://app.ticketmaster.com/discovery/v2/events.json?size=10&apikey=' + apiKey;

            try {
                const response = await fetch(apiUrl);
                const data = await response.json();

                if (data._embedded && data._embedded.events) {
                    setEvents(data._embedded.events);
                }
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchEvents();
    }, []);

    return (
        <div>
            <h2>Current Events</h2>
            {events.length > 0 ? (
                <ul>
                    {events.map((event) => (
                        <li key={event.id}>
                            <h3>{event.name}</h3>
                            <p>{event.dates.start.localDate}</p>
                            <p>{event.dates.start.localTime}</p>
                            <p>{event._embedded.venues[0].name}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No events found.</p>
            )}
        </div>
    );
};

export default CurrentEventsComponent;