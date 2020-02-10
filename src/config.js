export const config = {
  analytics: true,
  animatedCard: true,
  applePay: {
    buttonStyle: 'white-outline',
    buttonText: 'donate',
    merchantId: 'merchant.net.securetrading.test',
    paymentRequest: {
      countryCode: 'US',
      currencyCode: 'USD',
      merchantCapabilities: ['supports3DS', 'supportsCredit', 'supportsDebit'],
      supportedNetworks: [],
      total: {
        label: 'Secure Trading Merchant',
        amount: '10.00'
      }
    },
    placement: 'st-apple-pay'
  },
  // buttonId: 'merchant-submit-button',
  bypassCards: ['PIBA'],
  components: {},
  // componentIds: {},
  // datacenterurl: "",
  deferInit: false,
  // formId: '',
  fieldsToSubmit: ['pan', 'expirydate', 'securitycode'],
  // init: {},
  jwt:
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhbTAzMTAuYXV0b2FwaSIsImlhdCI6MTU4MDk5NzkwNi4zMDkxNjAyLCJwYXlsb2FkIjp7ImJhc2VhbW91bnQiOiIxMDAwIiwiYWNjb3VudHR5cGVkZXNjcmlwdGlvbiI6IkVDT00iLCJjdXJyZW5jeWlzbzNhIjoiR0JQIiwic2l0ZXJlZmVyZW5jZSI6InRlc3RfamFtZXMzODY0MSIsImxvY2FsZSI6ImVuX0dCIn19.oOPREb22jCttr6tOgKMqCeuFLSkVKRwSKW9U64WJTvU',
  // livestatus: "",
  // origin: "",
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
  submitCallback: '',
  // submitFields: [],
  // submitOnError: false,
  submitOnSuccess: false,
  translations: {
    'An error occurred': 'Wystąpił błąd'
  },
  visaCheckout: {
    buttonSettings: {
      size: '154',
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
