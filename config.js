const msalConfig = {
  auth: {
    clientId: 'ecc4bdd5-bd88-4143-b118-25fc626dbb7e',
    redirectUri: 'http://localhost:8080'
  }
};

const msalRequest = {
  scopes: [
    'user.read',
    'mailboxsettings.read',
    'calendars.readwrite'
  ]
}