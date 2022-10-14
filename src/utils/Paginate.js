import _ from "lodash";

export const Paginate = (items, pageNumber, pageSize) => {
  console.log(items);
  console.log(pageNumber);
  console.log(pageSize);
  const startIndex = (pageNumber - 1) * pageSize;

  return _(items).slice(items, startIndex).take(pageSize).value();
};
