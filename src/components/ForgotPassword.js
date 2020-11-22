import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link } from 'react-router-dom' 
import { useAuth } from '../contexts/AuthContext'

const ForgotPassword = () => {
  const emailRef = useRef();
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const { resetPassword } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setMessage('')

    const email = emailRef.current.value

    try {
        await resetPassword(email)
        setLoading(false)
        setSuccess(true)
        setMessage(`A password reset email has been sent to ${email}`)
    } catch (error) {
      setLoading(false)
      setError(error.message)
    }
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Reset Password</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          {!success && 
            <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required></Form.Control>
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
                {loading ? 'Loading' : 'Verify Email'}
            </Button>
            </Form>
          }
          <div className="w-100 text-center mt-3">
              <Link to ="/login">Log In</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        You do not have an account? {<Link to="/signup">Sign Up</Link>}
      </div>
    </>
  );
};

export default ForgotPassword;
