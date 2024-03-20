import express from 'express';
import moment from 'moment';
import payload from 'payload';

require('dotenv').config();
const app = express();
app.use(express.static('public'));
// app.use(express.json({ limit: '4mb' }));

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin');
});

const start = async () => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET || '',
    mongoURL: process.env.MONGODB_URI || '',
    express: app,
    loggerOptions: {
      prettyPrint: true,
      timestamp: () => {
        const date = `"date":"${moment().format('YYYY-MM-DD HH:mm:sss')},`;
        return date;
      },
    },
    email: {
      fromName: process.env.SMTP_FROM_NAME || '',
      fromAddress: process.env.SMTP_FROM_EMAIL || '',
      transportOptions: {
        host: process.env.SMTP_HOST || '',
        port: process.env.SMTP_PORT || '',
        auth: {
          user: process.env.SMTP_USER || '',
          pass: process.env.SMTP_PASS || '',
        },
      },
    },
    onInit: () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
      payload.logger.info(`Payload API URL: ${process.env.MONGODB_URI}`);
    },
  });
  const port = process.env.PORT || 3000;
  app.listen(port, async () => {
    payload.logger.info(
      `Express is now listening for incoming connections on port ${port}.`,
    );
  });
};

start();
