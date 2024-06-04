export type TLog = (a: number) => number

export const log: TLog = a => {
  console.log('input: ', a)
  return a
}

export const delay = <T>(time: number, data: T): Promise<T> =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve(data)
    }, time)
  )
