import { useEffect, useState } from 'react'
import AddUserForm from '../components/users/AddUserForm'
import UserList from '../components/users/UserList'

const USERS_API = 'http://localhost:3001/users'

function Users() {
    const [users, setUsers] = useState([])
    const [editUser, setEditUser] = useState(null)
    const [deleteUser, setDeleteUser] = useState(null)
    const [error, setError] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)

    const getUsers = async () => {
        const response = await fetch(USERS_API)
        if (!response.ok) {
            throw new Error(`Could not load users (${response.status})`)
        }
        const data = await response.json()
        setUsers(data)
        setError('')
    }

    useEffect(() => {
        const controller = new AbortController()
        fetch(USERS_API, { signal: controller.signal })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Could not load users (${response.status})`)
                }
                return response.json()
            })
            .then((data) => {
                setUsers(data)
                setError('')
            })
            .catch((loadError) => {
                if (!controller.signal.aborted) {
                    setError(loadError.message)
                }
        })
        return () => controller.abort()
    }, [])

    const updateUser = async (name, email) => {
        try {
            const response = await fetch(`${USERS_API}/${editUser.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...editUser, name, email }),
            })
            if (!response.ok) {
                throw new Error(`Could not update user (${response.status})`)
            }
            setEditUser(null)
            await getUsers()
        } catch (updateError) {
            setError(updateError.message)
        }
    }

    const confirmDelete = async () => {
        if (!deleteUser) return

        setIsDeleting(true)
        try {
            const response = await fetch(`${USERS_API}/${deleteUser.id}`, {
                method: 'DELETE',
            })
            if (!response.ok) {
                throw new Error(`Could not delete user (${response.status})`)
            }
            setDeleteUser(null)
            await getUsers()
        } catch (deleteError) {
            setError(deleteError.message)
        } finally {
            setIsDeleting(false)
        }
    }

    return (
        <div className="container">
            <h1>Users</h1>
            {error && <p className="error-message" role="alert">{error}</p>}
            <AddUserForm
                key={editUser?.id ?? 'new-user'}
                getUsers={getUsers}
                user={editUser}
                onUpdate={updateUser}
                onCancel={() => setEditUser(null)}
            />
            <UserList
                users={users}
                onEdit={setEditUser}
                onDelete={setDeleteUser}
            />

            {deleteUser && (
                <div
                    className="modal-backdrop"
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget && !isDeleting) {
                            setDeleteUser(null)
                        }
                    }}
                >
                    <section
                        className="confirmation-modal"
                        role="alertdialog"
                        aria-modal="true"
                        aria-labelledby="delete-title"
                        aria-describedby="delete-description"
                    >
                        <h2 id="delete-title">Delete user?</h2>
                        <p id="delete-description">
                            Are you sure you want to delete {deleteUser.name}? This action cannot be undone.
                        </p>
                        <div className="modal-actions">
                            <button
                                type="button"
                                className="button-secondary"
                                onClick={() => setDeleteUser(null)}
                                disabled={isDeleting}
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className="button-danger"
                                onClick={confirmDelete}
                                disabled={isDeleting}
                            >
                                {isDeleting ? 'Deleting...' : 'Delete'}
                            </button>
                        </div>
                    </section>
                </div>
            )}
        </div>
    )
}

export default Users
