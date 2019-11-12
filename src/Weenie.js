import React from 'react'
import { Link } from 'react-router-dom'

const Weenie = () => (
  <section class="destination">
    <h1>Welcome to weenie hut juniors</h1>
    <img src="/weenie.png" alt="Weenie" />
    <Link to="/">Wait, I'm not a weenie!</Link>
  </section>
)

export default Weenie
