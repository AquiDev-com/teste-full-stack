import * as yup from "yup";

const filterSchema = yup.object().shape({
  ibuMin: yup.string().optional(),
  ibuMax: yup.string().optional(),
  minAbv: yup.string().optional(),
  maxAbv: yup.string().optional(),
});

export default filterSchema;
