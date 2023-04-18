const express = require('express');
const app = express();
const routers = require('./routes/registeroute');
const userRouters = require('./routes/profileroute');
const PORT = 3000;

app.use('/api', routers, userRouters);
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
