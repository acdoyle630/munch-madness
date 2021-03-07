import { get } from "axios";

export const zipSearch = (zipCode) => {
  const mockResponse = {
    data: {
      item: {
        ZipCode: zipCode,
      },
    },
  };
  return Promise.resolve(mockResponse.data);
  //Credit Limit Reached.  Pay before deploy
  //   const url = `https://api.zip-codes.com/ZipCodesAPI.svc/1.0/GetZipCodeDetails/${zipCode}?key=${keys.zip2}`;
  //   return get(url).then((res) => {
  //     return res.data;
  //   });
};
