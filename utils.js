import readline from "readline";

export function askQuestion(query) {
  const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) =>
    readlineInterface.question(query, (answer) => {
      readlineInterface.close();
      resolve(answer);
    })
  );
}
