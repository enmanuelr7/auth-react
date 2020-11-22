import React, { useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link } from 'react-router-dom' 
import { useAuth } from '../contexts/AuthContext'

const UpdateProfile = () => {
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const { currentUser, updateProfile } = useAuth()
  const [name, setName] = useState(currentUser.displayName)
  
  const handleSubmit = async (e) => {
      e.preventDefault()
      setLoading(true)
      setError('')
      setMessage('')

    try {
      await updateProfile(name)
      setMessage('Your profile has been updated successfully')
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setError(error.message)
    }
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Update Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={currentUser.email} required disabled />
            </Form.Group>
            <Form.Group id="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                defaultValue={name}
                onChange={e => setName(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              {loading ? 'Loading' : 'Update Profile'}
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        {<Link to="/">Go Back</Link>}
      </div>
    </>
  );
};

export default UpdateProfile;
