import { AuthConfig } from 'angular-oauth2-oidc'

export const auth: AuthConfig= {
    issuer: 'https://accounts.google.com',
    redirectUri: window.location.origin,
    clientId: '901946597639-camrbrmg6vbkjdt0iq6qf6aogqlimp3v.apps.googleusercontent.com',
    scope: 'openid profile email',
    strictDiscoveryDocumentValidation: false

}