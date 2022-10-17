export const FetchAPI = async (
  searchValue,
  jurisdiction,
  currentPage,
  pageSize
) => {
  const startIdex = (currentPage - 1) * pageSize;
  const apiUrl = "https://apitest.taxnotes.com/search/v1/query";

  let jurisdictionValue =
    jurisdiction === "All"
      ? ("Tax Notes Today Federal", "Tax Notes Today State")
      : jurisdiction;

  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "eyJraWQiOiJpSGhLWldneFpmQlNUdDdOc1ExaVJpQ1VrYTNDQTJMYk9iRlE3RTRyWTlNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI5OGVhMWd2Nmg1Zmc5ZXY2bDhrZXFzYmRyIiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJodHRwczpcL1wvYXBpdGVzdC50YXhub3Rlcy5jb21cL3NlYXJjaFwvcXVlcnkucmVhZCIsImF1dGhfdGltZSI6MTY2NTc3MzQ3OSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfd3pPcEV2clBEIiwiZXhwIjoxNjY1Nzc3MDc5LCJpYXQiOjE2NjU3NzM0NzksInZlcnNpb24iOjIsImp0aSI6IjIzNDJlZTQ3LTM0M2UtNGEyNC1hNGQ3LWZhYWIwODgwZmIzNCIsImNsaWVudF9pZCI6Ijk4ZWExZ3Y2aDVmZzlldjZsOGtlcXNiZHIifQ.eYgsdeBj1bjK_mDxAEhMLIOiXoGDWHInYB4G9984em2DAvu6xnk1g-0Bq58rEpxnEMB6t4SHofdrH9m_cwUpNdOF1bMrhYA9KmA2_oECOcgdcTWxp8Nv5XdqxyzIJdCtvURotlnH-htHi-UHY_a20jG-HkCo9gIEGHWTgO4l-A7RaBTLBvAVVamgfqwXeBAO6zd5q5Szx1vOiZEjse914H4Sff-QPt8N44ndt3tCUO3UeeMcqGEFXAkQHlgZiTWcBW6M70gBfD-PdGF183Gz4qPSa5nQAFTSJP2RyEXuAQvz9TjLG4h206074kltwz1B37mUZOnco2GGi3xsaC4VCQ"
  );
  myHeaders.append("Content-Type", "application/json");

  let raw = JSON.stringify({
    query: {
      query_string: {
        query: searchValue,
      },
      filter: [
        {
          product_name: {
            terms: [`${jurisdictionValue}`],
            operator: "or",
          },
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
