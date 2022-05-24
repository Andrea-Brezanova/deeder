import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
        <Link to="/">HOME</Link>
        <Link to="/offer-help">Offer Help</Link>
        <Link to="/get-help">Get Help</Link>
        <Link to="/offer-company">Offer Company </Link>
        <Link to="/get-company">Get Company</Link>
    </div>
  )
}
