import { formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function formatDate(apiDate: string) {
  const now = new Date()
  const date = new Date(apiDate)

  return formatDistance(date, now, { addSuffix: true, locale: ptBR })
}
