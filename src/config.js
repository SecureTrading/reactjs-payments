export const config = {
  analytics: true,
  animatedCard: true,
  applePay: {
    buttonStyle: 'white-outline',
    buttonText: 'buy',
    merchantId: 'merchant.net.securetrading.test',
    paymentRequest: {
      countryCode: 'US',
      currencyCode: 'USD',
      merchantCapabilities: ['supports3DS', 'supportsCredit', 'supportsDebit'],
      supportedNetworks: [],
      total: {
        label: 'Secure Trading Merchant',
        amount: '10.0'
      }
    },
    placement: 'st-apple-pay'
  },
  buttonId: 'merchant-submit-button',
  bypassCards: ['VISA', 'MASTERCARD', 'AMEX', 'DISCOVER', 'JCB', 'DINERS'],
  componentIds: {
    animatedCard: '',
    cardNumber: '',
    expirationDate: '',
    notificationFrame: '',
    securityCode: ''
  },
  components: {
    defaultPaymentType: '',
    requestTypes: ['THREEDQUERY', 'RISKDEC', 'ACCOUNTCHECK', 'AUTH'],
    paymentTypes: [],
    startOnLoad: false
  },
  cybertonicaApiKey: 'stfs',
  datacenterurl: '',
  deferInit: false,
  disableNotification: false,
  errorCallback: null,
  fieldsToSubmit: ['pan', 'expirydate', 'securitycode'],
  formId: 'st-form',
  init: {
    cachetoken: '',
    threedinit: ''
  },
  jwt:
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhbTAzMTAuYXV0b2FwaSIsImlhdCI6MTU5MDQ4MTUxNC4yOTgyMjM3LCJwYXlsb2FkIjp7Im1haW5hbW91bnQiOiIxMC4wMCIsImFjY291bnR0eXBlZGVzY3JpcHRpb24iOiJFQ09NIiwiY3VycmVuY3lpc28zYSI6IkdCUCIsInNpdGVyZWZlcmVuY2UiOiJ0ZXN0X2phbWVzMzg2NDEiLCJsb2NhbGUiOiJlbl9HQiJ9fQ.s-8swpeDJccIrsLY_AjcN7uN-daSUc3k6uf_wZPmdRw',
  livestatus: 0,
  origin: '',
  panIcon: true,
  placeholders: {
    pan: 'Card number',
    expirydate: 'MM/YY',
    securitycode: '***'
  },
  styles: {
    defaultStyles: {
      'background-color-input': 'AliceBlue'
    },
    cardNumber: {
      'font-size-input': '1.5rem',
      'line-height-input': '1.6rem'
    },
    expirationDate: {
      'font-size-input': '1.5rem',
      'line-height-input': '1.6rem'
    },
    securityCode: {
      'font-size-input': '1.5rem',
      'line-height-input': '1.6rem'
    },
    notificationFrame: {
      'color-error': '#FFF333'
    },
    controlFrame: {
      'color-error': '#3358FF'
    }
  },
  submitCallback: null,
  submitFields: [],
  submitOnSuccess: false,
  submitOnError: false,
  successCallback: null,
  translations: {
    'An error occurred': 'Wystąpił błąd'
  },
  visaCheckout: {
    buttonSettings: {
      size: 154,
      color: 'neutral'
    },
    livestatus: 0,
    merchantId: 'SDUT1MEXJO10RARJF2S521ImTyKfn3_JmxePdXcydQIUb4kx4',
    paymentRequest: {
      subtotal: '20.00'
    },
    placement: 'st-visa-checkout',
    settings: {
      displayName: 'My Test Site'
    }
  }
};
