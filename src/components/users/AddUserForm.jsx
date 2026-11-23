import { useState } from 'react'
import Input from '../common/Input'
import Button from '../common/Button'

function AddUserForm({ getUsers, user, onUpdate, onCancel }) {
    const [name, setName] = useState(user?.name ?? '')
    const [email, setEmail] = useState(user?.email ?? '')
    const [error, setError] = useState('')
    const isEditing = Boolean(user)

    const handleSubmit = async (event) => {
        event.preventDefault()
        setError('')

        try {
            if (isEditing) {
                await onUpdate(name, email)
                return
            }

            const response = await fetch('http://localhost:3001/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email }),
            })
            if (!response.ok) {
                throw new Error(`Could not add user (${response.status})`)
            }

            await getUsers()
            setName('')
            setEmail('')
        } catch (submitError) {
            setError(submitError.message)
        }
    }

    return (
        <form className="form-card" onSubmit={handleSubmit}>
            <h2>{isEditing ? 'Update User' : 'Add New User'}</h2>
            <Input
                placeholder="Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <Input
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            {error && <p className="error-message" role="alert">{error}</p>}
            <Button
                text={isEditing ? 'Save Changes' : 'Add User'}
                color="blue"
                type="submit"
            />
            {isEditing && (
                <Button text="Cancel" color="gray" onClick={onCancel} />
            )}
        </form>
    )
}

export default AddUserForm
