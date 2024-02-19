
export const handleLogin = async (payload: any) => {
    try {
        const loginUser = await fetch('https://3571-158-62-51-108.ngrok-free.app/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })

        const response = await loginUser.json()

        if (response.status === 'error') {
            return { message: response.message, status: response.status }
        }

        return { message: response.message, status: response.status, data: response.data }

    } catch (error) {
        console.error('Error in handler Function - Login User', error)
        return { message: 'Error in handler Function - Login User', status: 'error' }
    }
}