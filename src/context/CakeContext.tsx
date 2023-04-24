import { createContext, useState } from "react";

type MyComponentChildren = React.PropsWithChildren;

type CakeModel = {
  id: string | number[];
  nameCake: string;
  ingredients: string;
  method: string;
  date: string;
  photo: string;
};

type CakeType = {
  cakes: CakeModel[];
  receiveDataCake: (data: CakeModel) => void;
  deleteCake: (id: string) => void;
};

const CakeContext = createContext<CakeType>({} as CakeType);

function CakeProvider({ children }: MyComponentChildren) {
  const [cakes, setCakes] = useState<CakeModel[]>([]);

  function receiveDataCake(data: CakeModel) {
    console.log(cakes);
    console.log(data);
    setCakes([...cakes, data]);
  }

  function deleteCake(id: string) {
    setCakes(cakes.filter((item) => item.id !== id));
  }

  return (
    <CakeContext.Provider value={{ cakes, receiveDataCake, deleteCake }}>
      {children}
    </CakeContext.Provider>
  );
}

export { CakeProvider, CakeContext };
