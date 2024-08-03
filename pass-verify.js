const bcrypt = require('bcrypt');

async function hashPassword() {
  const myPassword = 'admin 123 .202';
  const hash = '$2b$10$PAT1Ia9t3FfnKrPn7lyA7OUHO0wlsYCerAWE9b63qa3RRfrDP4oUu';
  const isMatch = await bcrypt.compare(myPassword, hash)
  console.log(isMatch);
}

hashPassword();
