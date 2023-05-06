import { type People } from "~/types/people";
import TextField from "../input/TextField";
import { type ArrayHelpers, useFormikContext } from "formik";
import { v4 } from "uuid";
import Button from "../Button";
import Trash from "~/icons/Trash";
import Duplicate from "~/icons/Duplicate";

const PeopleFormItem = ({
  name,
  index,
  arrayHelpers,
}: {
  index: number;
  name: string;
  arrayHelpers: ArrayHelpers;
}) => {
  const formik = useFormikContext<{
    [name: string]: People[];
  }>();

  const getName = (itemName: string) => {
    if (name) {
      return `${name}.${index}.${itemName}`;
    }
    return itemName;
  };

  const people = formik.values[name]?.[index] as People;

  const handleDupe = arrayHelpers.handlePush({
    id: v4(),
    amounts: people.amounts,
    name: people.name,
  } as People);

  const handleDelete = arrayHelpers.handleRemove(index);

  return (
    <>
      <div className="flex w-full justify-end rounded-t-lg border-b bg-gray-50 px-4 py-2">
        <div>
          <button
            type="button"
            className="mr-2 rounded-full border border-gray-900 p-1 text-sm text-gray-900"
            onClick={handleDupe}
          >
            <Duplicate className="h-4 w-4" />
          </button>
        </div>
        <div>
          <button
            type="button"
            className="rounded-full border border-red-600 p-1 text-sm text-red-600"
            onClick={handleDelete}
          >
            <Trash className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <TextField
          value={people.name}
          name={getName("name")}
          label="Nama"
          onChange={formik.handleChange}
          placeholder="Masukan nama"
          className="mb-4"
        />
        <span className="mb-1 block">Daftar tagihan</span>
        {formik.values[name]?.[index]?.amounts?.map((val, idex) => (
          <div key={`${val.id}`} className="mb-2 flex gap-2">
            <div className="flex-1">
              <TextField.Number
                value={val.value}
                name={getName("amounts") + `.${idex}.value`}
                decimalScale={0}
                onValueChange={(val) => {
                  console.log(
                    val,
                    getName("amounts") + `.${idex}.value`,
                    val.floatValue
                  );
                  formik.setFieldValue(
                    getName("amounts") + `.${idex}.value`,
                    val.floatValue
                  );
                }}
                placeholder="Masukan jumlah"
              />
            </div>

            {(formik.values[name]?.[index]?.amounts?.length ?? 0) > 1 && (
              <div>
                <Button
                  variant="outlined"
                  className="h-[42px] border-red-600  text-xs text-red-600"
                  type="button"
                  onClick={() => {
                    const value = [
                      ...(formik.values[name]?.[index]?.amounts ?? []),
                    ];
                    value.splice(idex, 1);
                    formik.setFieldValue(getName("amounts"), value ?? []);
                  }}
                >
                  Hapus
                </Button>
              </div>
            )}
          </div>
        ))}
        <Button
          type="button"
          className="mt-6 text-sm"
          variant="outlined"
          onClick={() => {
            formik.setFieldValue(getName("amounts"), [
              ...(formik.values[name]?.[index]?.amounts ?? []),
              { id: v4(), value: undefined },
            ]);
          }}
        >
          Tambah
        </Button>
      </div>
    </>
  );
};
export default PeopleFormItem;
