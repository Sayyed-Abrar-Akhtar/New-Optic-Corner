import mongoose from 'mongoose';
import colors from 'colors';

const dbConnect = async () => {
  try {
    if (mongoose.connection.readyState >= 1) return;

    const conn = await mongoose.connect(`${process.env.MONGO_URI}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(
      `MongoDB connected: ${conn.connection.host}`.brightMagenta.bold.italic
        .underline
    );
  } catch (err) {
    console.error(`Error: ${err}`.bgRed.white.bold.italic.underline);
    process.exit(1);
  }
};

export default dbConnect;
