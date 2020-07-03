export const ShareObject = {
  refreshTokenObject: {
    refreshTokenUrl: 'http://localhost:9056/oauth/token',
    grant_type: 'refresh_token'
  },
  smsObject: {
    smsCodeUrl: 'sms/SmsCode',
    smsTokenUrl: 'sms/authentication/phone',
    scope: 'all',
    grant_type: 'sms' ,
    smsClientId: 'sms',
    smsClientSecret: 'client_secret',
    type: 'sms'
  },
  passwordObject: {
    passwordTokenUrl: 'password/oauth/token',
    scope: 'all' ,
    grant_type: 'password',
    passwordClientId: 'client_code',
    passwordClientSecret: 'client_secret',
    type: 'password'
  },
  authorizationCodeObject: {
    codeUrl: 'code/oauth/authorize',
    codeTokenUrl: 'code/oauth/token',
    codeResponseType: 'code',
    codeClientId: 'client_code',
    codeClientSecret: 'client_secret',
    codeRedirectUri: 'http://localhost:9056/callback',
    codeTokenRedirectUri: 'http://localhost:9056/callback',
    scope: 'all',
    code: '',
    grant_type: 'authorization_code'
  }
}

