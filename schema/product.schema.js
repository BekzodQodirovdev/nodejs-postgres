import Joi from "joi";

export function validateProduct(data) {
  console.log("+++");
  const schema = Joi.object({
    name: Joi.string()
      .min(2)
      .message("ismda minimum 2 ta belgi bo'lishi kerak")
      .required(),
    price: Joi.number().required(),
    selesmean_id: Joi.number().required(),
  });
  console.log("---");

  return schema.validate(data);
}
