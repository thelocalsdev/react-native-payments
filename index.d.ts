export interface PaymentMethodData {
  supportedMethods: string[]
  data: {}
}

export interface PaymentDetailsBase {
  displayItems: PaymentItem[]
  shippingOptions?: PaymentShippingOption[]
  modifiers?: PaymentDetailsModifier[]
}

export type PaymentDetailsInit = PaymentDetailsBase & {
  id?: string
  total: PaymentItem
}

export interface PaymentOptions {
  requestPayerName: boolean
  requestPayerEmail: boolean
  requestPayerPhone: boolean
  requestShipping: boolean
  shippingType: PaymentShippingType
}

export type PaymentComplete = 'fail' | 'success' | 'unknown'

export class PaymentRequest {
  constructor(data: PaymentMethodData[], details?: PaymentDetailsInit, options?: PaymentOptions)
  
  show(): Promise<PaymentResponse>

  abort(): Promise<void>

  canMakePayments(): Promise<boolean>
}