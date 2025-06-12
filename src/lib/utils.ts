type DateStyle = Intl.DateTimeFormatOptions['dateStyle']

export function formatDate(
  date: string | undefined | null,
  dateStyle: DateStyle = 'medium',
  locales = 'en'
): string {
  if (typeof date !== 'string' || date.trim() === '') {
    // Fallback: return lege string of een andere fallback waarde
    return ''
  }

  // Vervang streepjes door schuine strepen, Safari heeft daar moeite mee
  const dateToFormat = new Date(date.replaceAll('-', '/'))

  if (isNaN(dateToFormat.getTime())) {
    // Ongeldige datum, fallback
    return ''
  }

  const dateFormatter = new Intl.DateTimeFormat(locales, { dateStyle })
  return dateFormatter.format(dateToFormat)
}
