const express = require("express");
const chirpStore = require("../../chirpstore");
const router = express.Router();

// console.log("hey")
router.get("/:id?", (req, res) => {
  const id = req.params.id;
// 38:00 on walkthrough confused
  if (id) {
    res.send(chirpStore.GetChirp(id));
  } else {
    res.send(chirpStore.GetChirps());
  }
});

router.post('/', (req, res, err) => {
    const chirp = req.body

    // 45:00 getting error in postman but still created json file
        // if(err){
        //     throw(err)
        // }else {
    res.send(chirpStore.CreateChirp(req.body));
//     res.sendStatus(200)
// }
});

router.put('/:id', (req, res) =>{
    const id = req.params.id

    res.send(chirpStore.UpdateChirp(id, req.body))
});

router.delete('/:id', (req, res) =>{
    res.send(chirpStore.DeleteChirp(req.params.id))
})

module.exports = router;
