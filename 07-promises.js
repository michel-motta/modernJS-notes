const apiCall = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Sucess');
    // reject('Erro!');
  }, 2000);
});

// THEN e CATCH
// joga a função pra callstack e continua o código

apiCall
  .then((resposta) => {
    console.log(resposta);
  })
  .catch((erro) => {
    console.log(erro);
  });

// ASSYNC e AWAIT
// trava o processamento da callstack até ser resolvida

// função assíncrona
async function run() {
  try {
    const resposta = await apiCall;
    console.log(resposta);
  } catch (erro) {
    console.log(erro);
  }
}

run();