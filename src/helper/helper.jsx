export function isJwtValid(token) {
  if (!token) {
    // Jika tidak ada token, dianggap tidak valid
    return false;
  }

  try {
    // Mengekstrak payload dari token
    const payload = JSON.parse(atob(token.split(".")[1]));

    // Memeriksa apakah token belum kadaluarsa
    return payload.exp > Date.now() / 1000;
  } catch (error) {
    // Jika terdapat kesalahan dalam mengekstrak payload, dianggap tidak valid
    return false;
  }
}

export function getJwtPayload(token) {
    if (!token) {
      // Token tidak ada, kembalikan null atau sesuai dengan kebutuhan Anda
      return null;
    }
  
    try {
      // Mengekstrak payload dari token
      const payloadBase64 = token.split('.')[1];
      const decodedPayload = atob(payloadBase64);
      const parsedPayload = JSON.parse(decodedPayload);
      return parsedPayload;
    } catch (error) {
      // Penanganan kesalahan jika ada kesalahan dalam dekode payload
      console.error('Error decoding JWT payload:', error);
      return null;
    }
  }