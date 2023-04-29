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
      <TextField
        type="number"
        value={people.amount}
        name={`${name}.${index}.amount`}
        label="Jumlah"
        onChange={formik.handleChange}
        placeholder="Masukan jumlah"
      />
    </>
  );
};
export default PeopleForm;
