import { ValidationErrors, flattenValidationErrors } from "next-safe-action";
import { ZodError, z } from "zod";

export const getFirstZodError = (error: any) => {
  const e = flattenValidationErrors(error);
  for (const key in e.fieldErrors) {
    const errorList = e.fieldErrors[key] as string[];
    if (errorList.length != 0) {
      return errorList[0];
    }
  }
};
