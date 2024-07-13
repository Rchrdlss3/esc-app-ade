import React, { useState } from 'react';
import UAParser from 'ua-parser-js';

export default function UAParser() {
    const [isMobile, setIsMobile] = useState(null);
    const parser = new UAParser();
    const result = parser.getResult()

    if (result.device.type == "mobile") {
        setIsMobile({ isMobile: true })
    } else {
        setIsMobile({ isMobile: false })
    }

    return (
        <div>
            <p>Device is mobile: {isMobile ? 'Yes' : 'No'}</p>
        </div>
    );
}