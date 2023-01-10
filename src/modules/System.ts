const startCoroutine = (callback: any): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    const iter = {
      generator: callback(),
      onDone: () => resolve()
    }

    animCallback.push(iter)
  })
}

const System = {
  startCoroutine
}

export default System