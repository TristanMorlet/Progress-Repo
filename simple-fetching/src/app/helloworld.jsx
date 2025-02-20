"use client"

import React from 'react'
import { useState } from 'react'

export default function HelloWorld() {
    const [responseMessage, setResponseMessage] = useState("")
  
    async function fetchMessage() {
        try {
            const res = await fetch("api/route2", {
                method: "POST",
            })
            const data = await res.json()
            setResponseMessage(data.message)
        } catch (error) {
            console.error("error fetching", error)
        }
    }
  
  
  
    return (
    <div>
        <button onClick={fetchMessage}> Fetch Message </button>
        {responseMessage && <p>{responseMessage}</p>}
    </div>
  )
}
