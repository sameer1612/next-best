export function getKey(): string | undefined {
  let key = localStorage.getItem("key");
  key ||= import.meta.env.VITE_OPENAI_KEY;

  return key || undefined;
}

export function saveKey(key: string) {
  localStorage.setItem("key", key);
}
