import { readFile, createFile } from "../services/fileService.js";



export const createData = async (data) => {
  const datafile = await readFile();
  let dataJson = null;
  //Operador Ternario
  !datafile || datafile.length === 0
    ? (dataJson = [data])
    : (dataJson = [...datafile, data]);

  /* if(!datafile || datafile.length === 0) {
        dataJson = [ data ]
    } else {
        dataJson = [...datafile, data ]
    }
 */
  await createFile(dataJson);
};

export const getAllData = async () => {
  const data = await readFile();
  return data;
};
