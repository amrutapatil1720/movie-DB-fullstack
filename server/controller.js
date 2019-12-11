const Models= require('./models.js');

module.exports= {
  getMovies : (req,res) =>{
    Models.getMovies((err,data) => {
      if(err) {
        res.status(400).send(err);
      } else {
        res.send(data);
      }
    });
  },
  addMovies :(req,res) => {
    Models.addMovies((err,data) => {
      if(err) {
        res.status(400).send(err);
      } else {
        res.send(data);
      }
    },req.body);
  }
}