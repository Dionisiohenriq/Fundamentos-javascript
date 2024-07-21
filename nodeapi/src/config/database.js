const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
	try {
		console.log(process.env.MONGO_URI);
		await mongoose.connect(
			process.env.MONGO_URI /*, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}*/
		);
		console.log("Mongo DB Connected.");
	} catch (error) {
		console.error(`Connection to Database failed: ${error.message}`);
		process.exit(1);
	}
};

module.exports = connectDB;
