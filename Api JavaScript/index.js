const express = require("express");
const req = require("express/lib/request");
const app = express();
const port = 3001;

let events = [{ id: "01", name: "Filme", date: "02/05/2022" }];

app.use(express.json());
app.use((req, res, next) => {
  console.log("User Authentication...");
  next();
});

app.get("/events", (req, res) => {
  res.json(events);
});

app.get("/events/:id", (req, res) => {
  const id = req.params.id;
  const event = events.filter(event => event.id === id);

  res.json({ event });
});

app.post("/events", (req, res) => {
  const body = req.body;
  body.created_at = Date ()
  body.updated_at = Date();
  events.push(body)
  res.json(body);
});

app.put("/events/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;
  body.created_at = Date ()
  body.updated_at = Date();
  events.forEach((event, index) => {
    if (event.id === id){
      events[index] = body
    }


  })
  res.json({ res: "put" });
});

app.patch("/events", (req, res) => {
  res.json({ res: "patch" });
});

app.delete("/events/:id", (req, res) => {
  const id = req.params.id
  let deleted_event ={}
  events.forEach((event, index)=>{
    if(event.id ===id){
      deleted_event=events.pop()
    }
  })
  res.json({deleted_event});
});

app.listen(port, () => {
  console.log(`Service running on port: ${port}`);
});
