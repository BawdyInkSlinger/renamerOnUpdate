let query = `
mutation SceneUpdate($input: SceneUpdateInput!) {
    sceneUpdate(input: $input) {
      ...SceneData
      __typename
    }
  }
  
  fragment SceneData on Scene {
    id
    tags {
      ...SlimTagData
      __typename
    }
    __typename
  }
  
  fragment SlimTagData on Tag {
    id
    name
    aliases
    image_path
    __typename
  }`;

let body = {
    operationName: "SceneUpdate",
    variables: {
      input: {
        id: "17",
        tag_ids: ["1", "18"],
      },
    },
    query: query,
  };

await fetch("http://localhost:9999/graphql", {
  credentials: "omit",
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/110.0",
    Accept: "*/*",
    "Accept-Language": "en-US,en;q=0.5",
    "content-type": "application/json",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
  },
  referrer: "http://localhost:9999/scenes",
  body: JSON.stringify(body),
  method: "POST",
  mode: "cors",
});

