import {User } from "@auth0/auth0-react" 
import { AppState, Auth0Provider } from "@auth0/auth0-react"
import { useNavigate } from "react-router-dom"

type Props = {
  children: React.ReactNode
}

export const Auth0ProviderWithNavigate = ({ children }: Props) => {
  const navigate = useNavigate()

  const domain = import.meta.env.VITE_AUTH0_DOMAIN
  const clientID = import.meta.env.VITE_AUTH0_CLIENT_ID
  const redirectURI = import.meta.env.VITE_AUTH0_CALLBACK_URL

  console.log("Auth0 ENV VARIABLES:", { domain, clientID, redirectURI})

  if (!domain || !clientID || !redirectURI) {
    throw new Error("Unable to initialize auth. Make sure all environment variables are defined correctly.")
  }

  const onRedirectCallback = (appState?: AppState,user?:User) => {
   
    navigate(appState?.returnTo || "/auth-callback")

  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientID}
      authorizationParams={{ redirect_uri: redirectURI}}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  )
}
