await fetch("http://localhost:9999/graphql", {
    "credentials": "omit",
    "headers": {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/111.0",
        "Accept": "*/*",
        "Accept-Language": "en-US,en;q=0.5",
        "content-type": "application/json",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin"
    },
    "referrer": "http://localhost:9999/scenes/17?qsort=date&qfp=1&continue=true",
    "body": "{\"operationName\":\"AllTagsForFilter\",\"variables\":{},\"query\":\"query AllTagsForFilter {\\n  allTags {\\n    id\\n    name\\n    aliases\\n    __typename\\n  }\\n}\"}",
    "method": "POST",
    "mode": "cors"
});