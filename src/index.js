const express = require('express');
const app= express();

app.set('port', process.env.PORT || 1800);

app.use(express.json());

app.use(require('./Routes/employes'));

app.listen(app.get('port'), ()=>{
     console.log('server on ', app.get('port'));
});
