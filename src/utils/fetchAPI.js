export const FetchAPI = async (searchValue, currentPage, pageSize) => {
  const startIdex = (currentPage - 1) * pageSize;

  const apiUrl = "https://apitest.taxnotes.com/search/v1/query";

  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "eyJraWQiOiJpSGhLWldneFpmQlNUdDdOc1ExaVJpQ1VrYTNDQTJMYk9iRlE3RTRyWTlNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI5OGVhMWd2Nmg1Zmc5ZXY2bDhrZXFzYmRyIiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJodHRwczpcL1wvYXBpdGVzdC50YXhub3Rlcy5jb21cL3NlYXJjaFwvcXVlcnkucmVhZCIsImF1dGhfdGltZSI6MTY2NTc0MTAzNiwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfd3pPcEV2clBEIiwiZXhwIjoxNjY1NzQ0NjM2LCJpYXQiOjE2NjU3NDEwMzYsInZlcnNpb24iOjIsImp0aSI6IjBjOTcyNGFkLWYwOGItNDNjZC04OTJlLTgzZjFmMTNjOWJhOSIsImNsaWVudF9pZCI6Ijk4ZWExZ3Y2aDVmZzlldjZsOGtlcXNiZHIifQ.kixuYUnvijNJZjRA_iyRxtkplbp2sz4BCYwdOlXRM3C-yeTQa1rOW8WLmn95WeNJdmC-za89k-nPRONziGk62Zq5BFrNdK1mJ1pyjXYXH9OyaioZ9W9JHopjKEZmsDuF9lwxHk6vNsKZOzBVZ3_dOdOfqZhQrxb_5RCNweiOh3t67wGVFg7LuIulP35aHHKkfadtDhly7tbDTBtIffkBYJdlPPh_tbRU2WHpbLRmmuhzZqFyf-vtrIAW_62HNluf6sPL-l0B6j9FX8qRK0BdTcN31DpY4HNysEa6ednO08lmmrJJfxMyJzbW1BM_cvFUZMyJes8MGJVco6_n8hs-Gg"
  );
  myHeaders.append("Content-Type", "application/json");

  let raw = JSON.stringify({
    query: {
      query_string: {
        query: searchValue,
      },
      filter: [
        {
          product_name: ["Tax Notes Today Federal", "Tax Notes Today State"],
        },
        {
          jurisdictions: ["United States"],
        },
      ],
    },
    fields: [
      "product_name",
      "authors",
      "title",
      "document_type",
      "abstract",
      "date",
      "code_sections",
      "tnr_category",
      "tnr_subcategory",
      "sourcetype",
      "macrojurisdictions",
    ],
    from: startIdex,
    size: pageSize,
    sort: [
      {
        date: "desc",
      },
    ],
    facets: {
      fields: ["product_name", "product_section", "document_type"],
      size: 5,
    },
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  return fetch(apiUrl, requestOptions);
};
