export const METHOD = 'get'
export const PATH = '/ping'

export const controller = (req, res) => {
  res.json({ message: 'pong' })
}
