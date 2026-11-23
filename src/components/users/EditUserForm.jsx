import { useState } from 'react'
import Input from '../common/Input'
import Button from '../common/Button'

function EditUserForm({ user, onUpdate, onCancel }) {
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)

    const handleSubmit = (event) => {
        event.preventDefault()
        onUpdate(name, email)
    }

    return (
        <form className="form-card" onSubmit={handleSubmit}>
            <h2>Edit User</h2>
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
            <Button text="Update" color="blue" type="submit" />
            <Button text="Cancel" color="gray" onClick={onCancel} />
        </form>
    )
}

export default EditUserForm
