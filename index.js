const express = require('express');
const app = express();
app.listen(443, () => console.log('listening at 443'));
app.use(express.static('public'));

app.post('/api', (req,res) => {
   res(req);
});
