import userData from '../interfaces/main.interface';

const providerUrl = 'https://api.jsonbin.io/v3/b/';
const providerBinId = '633edc4e0e6a79321e1f1670';
const providerHeaders = {
  'Content-Type': 'application/json',
  // !This is not safe! This key should be stored on a server :)
  'X-Master-Key': '$2b$10$josYvD0tSHj.TlyTTkM25uU8G5fZ045LCj7Lj4YEAkDEiuqKKUC2m'
};

/**
 * Updates the latest email record within jsonbin
 *
 * @remarks
 * Docs: https://jsonbin.io/api-reference/bins/update
 *
 * @param email - user email
 * @param binId - optional ID of bin to use
 * @returns either 'success' or 'error'
 */
const updateLatestEmailRecord = async (email: string, binId = providerBinId): Promise<string> => {
  const reqBody: userData = {
    users: [
      {
        email: email
      }
    ]
  };
  const rawResponse = await fetch(`${providerUrl}${binId}`, {
    method: 'PUT',
    headers: providerHeaders,
    body: JSON.stringify(reqBody)
  });
  if (rawResponse.status !== 200) {
    return 'error';
  }
  return 'success';
};

export default updateLatestEmailRecord;
