export const requestErrorMessages = {
  400: 'Seu browser enviou uma requisição que o servidor não conseguiu interpretar.',
  500: 'Erro interno',
};

export function getErrorMessageByRequest(error) {
  const { response } = error;
  if (!response) return false;
  const { status, data } = response;
  const { message } = data;

  if (message) return message;

  return requestErrorMessages[status];
}
