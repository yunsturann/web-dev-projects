export const toBase64 = (file: File): Promise<string | ArrayBuffer | null> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });

export const handleDownload = (base64Data: string, fileName: string) => {
  const link = document.createElement("a");
  link.href = base64Data;
  link.download = fileName; // Dosyanın adını belirtin
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// ** I dont need this function but I will keep it here for future reference

// export function base64ToFile(dataurl: string, filename: string) {
//   let arr = dataurl.split(","),
//     match = arr[0].match(/:(.*?);/);

//   if (!match) {
//     throw new Error("Invalid data URL");
//   }

//   let mime = match[1],
//     bstr = atob(arr[1]),
//     n = bstr.length,
//     u8arr = new Uint8Array(n);
//   while (n--) {
//     u8arr[n] = bstr.charCodeAt(n);
//   }
//   return new File([u8arr], filename, { type: mime });
// }
