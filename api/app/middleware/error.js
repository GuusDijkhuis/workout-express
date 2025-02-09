export const errorHandler = (error, _, res) => {
    if(error.status) {
        res.status(error.status).json({ success: false, msg: error.message})
        return 
    }
    res.status(500).json({ success: false, msg: 'Server error'})
}