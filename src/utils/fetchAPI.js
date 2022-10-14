export const FetchAPI = async (searchValue, currentPage, pageSize) => {
  const startIdex = (currentPage - 1) * pageSize;

  const apiUrl = "https://apitest.taxnotes.com/search/v1/query";

  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "eyJraWQiOiJpSGhLWldneFpmQlNUdDdOc1ExaVJpQ1VrYTNDQTJMYk9iRlE3RTRyWTlNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI5OGVhMWd2Nmg1Zmc5ZXY2bDhrZXFzYmRyIiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJodHRwczpcL1wvYXBpdGVzdC50YXhub3Rlcy5jb21cL3NlYXJjaFwvcXVlcnkucmVhZCIsImF1dGhfdGltZSI6MTY2NTc0NDgwMCwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfd3pPcEV2clBEIiwiZXhwIjoxNjY1NzQ4NDAwLCJpYXQiOjE2NjU3NDQ4MDAsInZlcnNpb24iOjIsImp0aSI6Ijc4ODg0Y2FjLWY1MmMtNGVlOS04YjBlLWQ3ZWM1ZDkwMmFmOCIsImNsaWVudF9pZCI6Ijk4ZWExZ3Y2aDVmZzlldjZsOGtlcXNiZHIifQ.dosrnqk55A_8dfg0W4tDIyP0TZyMGnWPJ-lQH9MPyjfa3V_R6VoYcytBvb19u13ZGTF9hXzq0eumSK4n63BcfJKzlCGVCT0EHtv2fYrgXnKluxt-QcgqIXva5C3upJwQazrWlueQhbSwCcU42QHaEQLNeibcVzkhXUfJiVxYr2M6ZlMPzRuZqC2qV_xuZrbf48JWDYh3bMwtZOCAwxmxsQAQVJuN7UXsw8yvXOdiy-6v-UIooF_5gAKeXtD7gYeRGdfX2BYQ_Q417KxWxr9Zf1t4CgdUoDdR3kyhtvcmOEDY0niBFfTf0F0m9PqOBmGkpK5ojHXpb7DcQk02oyXPvQ"
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
