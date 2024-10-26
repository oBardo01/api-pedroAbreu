require('dotenv').config()

const express = require('express')
const app = express()
const useRoutes = require('./routes/users')

app.use(express.json())
app.use('/api/users', useRoutes)




const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`server running at port: ${PORT}`)
})