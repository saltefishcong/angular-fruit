export const ShareObject = {
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
  }
}

