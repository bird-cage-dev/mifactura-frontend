"use server"

import { auth } from "@/lib/auth"

interface SignUpProps {
  name: string
  email: string
  password: string
  identification: string
  identificationType: string
  phoneNumber: string
}

interface SignInProps {
  email: string
  password: string
}

export const signUp = async (bodySignUp: SignUpProps) => await auth.api.signUpEmail({
  body: bodySignUp
})

export const signIn = async (bodySignIn: SignInProps) => await auth.api.signInEmail({
  body: bodySignIn
})
