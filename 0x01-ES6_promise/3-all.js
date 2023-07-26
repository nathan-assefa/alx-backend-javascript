import { uploadPhoto, createUser } from './utils';

// Promise.all() method returns an array of resolved values from the promises
export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photoInfo, userInfo]) => {
      const { body } = photoInfo;
      const { firstName, lastName } = userInfo;
      console.log(`${body} ${firstName} ${lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
