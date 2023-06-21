module.exports = app => {
    require('./authRoutes')(app)
    require('./ItemRoutes')(app) 
}