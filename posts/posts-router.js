const express = require("express");
const db = require("../data/db");
const router = express.Router();

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { title, contents } = req.body;
    db.findById(id)
    .then(post => {
        if(!post.length){
            res.status(404).json({ message: "The post with the specified ID does not exist." })
        } else if(!title || !contents){
            res.status(400).json({ errorMessage: "Please provide title and contents for the post." })
        } else {
            db.update(id, req.body)
            .then((post) => {
                res.status(200).json({message: "Updated succesfully", post_id: id, newContents: req.body})
            })
            .catch((err) => {
                console.log(err)
            })
        }
    })
    .catch((err) => {
        console.log(err)
    })
})

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  db.findById(id)
    .then(post => {
      if (!post.length) {
        res
          .status(404)
          .json({ message: "The post with the specified ID does not exist." });
      } else {
        db.remove(id)
          .then(() => {
            res.status(200).json({ message: "Post successfully deleted" });
          })
          .catch(() => {
            res.json({ error: "Could not delete post" });
          });
      }
    })
    .catch(() => {
      res.status(500).json({ error: "The post could not be removed" });
    });
});

router.get("/:id/comments", (req, res) => {
  const { id } = req.params;
  db.findPostComments(id)
    .then(postComments => {
      if (!postComments.length) {
        res
          .status(404)
          .json({ message: "The post with the specified ID does not exist." });
      } else {
        res.status(200).json(postComments);
      }
    })
    .catch(() => {
      res
        .status(500)
        .json({ error: "The comments information could not be retrieved." });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  db.findById(id)
    .then(post => {
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
