import { type People } from "~/types/people";
import TextField from "../input/TextField";
import { useFormikContext } from "formik";

const PeopleForm = ({
  name,
  index,
  people,
}: {
  name: string;
  index: number;
  people: People;
}) => {
  const formik = useFormikContext();
  return (
    <>
      <TextField
        value={people.name}
        name={`${name}.${index}.name`}
        label="Nama"
        onChange={formik.handleChange}
        placeholder="Masukan nama"
        className="mb-4"
      />
      <TextField.Number
        value={people.amount}
        name={`${name}.${index}.amount`}
        label="Jumlah"
        valueIsNumericString
        onValueChange={(val) =>
          formik.setFieldValue(`${name}.${index}.amount`, val.value)
        }
        placeholder="Masukan jumlah"
      />
    </>
  );
};
export default PeopleForm;
