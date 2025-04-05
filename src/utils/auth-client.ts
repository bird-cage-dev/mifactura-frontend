import { createAuthClient } from "better-auth/react";
const authClient = createAuthClient();
export const signInGoogle = async () => {
    console.log(`Inicio sesion`);
    const { data, error } = await authClient.signIn.social({
        provider: 'google',
        callbackURL:'/data'
    });
    console.log(`Error: ${error}`);
}
type Credential = {
    email: string;
    password: string;
}
export const signIn = async ({ email, password }: Credential) => {
    const { data, error } = await authClient.signIn.email({
        email,
        password
    });
}