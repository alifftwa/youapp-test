import Layout from "@/app/_layout/interest/Layout";
import React, { useState } from "react";
import Select from "react-dropdown-select";

interface Option {
  label: string;
  value: number;
}

const InterestEditPage = () => {
  const [selectedValues, setSelectedValues] = useState<Option[]>([]);
  const [value, setValue] = useState();

  const options: Option[] = [
    { label: "Music", value: 1 },
    { label: "Basketball", value: 2 },
    { label: "Fitness", value: 3 },
    { label: "Gymming", value: 4 },
  ];

  const handleChange = (values: Option[]) => {
    setSelectedValues(values);
  };

  return (
    <>
      <Layout>
        <div>
          <div className="mt-20 ml-3">
            <p className="text-sm text-transparent font-extrabold mb-3 bg-clip-text bg-gradient-to-r from-[#F3EDA6] from-[-6.8%] via-[#F8FAE5] via-[89.01%] to-[#D5BE88] to-[100.43%]">
              Tell everyone about yourself
            </p>
            <p className="text-xl font-bold">What interests you?</p>
          </div>
          <div className="mt-9">
            <Select
              options={options}
              values={selectedValues}
              onChange={(values: Option[]) => handleChange(values)}
              multi
              color="#34474B"
              className="py-2 px-4 text-black rounded-lg border-none bg-[#20353A]"
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default InterestEditPage;
