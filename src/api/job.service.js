import { faker } from "@faker-js/faker";

const JOBS = [];

const createRandomUser = () => ({
  id: faker.datatype.uuid(),
  candidate: faker.internet.userName(),
  email: faker.internet.email(),
  avatar: faker.image.avatar(),
  description: faker.random.alpha(100),
});

Array.from({ length: 10 }).forEach(() => {
  JOBS.push(createRandomUser());
});

async function getJobs() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 100);
  });

  await promise;

  return JOBS;
}

async function getJob(id) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 100);
  });
  await promise;

  return JOBS.find((job) => job.id == id);
}
export default { getJobs, getJob };
