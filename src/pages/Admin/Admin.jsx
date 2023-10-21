import React from 'react'
import AdminCard from './AdminCard'

const Admin = () => {
  return (
    <>
        <section className="admin">
        <div className="title">
          <h2>Admins</h2>
        </div>
        <div className="admin_page">
          <AdminCard/>
          <AdminCard/>
          <AdminCard/>
          <AdminCard/>
          <AdminCard/>
        </div>
      </section>
    </>
  )
}

export default Admin
