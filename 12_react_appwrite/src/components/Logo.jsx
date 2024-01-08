import React from 'react'

function Logo({ width = '100px' }) {
    return (
        <div className={`font-bold font-serif text-4xl ${width}`}>Play Circle</div>
    )
}

export default Logo