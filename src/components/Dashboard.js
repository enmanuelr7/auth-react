import React, { useState } from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const Dashboard = () => {
    const { logout, currentUser } = useAuth()
    const history = useHistory()
    const [error, setError] = useState('')

    const handleLogout = async () => { 
        setError('')
        try {
            await logout()
            history.push('/login')
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center">
                        Welcome {currentUser.email}!
                    </h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
                        Update Profile
                    </Link>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Button variant="link" onClick={handleLogout}>Log Out</Button>
            </div>
        </>
    )
}

export default Dashboard
