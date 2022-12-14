const { getNews,createNews,updateNews,deleteNews, getNewsByUserId,getNewsById
} = require("./news.service");

module.exports = {
  createNews: (req, res) => {
    const body = req.body;
    
    createNews(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          errr: 400,
          message: "Database Connection error",
        });
      }
      return res.status(200).json({
        success: 200,
        data: results,
      });
    });
  },

   getNewsByUserId: (req, res) => {
    const id = req.params.id;
    getNewsByUserId(id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          error: 404,
          message: "Blog not found",
        });
      }
      return res.json({
        success: 200,
        data: results,
      });
    });
  },
   getNewsById: (req, res) => {
    const id = req.params.id;
    getNewsById(id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          erro: 404,
          message: "Blog not found",
        });
      }
      return res.json({
        success: 200,
        data: results,
      });
    });
  },

  getNews: (req, res) => {
    getNews((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 200,
        data: results,
      });
    });
  },

  updateNews: (req, res) => {
    const body = req.body;
  
    updateNews(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 200,
        message: "Blog updated",
      });
    });
  },
  deleteNews: (req, res) => {
    const data = req.body;
    deleteNews(data, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          error: 404,
          message: "Record not found",
        });
      }
      return res.json({
        error: 200,
        message: "Blog deleted successfully",
        
      });
    });
  },

};
