const startCoroutine = (callback: any): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    const iter = {
      generator: callback(),
      onDone: () => resolve()
    }

    animCallback.push(iter)
  })
}

const sleep = async (duration: number) => {
  await System.startCoroutine(function* (): Generator<any> {
    let tick = 0
    while (true) {
      if (tick >= duration) { break }
      tick += global.deltaTime
      yield null
    }
  })
}

const System = {
  startCoroutine,
  sleep
}

export default System