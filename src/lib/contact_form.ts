'use server';

import Joi from 'joi';
import { FieldValues } from "react-hook-form";

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

export default async function handleContactData(formData: FieldValues) {
  const { value: validatedData, error } = validateData(formData);

  if (error) {
    return { status: 'error', message: 'Something went wrong!' };
  }

  console.log({ validatedData });

  return { status: 'success', message: 'Message sent' };
}