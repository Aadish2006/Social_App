# fetching and responding from json file
1) 
for getting the he GET route should retrieve all movies from the MongoDB database and respond with the result.
we have to write the get function 

```js

app.get("/movies", async (req,res)=>{
    try{
        const movies = await Movie.find(); // this will fetch all the movies from the database
        res.json(movies);  //This will respod with the movies in JSON format.
    }
    catch(err){
        console.error("error fetching movies:",error)
        res.status(500).json({error:"error fetching movies"})
    }
})
```

2) fro 