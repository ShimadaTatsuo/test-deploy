const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello2!'))

app.listen(process.env.PORT || 8080, () => console.log('Example app listening on port xxx!'))
