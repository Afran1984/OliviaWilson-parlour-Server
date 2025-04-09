const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config() // add to dot env config
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// mongo db connect code 

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.bqiq2nz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // connect database & collection
    const oliviaSearvices = client.db("Olivia-Wilson-DB").collection("Olivia-Services");
    // USer Info
    const oliviaUserInfo = client.db("Olivia-Wilson-DB").collection("UserInfo");
    // Reviwes
    const oliviaReviews = client.db("Olivia-Wilson-DB").collection("reviews");
    // Team-Member
    const oliviaTeamMember = client.db("Olivia-Wilson-DB").collection("Team-Member");

    //User-Order-Collection
    const oliviaUserOrder = client.db("Olivia-Wilson-DB").collection("UserOrderData"); 

    // Services Get data & show display
    app.get('/services', async(req, res) => {
        const result = await oliviaSearvices.find().toArray();
        res.send(result);
    })

    // Reviews Get data & show Display
    app.get('/reviews', async(req, res) => {
      const result = await oliviaReviews.find().toArray();
      res.send(result);
    })

    // Team-Member Get data & show Display
    app.get('/teammember', async(req, res) => {
      const result = await oliviaTeamMember.find().toArray();
      res.send(result);
    })

    // Post UserInfo Data
    app.post('/usersInfo', async(req, res) => {
      const user = req.body;
      const result = await oliviaUserInfo.insertOne(user);
      res.send(result);
    });
    // Get UserInfo
    app.get('/usersInfo', async(req, res) => {
      const result = await oliviaUserInfo.find().toArray();
      res.send(result);
    })

    app.post('/userOrder', async(req, res) => {
      const orderItem = req.body;
      const result = await oliviaUserOrder.insertOne(orderItem);
      res.send(result);
    })




    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


// running show message localhost 5000
app.get('/', (req, res) => {
    res.send('Olivia Parlour')
})

app.listen(port, () => {
    console.log(`Olivia Server is ready ${port}`)
})
