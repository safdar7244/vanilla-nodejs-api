const getReqData = async (req) => {
  return new Promise((resolve, reject) => {
    try {
      const body = [];
      req.on("data", (chunk) => {
        body.push(chunk);
        console.log(body);
      });

      req.on("end", () => {
        const parsedBody = Buffer.concat(body).toString();
        resolve(JSON.parse(parsedBody));
      });
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = getReqData;
