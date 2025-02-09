import color from 'colors'

const HTTP_COLOR_MAP = {
    GET: 'green',
    POST: 'yellow',
    PUT: 'magenta',
    DELETE: 'red'
}

export const logger  = (req, _, next) => {
    const httpColor = HTTP_COLOR_MAP[req.method] ?? 'white'

    console.log(
        color[httpColor](`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`)
    )
    next()
}
