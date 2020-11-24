import React from 'react'

export default function CallToAction({text, className}) {
    return (
        <button className={className}>
            {text}
        </button>
    )
}
