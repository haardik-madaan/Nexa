"use client"
import React from 'react'
import LaserFlow from '../../reactBits/LaserFlow';
import { useRef } from 'react';

function Bg() {
    return (
    <div style={{ height: '900px', position: 'relative', overflow: 'hidden' }}>
    <LaserFlow />
  </div>
)
}

export default Bg
