import os from 'os';

export function getEOL() {
  const res = os.EOL;
  console.log(`End-of-line character for this OS: ${JSON.stringify(res)}`);
}

export function getCPUS() {
  const cpus = os.cpus();
  console.log(`Number of CPUs: ${cpus.length}`);
  cpus.forEach((cpu, index) => {
    console.log(`CPU ${index + 1}: ${cpu.model}, ${cpu.speed / 1000} GHz`);
  });
}

export function getHomedir() {
  const res = os.homedir();
  console.log(res);
}

export function getUsername() {
  const res = os.userInfo().username;
  console.log(res);
}

export function getArchitecture() {
  const res = os.arch();
  console.log(res);
}