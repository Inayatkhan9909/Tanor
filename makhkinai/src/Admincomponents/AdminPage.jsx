import React from 'react'
import './Admin.css'

const AdminPage = () => {


    return (
        <div>
              <header>
        <h1>Restaurant Admin Dashboard</h1>
       
        <nav>
            <ul>
                <li><a href="#dashboard">Dashboard</a></li>
                <li><a href="#menu">Menu Management</a></li>
                <li><a href="#orders">Order Management</a></li>
                <li><a href="#reservations">Reservation Management</a></li>
                <li><a href="#staff">Staff Management</a></li>
                <li><a href="#inventory">Inventory Management</a></li>
                <li><a href="#analytics">Analytics & Reporting</a></li>
                <li><a href="#customers">Customer Management</a></li>
                <li><a href="#promotions">Promotions & Discounts</a></li>
                <li><a href="#tables">Table Management</a></li>
                <li><a href="#feedback">Feedback & Reviews</a></li>
                <li><a href="#settings">Settings</a></li>
                
            </ul>
        </nav>
    </header>

    <main>
        <section id="dashboard">
           
            <h2>Dashboard</h2>
         
        </section>

        <section id="menu">
          
            <h2>Menu Management</h2>
         
        </section>

     

    </main>

        </div>
    )
}

export default AdminPage