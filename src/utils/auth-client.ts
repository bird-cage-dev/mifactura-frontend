import { createAuthClient } from "better-auth/react";

const authClient = createAuthClient({
  baseURL: "http://localhost:3000/api/auth", // Ajusta si tu backend corre en otro puerto
  trustedOrigins: ["http://localhost:3000", "http://localhost:3001"],
});

export const signInGoogle = async () => {
  console.log(`Inicio sesión`);
  const { data, error } = await authClient.signIn.social({
    provider: "google",
    callbackURL: "/data",
  });
  console.log(`Error: ${error}`);
};

type Credential = {
  email: string;
  password: string;
};

export const signIn = async ({ email, password }: Credential) => {
  const { data, error } = await authClient.signIn.email({
    email,
    password,
  });
};

export const signOut = async () => {
  const { error } = await authClient.signOut();
  if (error) {
    console.error("Error al cerrar sesión:", error);
  }
};
