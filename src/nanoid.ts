export function nanoid(size = 21): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
  let id = "";
  const bytes = new Uint8Array(size);
  for (let i = 0; i < size; i++) id += chars[bytes[i] & 63] || chars[Math.floor(Math.random() * 64)];
  return id;
}
