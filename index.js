import express from "express";

const app = express();
const port = 3000;
 
app.get('/', (req,res) => {
    res.send('Hello World bro');
})

app.listen (port, () =>{
    console.log(`Escuchando puerto ${port}`);
})


app.get('/pizza', async (req,res) => {
    const pizza = await PizzaService.getAll(req.params.id)
    res.status(200).send(pizza)
})

app.post('/pizza', async(req,res) =>{
    console.log("En post, req:", req)
    try{
        await PizzaService.insert(req.body)
        res.status(200).json({message : 'Pizza creada'});
    } catch (error){
        console.error(error);
        res.status(500).json({error:'Fallo el insert browli'});
    }
})




