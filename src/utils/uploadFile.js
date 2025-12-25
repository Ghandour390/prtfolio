export async function uploadFile(file) {
  if (!file) return null;

  const formDataUpload = new FormData();
  formDataUpload.append('operations', JSON.stringify({
    query: `mutation($file: Upload!, $nom: String) { createDocument(file: $file, nom: $nom) { _id nom urlStocket userId } }`,
    variables: { file: null, nom: `user-${Date.now()}-${file.name}` }
  }));
  formDataUpload.append('map', JSON.stringify({ '0': ['variables.file'] }));
  formDataUpload.append('0', file);

  const token = localStorage.getItem('authToken') || localStorage.getItem('accessToken');
  const endpoint = import.meta.env.VITE_GRAPHQL_ENDPOINT || 'http://localhost:4000/graphql';

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 
      'authorization': token ? `Bearer ${token}` : '',
      'Apollo-Require-Preflight': 'true'
    },
    body: formDataUpload,
  });

  const result = await response.json();
  if (result.errors) throw new Error(result.errors[0].message);
  return result.data?.createDocument?.urlStocket || null;
}
