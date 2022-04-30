export default function paginate(data, itemsPerPage) {
  const dataLen = data.length;
  let numPages = Math.floor(data.length / itemsPerPage);
  const rest = dataLen % itemsPerPage;
  let paginatedData = [];
  let index = 0;
  while (index < numPages) {
    paginatedData[index] = data.slice(
      index * itemsPerPage,
      index * itemsPerPage + itemsPerPage
    );
    index++;
  }
  const restData = data.slice(dataLen - rest, dataLen);
  if (restData.length > 0) {
    // add the remaining data if any
    paginatedData = [...paginatedData, data.slice(dataLen - rest, dataLen)];
  }
  return paginatedData;
}
