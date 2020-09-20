import {
  useUpsertWeddingMutation,
  WeddingDocument,
  WeddingQuery,
} from "@codegen/generated/graphql";
import DatePicker from "@components/DatePicker";
import Dot from "@components/Dot";
import Input from "@components/Input";
import { parseISO } from "date-fns";
import { useFormik } from "formik";
import { Dispatch, SetStateAction } from "react";

interface Props {
  setShowProfile: Dispatch<SetStateAction<boolean>>;
  wedding: WeddingQuery["wedding"];
}

const WeddingForm: React.FC<Props> = ({ setShowProfile, wedding }) => {
  const [upsertWedding] = useUpsertWeddingMutation();
  const { handleChange, values, handleSubmit, setFieldValue } = useFormik({
    initialValues: {
      partner1Name: wedding?.partner1Name || "",
      partner2Name: wedding?.partner2Name || "",
      partnersEmail: "",
      date: wedding?.date ? parseISO(wedding?.date) : undefined,
    },
    onSubmit: async (values) => {
      await upsertWedding({
        variables: {
          input: { ...values, id: wedding?.id, date: values.date },
        },
        update: (cache, { data }) => {
          const existingData = cache.readQuery({
            query: WeddingDocument,
          }) as WeddingQuery;
          cache.writeQuery({
            query: WeddingDocument,
            data: {
              wedding: {
                ...existingData.wedding,
                ...data?.upsertWedding,
              },
            },
          });
        },
      });

      if (wedding?.id) setShowProfile(false);
    },
  });

  return (
    <main className="flex flex-col mt-16 w-2/5 mx-auto">
      <form onSubmit={handleSubmit}>
        <h3 className="font-corsiva text-center mb-4 text-2xl">Please tell us your first names</h3>
        <div className="flex justify-evenly">
          <Input
            fullWidth
            name="partner1Name"
            onChange={handleChange}
            value={values.partner1Name}
          />
          <div className="font-corsiva mx-8 text-xl flex items-center">&</div>
          <Input
            fullWidth
            name="partner2Name"
            onChange={handleChange}
            value={values.partner2Name}
          />
        </div>
        <h3 className="font-corsiva text-center mt-8 mb-4 text-2xl">
          Select a date of your Wedding
        </h3>
        <DatePicker selected={values.date} onChange={(date) => setFieldValue("date", date)} />
        <h3 className="font-corsiva text-center mb-4 text-2xl">
          Do you want to add your partner's email?
        </h3>
        <Input
          className="w-2/3 flex my-0 mx-auto"
          name="partnersEmail"
          onChange={handleChange}
          value={values.partnersEmail}
        />
        <button
          className="flex flex-col items-center mx-auto focus:outline-none"
          onClick={(e) => {
            e.preventDefault();
            setShowProfile(false);
          }}
        >
          <span className="font-corsiva text-3xl">Go back</span>
          <div className="flex">
            <Dot className="h-1 w-1" />
            <Dot className="h-1 w-1 mx-2" />
            <Dot className="h-1 w-1" />
          </div>
        </button>
        <button className="flex flex-col items-center mx-auto focus:outline-none" type="submit">
          <span className="font-corsiva text-3xl">Proceed</span>
          <div className="flex">
            <Dot className="h-1 w-1" />
            <Dot className="h-1 w-1 mx-2" />
            <Dot className="h-1 w-1" />
          </div>
        </button>
      </form>
    </main>
  );
};

export default WeddingForm;