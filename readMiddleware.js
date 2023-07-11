const read = (req, resp, next) => {
    console.log('-----------------------------------')
    console.log(req.method)
    console.log(req.path)
    console.log(req.body)
    console.log('-----------------------------------')
    next()
}

export default read 