import {
  FieldArray,
  Form,
  FormikProvider,
  useFormik,
  useFormikContext,
} from "formik";
import { v4 } from "uuid";
import { type People } from "~/types/people";
import PeopleForm from "./PeopleFormItem";
import Button from "../Button";
import { useScrollDirection } from "~/hooks/useScrollDirection";
import { formatToRupiah } from "~/utils/format";
import { useAtom } from "jotai";
import { splitBillAtom } from "~/atoms/home";
const createEmptyPeopleForm = () => ({
  id: v4(),
  amounts: [
    {
      id: v4(),
      value: undefined,
    },
  ],
  name: undefined,
});

export type CreateBillForm = {
  peoples: People[];
};
export const BillForm = () => {
  const [splitBill, setSplitBill] = useAtom(splitBillAtom);
  const formik = useFormik<CreateBillForm>({
    initialValues: {
      peoples: [createEmptyPeopleForm()],
    },
    onSubmit: (values) => {
      void setSplitBill({
        ...splitBill,
        peoples: values.peoples,
        step: 2,
      });
    },
  });
  return (
    <FormikProvider value={formik}>
      <Form onSubmit={formik.handleSubmit}>
        <div className="mb-60 pt-6">
          <FieldArray name="peoples">
            {(arrayHelpers) => (
              <>
                {formik.values?.peoples?.map((people, index) => (
                  <div
                    className="relative mb-6 rounded-lg border"
                    key={people.id}
                  >
                    <PeopleForm
                      name="peoples"
                      index={index}
                      arrayHelpers={arrayHelpers}
                    />
                  </div>
                ))}
                <div className="flex gap-6">
                  <div className="flex-1">
                    <h6 className="font-bold">Ada yang belum masuk?</h6>
                    <p>Tambahin aja ya...</p>
                  </div>
                  <div className="max-w-[200px]">
                    <Button
                      type="button"
                      onClick={arrayHelpers.handlePush(createEmptyPeopleForm())}
                    >
                      Tambah orang
                    </Button>
                  </div>
                </div>
              </>
            )}
          </FieldArray>
        </div>
        <div className="fixed bottom-16 left-0 right-0">
          <div className="mx-auto max-w-md">
            <SubmitBill />
          </div>
        </div>
      </Form>
    </FormikProvider>
  );
};

const SubmitBill = () => {
  const formik = useFormikContext<CreateBillForm>();

  const total = formik.values?.peoples?.reduce(
    (prev, curr) =>
      (prev ?? 0) +
      (curr?.amounts?.reduce(
        (prev, curr) => (prev ?? 0) + (curr.value ?? 0),
        0
      ) ?? 0),
    0
  );

  const scrollDir = useScrollDirection();
  return (
    <div
      className="rounded-t-lg bg-white p-4"
      style={{
        transitionDuration: "0.5s",
        transform: scrollDir !== "none" ? "translateY(164px)" : "",
      }}
    >
      <div className="mb-2">
        <label className="block">Total bersih:</label>
        <span className="text-xl font-medium">{formatToRupiah(total)}</span>
      </div>
      <Button type="submit">Buat catatan baru</Button>
    </div>
  );
};
