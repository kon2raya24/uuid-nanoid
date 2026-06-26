export function cuid(): string {
  const timestamp = Date.now().toString(36);
  const counter = (globalThis as any).__cuid_counter = ((globalThis as any).__cuid_counter || 0) + 1;
  const random = Math.random().toString(36).slice(2, 8);
  return `c${timestamp}${counter.toString(36)}${random}`;
}
