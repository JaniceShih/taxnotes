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
    "eyJraWQiOiJpSGhLWldneFpmQlNUdDdOc1ExaVJpQ1VrYTNDQTJMYk9iRlE3RTRyWTlNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI5OGVhMWd2Nmg1Zmc5ZXY2bDhrZXFzYmRyIiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJodHRwczpcL1wvYXBpdGVzdC50YXhub3Rlcy5jb21cL3NlYXJjaFwvcXVlcnkucmVhZCIsImF1dGhfdGltZSI6MTY2NTc1OTY0OSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfd3pPcEV2clBEIiwiZXhwIjoxNjY1NzYzMjQ5LCJpYXQiOjE2NjU3NTk2NDksInZlcnNpb24iOjIsImp0aSI6IjkyZDY2NjZkLTM1NzctNDBmOC05YWYwLWFmMWRiZTgwNjIxMyIsImNsaWVudF9pZCI6Ijk4ZWExZ3Y2aDVmZzlldjZsOGtlcXNiZHIifQ.t5kTVfp7_oPxN5kiwzNR5bq-CID9e3E2WrtHsIHtljW7-xJXUr-0Nfc6fQApsUUE35tDXugdbld2PlJakxvWKwWnpGroWai1nbbsU3Fw6L65MZ2BH8LP__dCUiMsohLvpAtYLDdx9f7Us4yXgtMDEasH2VrgEsav5XT0150Gd_83TtZJuHkvezwmufNAgHRDIipMwKSiUhkOpWUthdel-UkKpfoTlP5zlrYB-vJKnZoT6Tqtl66LHk_NWQYZqkVO3Ciqjk19vA2dsKmU1BjBGjlmVxpi53hCCiFrnsT72xzbNhYOIjba5yxXbuyouWWZozr5sH2fMWAi9Ytd14eDAw"
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
