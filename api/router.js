var appRouter = function(app) {
	var oModel = require("./model");

	app.get("/variables", function(req, res) {
	    return res.send(oModel.oVariables);
	});

	app.post("/variables", function(req, res) {
		oModel.oVariables = req.body !== null ? req.body : {};
		return res.send(oModel.oVariables);
	});
}

module.exports = appRouter;