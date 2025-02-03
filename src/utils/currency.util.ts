export class CurrencyUtil {
  static format(value: number | string): string {
    const formattedCurrency = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(Number(value));

    return `Q.${formattedCurrency}`;
  }
}
