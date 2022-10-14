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
    ""
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
