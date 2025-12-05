export interface MarketData {
  id: number
  name: string
  isActive?: boolean
  price?: number
  change?: number
  changePercent?: number
  icon?: string
  trend?:number[]
  
}
