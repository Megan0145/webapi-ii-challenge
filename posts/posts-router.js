const express = require("express");
const db = require("../data/db");
const router = express.Router();

router.get("/:id", (req, res) => {
  const { id } = req.params;
  db.findById(id)
    .then(post => {
      console.log(post);
      if (!post.length) {
        res
          .status(404)
          .json({ message: "The post with the specified ID does not exist." });
      } else {
        res.status(200).json(post);
      }
    })
    .catch(() => {
      res
        .status(500)
        .json({ error: "The post information could not be retrieved." });
    });
});

router.post("/:id/comments", (req, res) => {
  const { id } = req.params;
  const { text } = req.body;
  db.findById(id).then(post => {
    if (!post.length) {
      res
        .status(404)
        .json({ message: "The post with the specified ID does not exist." });
    } else if (!text) {
      res
        .status(400)
        .json({ errorMessage: "Please provide text for the comment." });
    } else {
      db.insertComment({ text: text, post_id: id })
        .then(comment => {
          res.status(201).json(comment);
        })
        .catch(() => {
          res.status(500).json({
            error: "There was an error while saving the comment to the database"
          });
        });
    }
  });
});

router.post("/", (req, res) => {
  const { title, contents } = req.body;
  if (!title || !contents) {
    res.status(400).json({
      errorMessage: "Please provide title and contents for the post."
    });
  } else {
    db.insert(req.body)
      .then(post => {
        res.status(201).json(post);
      })
      .catch(() => {
        res.status(500).json({
          error: "There was an error while saving the post to the database"
        });
      });
  }
});

router.get("/", (req, res) => {
  db.find()
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "The posts information could not be retrieved." });
    });
});

module.exports = router;
