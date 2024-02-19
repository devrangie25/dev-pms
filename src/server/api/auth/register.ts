
export const handleRegister = async (payload: any) => {
    try {
        const registeredUser = await fetch('https://3571-158-62-51-108.ngrok-free.app/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })

        const response = await registeredUser.json()

        if (response.status === 'error') {
            return { message: response.message, status: response.status }
        }

        return { message: response.message, status: response.status, data: response.data }

    } catch (error) {
        console.error('Error in handler Function - Register User', error)
        return { message: 'Error in handler Function - Register User', status: 'error' }
    }
}