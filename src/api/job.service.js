import { faker } from "@faker-js/faker";

const JOBS = [];

const createRandomJob = (index) => ({
  id: index + 1,
  title: faker.random.alpha(30),
  email: faker.internet.email(),
  coverImage: faker.image.fashion(),
  description: faker.random.alpha(100),
});

Array.from({ length: 10 }).forEach((item, index) => {
  JOBS.push(createRandomJob(index));
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

  return JOBS.find((job) => job.id == (id + 1));
}
export default { getJobs, getJob };
