export const config = {
  analytics: true,
  animatedCard: true,
  bypassCards: ['PIBA'],
  deferInit: false,
  fieldsToSubmit: ['pan', 'expirydate', 'securitycode'],
  buttonId: 'merchant-submit-button',
  jwt:
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhbTAzMTAuYXV0b2FwaSIsImlhdCI6MTU4MDgzMzA1My45MDU1NjA3LCJwYXlsb2FkIjp7ImJhc2VhbW91bnQiOiIxMDAwIiwiYWNjb3VudHR5cGVkZXNjcmlwdGlvbiI6IkVDT00iLCJjdXJyZW5jeWlzbzNhIjoiR0JQIiwic2l0ZXJlZmVyZW5jZSI6InRlc3RfamFtZXMzODY0MSIsImxvY2FsZSI6ImVuX0dCIiwicGFuIjoiNDExMTExMDAwMDAwMDIxMSIsImV4cGlyeWRhdGUiOiIwMS8yMiIsInNlY3VyaXR5Y29kZSI6IjEyMyJ9fQ.sp5T6Is7aRRg7tEr0crO5rc4T_DOEtzkKERhXPx1d9Q',
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
  submitOnSuccess: false,
  submitCallback: '',
  translations: {
    'An error occurred': 'Wystąpił błąd'
  },
  components: {},
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
