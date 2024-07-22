import Joi from "joi";

export const LoginSchema = Joi.object({
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .min(5)
        .max(100)
        .required(),
    password: Joi.string()
        .min(9)
        .ruleset.regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*-])[A-Za-z\d!@#$%^&*-]{8,}$/)
        .rule({
            message: "password must contain at least one uppercase letter, one lowercase letter, one number and one special character"
        })
        .required()
});
