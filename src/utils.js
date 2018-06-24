export const getMe = async () => new Promise((resolve) => {
    window.postMessage({
      target: 'contentscript',
      data: {
      },
      method: 'getAccount',
    }, '*');
    window.addEventListener('message', ({ data }) => {
      if (data.data && data.data.account) {
        resolve(data.data.account);
      }
    });
})

export const getHerosCardImages = (id) => ({
    front: `http://test.cdn.hackx.org/heros_new/${id}.jpeg`,
    back: `http://test.cdn.hackx.org/backs_new/${id}.jpeg`
})