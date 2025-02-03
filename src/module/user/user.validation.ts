import { z } from "zod";

const userValidationSchema=z.object({
   body:z.object({
    password:z.string({
        invalid_type_error:'password must be a string'
    }).max(10,{message:"password can't be more than 10 characters"}).optional(),
   })
})

export const userValidation={
    userValidationSchema,
} 