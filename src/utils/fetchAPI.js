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
    "eyJraWQiOiJpSGhLWldneFpmQlNUdDdOc1ExaVJpQ1VrYTNDQTJMYk9iRlE3RTRyWTlNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI5OGVhMWd2Nmg1Zmc5ZXY2bDhrZXFzYmRyIiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJodHRwczpcL1wvYXBpdGVzdC50YXhub3Rlcy5jb21cL3NlYXJjaFwvcXVlcnkucmVhZCIsImF1dGhfdGltZSI6MTY2NTc2MzI2OSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfd3pPcEV2clBEIiwiZXhwIjoxNjY1NzY2ODY5LCJpYXQiOjE2NjU3NjMyNjksInZlcnNpb24iOjIsImp0aSI6IjFiYTlhNGQ2LWI4MTgtNDIyZC1hYjZlLTY5ODE4MzEyODYxOCIsImNsaWVudF9pZCI6Ijk4ZWExZ3Y2aDVmZzlldjZsOGtlcXNiZHIifQ.h4hjPcevOoNT3YQfJmCC-9ro9FOuz90lvv9MOnRpPoA44wkwzIq9DlTRRxVKCrINPSdvOJ6eZZECZDBp5-P4MqhBb2_hZZCaMFaiEDSvrYV-HhIJIAe2tmplnFIQq_G9CQzuWL_6ns5xbfj_bdUXSGz4DK1qI8g6kbzP6HjuvjWqBYDp_7O7MYZScGfJ6xKg5HlaL11q5d76Ua9VPQUJbWltifGaBF_D0HjQPcKsIIpEaKAG5cHM7COKO8Q1dLy-Dh3k1R8rqJLI8xt_ujzpT3i6Bw9I_0LwpeR_UzHcavQJ-yfzeOW7l-Bw2Bhd_s1ahHQKe_jnues10KN4VtTAOg"
  );
  myHeaders.append("Content-Type", "application/json");

  let raw = JSON.stringify({
    query: {
      query_string: {
        query: searchValue,
      },
      filter: [
        {
          product_name: [`${jurisdictionValue}`],
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
