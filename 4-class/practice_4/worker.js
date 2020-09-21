import Person from './person';

class Worker extends Person {
  introduce() {
    return `${Person.basic_introduce()} I am a Worker. I have a job.`;
  }
}

export default Worker;
