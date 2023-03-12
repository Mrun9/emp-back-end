const express = require('express')
const app = express()
const port = 3000

app.use(express.json());
app.use((req, res, next) => {
   
    res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
    next();
})
/*
app.get('/', (req, res) => {
    res.status(200).json({
        data: [
            {
                id: 1,
                name: "test1"
            },
            {
                id: 2, 
                name: "test2"
            }
        ]
    })
})

app.post('/', (req, res) => {
    res.send('This is from post req')
})
*/

app.get('/',(req,res)=>
{
    res.status(200).json(employees);
});

app.post('/',(req,res) => 
{
    employees.push(req.body);
    res.status(200).json({msg:" employee added successfully "});
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})