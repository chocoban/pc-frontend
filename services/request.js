import fetch from 'isomorphic-unfetch';

const baseUrl = 'http://localhost:8080/api';

class RequestsApi {
  static postRequest = async ({
    pay, reason, payment
  }) => {
    const query = JSON.stringify({
      query: `mutation postRequest($pay: Int, $reason: String, $payment: String){
        addRequest(amount: $pay, reason: $reason, payment: $payment)
          {
            id
            author {
              email
            }
          }
      }`,
      variables: { pay, reason, payment }
    });
    const res = await fetch(baseUrl, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: query
    });

    const responseJson = await res.json();
    return responseJson;
  };

  static getAllRequests = async () => {
    const query = JSON.stringify({
      query: `{
        requests {
          id
          author {
            email
          }
        }
      }`
    });
    const res = await fetch(baseUrl, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: query
    });
    const responseJson = await res.json();
    return responseJson;
  }
}

export default RequestsApi;
