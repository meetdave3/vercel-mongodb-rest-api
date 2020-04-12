export default (authorization: string): boolean => {
  const base64Credentials =  authorization.split(' ')[1];
  const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
  const [username, password] = credentials.split(':');

  if (username === process.env.USERNAME && password === process.env.PASSWORD) {
    return true;
  }
  
  return false;
}