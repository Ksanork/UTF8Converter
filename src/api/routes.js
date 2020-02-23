let express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    console.log("start");
    res.send("Hello world! Lala Seth is here!");
});

export default router;