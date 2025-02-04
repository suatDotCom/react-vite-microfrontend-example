/**
 * Bir fonksiyonun çağrılmasını belirli bir süre geciktiren utility fonksiyon.
 * @param func Geciktirilecek fonksiyon
 * @param wait Gecikme süresi (ms)
 */
export function debounce<T extends (...args: any[]) => void>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
} 