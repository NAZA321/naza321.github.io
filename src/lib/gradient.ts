const gradients = [
  'from-indigo-500 via-purple-500 to-pink-500',
  'from-sky-500 via-cyan-500 to-emerald-500',
  'from-amber-500 via-orange-500 to-rose-500',
  'from-emerald-500 via-teal-500 to-sky-500',
  'from-fuchsia-500 via-pink-500 to-rose-500',
];

/** 文字列のハッシュから決定的にグラデーションを選ぶ（同じ名前は常に同じ色）。 */
export function pickGradient(seed: string): string {
  let hash = 0;
  for (const char of seed) hash = (hash * 31 + char.charCodeAt(0)) | 0;
  return gradients[Math.abs(hash) % gradients.length];
}
