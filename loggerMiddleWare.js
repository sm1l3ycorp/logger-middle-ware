const fs = require('fs');
const colors = require('colors');
const dir = './logs';

  module.exports =  () => {
    return (req, res, next) => {
      if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
      };
      console.log(`Method: ${req.method}`.blue.bgYellow);
      console.log(`${JSON.stringify(req.headers['host'])}`.cyan);
      console.log(`${JSON.stringify(req.headers['user-agent'])}`.yellow);
      const today = new Date();
      const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

      fs.appendFile(`./logs/log-${date}.txt`, 
      `Method: ${req.method} User Agent:${JSON.stringify(req.headers['user-agent'])} ${today}`, (err) => {
        if (err) throw err;
      });

      next()
    }
  }