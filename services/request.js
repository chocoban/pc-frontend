import fetch from 'isomorphic-unfetch'
const baseUrl = 'http://localhost:8080/api';

class RequestsApi{
  static postRequest = async (data) => {
    const { amount, reason, payment } = data;
    const res = await fetch(baseUrl, {
      method: 'POST',
      headers: { "Content-type": "application/graphql", "Accept": "application/json"},
      body: {
        "mutation":
        `{
          addRequest(amount: ${amount}, reason: ${reason}, payment:${payment} )
            { id reason }
        }`
      }
    });
    return res;
  };

  static getAllRequests = async () => {
    const res = await fetch(baseUrl, {
      method: 'POST',
      headers: { "Content-type": "application/graphql", "Accept": "application/json"},
      body: {
        "query":
        `{
          requests {
            id
            author {
              email
            }
          }
        }`
      }
    });
    return res;
  }
};

export default RequestsApi;
