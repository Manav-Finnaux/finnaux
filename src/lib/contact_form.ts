'use server';

import Joi from 'joi';
import { FieldValues } from "react-hook-form";
import nodemailer from 'nodemailer';
import renderEmail from '@/components/composed/email-template';

function validateData(formData: FieldValues) {
  const { name, email, phone, city, message } = formData;

  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
    city: Joi.string().required(),
    message: Joi.string().required()
  })

  return schema.validate({ name, email, phone, city, message });
}

// vmrb ffdv bxrq orbs
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "manavsharmaskr02@gmail.com",
    pass: process.env.GOOGLE_APP_PASSWORD,
  },
});


export default async function handleContactData(formData: FieldValues) {
  const { value: validatedData, error } = validateData(formData);

  if (error) {
    return { status: 'error', message: 'Something went wrong!' };
  }

  // console.log({ validatedData });
  try {
    const { name, email, phone, city, message } = validatedData;
    const emailHtml = await renderEmail({ name, email, phone, city, message });
    const subject = `${name} has contacted you!`;

    const res = await transporter.sendMail({
      from: 'manavsharmaskr02@gmail.com',
      to: 'manavsharmaskr02@gmail.com',
      subject,
      html: emailHtml
    });

    console.log(`mail sent from ${name}`, res.messageId);

    return { status: 'success', message: 'Message sent' };
  }
  catch (e) {
    console.log(e);
    return { status: 'error', message: 'Something went wrong!' }
  }
}