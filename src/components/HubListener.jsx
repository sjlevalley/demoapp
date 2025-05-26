"use client"

import { fetchUserAttributes, getCurrentUser } from "aws-amplify/auth"
import { getUrl } from "aws-amplify/storage"
import { Hub } from "aws-amplify/utils"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setUser } from "../redux/user/userSlice"

// let initialCheck = false

export default function HubListener() {
  const dispatch = useDispatch()

  async function checkUser() {
    try {
      let user = await fetchUserAttributes()
      if (!user?.name) {
        const getCurrentUserResult = await getCurrentUser()
        user = { ...user, name: getCurrentUserResult?.username }
      }
      let urlRequestResult
      if (user?.picture) {
        urlRequestResult = await getUrl({
          key: user?.picture,
          options: {
            validateObjectExistence: true,
            expiresIn: 3600,
            accessLevel: "protected",
          },
        })
      }

      let updatedUser = {
        emailVerified: user?.email_verified,
        email: user?.email,
        username: user?.name,
        sub: user?.sub,
      }

      dispatch(setUser(updatedUser))
    } catch (error) {
      // No current signed-in user.
      if (error?.message?.includes("User needs to be authenticated")) {
        return
      }
      console.error(error)
    }
  }

  useEffect(() => {
    // if (!initialCheck) {
    checkUser()
    // initialCheck = true
    // }
  }, [])

  useEffect(() => {
    Hub.listen("authCustom", (data) => {
      checkUser()
    })
    Hub.listen("auth", ({ payload }) => {
      switch (payload.event) {
        case "configured":
          checkUser()
          break
        case "signedIn":
          checkUser()
          break
        case "signIn_failure":
          checkUser()
          break
        case "signUp":
          checkUser()
          break
        case "signUp_failure":
          checkUser()
          break
        case "confirmSignUp":
          checkUser()
          break
        case "completeNewPassword_failure":
          checkUser()
          break
        case "autoSignIn":
          checkUser()
          break
        case "autoSignIn_failure":
          checkUser()
          break
        case "forgotPassword":
          checkUser()
          break
        case "forgotPassword_failure":
          checkUser()
          break
        case "forgotPasswordSubmit":
          checkUser()
          break
        case "forgotPasswordSubmit_failure":
          checkUser()
          break
        case "verify":
          checkUser()
          break
        case "tokenRefresh":
          checkUser()
          break
        case "tokenRefresh_failure":
          checkUser()
          break
        case "cognitoHostedUI":
          checkUser()
          break
        case "cognitoHostedUI_failure":
          checkUser()
          break
        case "customOAuthState":
          checkUser()
          break
        case "customState_failure":
          checkUser()
          break
        case "parsingCallbackUrl":
          checkUser()
          break
        case "userDeleted":
          checkUser()
          break
        case "updateUserAttributes":
          checkUser()
          break
        case "updateUserAttributes_failure":
          checkUser()
          break
        case "signedOut":
          dispatch(setUser(null))
          break
        default:
          break
      }
    })
  }, [])

  return null
}
