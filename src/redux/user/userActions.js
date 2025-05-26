import { autoSignIn, confirmResetPassword, confirmSignIn, confirmSignUp, confirmUserAttribute, fetchUserAttributes, resendSignUpCode, resetPassword, signIn, signOut, signUp, updateUserAttributes } from 'aws-amplify/auth';
import { setUser, setLoading, setError, logout } from './userSlice'

export const handleUserLogin = ({ email, password }) => async (dispatch) => {
    try {
        dispatch(setLoading(true))
        const user = await signIn({ username: email, password })
        dispatch(setUser(user))
        return user
    } catch (error) {
        dispatch(setError(error.message))
        throw error
    }
}

export const handleUserSignup = ({ email, password }) => async (dispatch) => {
    try {
        dispatch(setLoading(true))
        const { user } = await signUp({
            username: email,
            password,
            attributes: {
                email,
            },
        })
        return user
    } catch (error) {
        dispatch(setError(error.message))
        throw error
    }
}

export const handleConfirmSignup = ({ email, code }) => async (dispatch) => {
    try {
        dispatch(setLoading(true))
        await confirmSignUp({ username: email, code })
        return true
    } catch (error) {
        dispatch(setError(error.message))
        throw error
    }
}

export const handleForgotPassword = ({ email }) => async (dispatch) => {
    try {
        dispatch(setLoading(true))
        await forgotPassword({ username: email })
        return true
    } catch (error) {
        dispatch(setError(error.message))
        throw error
    }
}

export const handleConfirmResetPassword = ({ email, code, newPassword }) => async (dispatch) => {
    try {
        dispatch(setLoading(true))
        await forgotPasswordSubmit({ username: email, code, newPassword })
        return true
    } catch (error) {
        dispatch(setError(error.message))
        throw error
    }
}

export const handleUserLogout = () => async (dispatch) => {
    try {
        dispatch(setLoading(true))
        await signOut()
        dispatch(logout())
    } catch (error) {
        dispatch(setError(error.message))
        throw error
    }
}

export const checkAuthState = () => async (dispatch) => {
    try {
        dispatch(setLoading(true))
        const user = await currentAuthenticatedUser()
        dispatch(setUser(user))
        return user
    } catch (error) {
        dispatch(logout())
        return null
    }
}