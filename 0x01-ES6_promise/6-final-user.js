import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const results = [];

  const pushResult = async (promise) => {
    try {
      const value = await promise;
      results.push({ status: 'fulfilled', value });
    } catch (error) {
      results.push({ status: 'rejected', value: error.toString() });
    }
  };

  await Promise.allSettled([
    pushResult(signUpUser(firstName, lastName)),
    pushResult(uploadPhoto(fileName)),
  ]);

  return results;
}
