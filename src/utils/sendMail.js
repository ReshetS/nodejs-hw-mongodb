import nodemailer from 'nodemailer';

import { env } from '../utils/env.js';

const transporter = nodemailer.createTransport({
  host: env('SMTP_HOST'),
  port: Number(env('SMTP_PORT')),
  auth: {
    user: env('SMTP_USER'),
    pass: env('SMTP_PASSWORD'),
  },
});

export async function sendEmail(options) {
  return await transporter.sendMail(options);
}
