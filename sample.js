const note = {
    type: 'notification',
    event: 'payment.succeeded',
    object: {
      id: '2eeb19e4-000f-5000-8000-1f666e24940c',
      status: 'succeeded',
      amount: { value: '12.00', currency: 'RUB' },
      income_amount: { value: '11.58', currency: 'RUB' },
      description: 'Оплата услуги на 12 месяцев (User ID: 561085449)',
      recipient: { account_id: '996803', gateway_id: '2360768' },
      payment_method: {
        type: 'bank_card',
        id: '2eeb19e4-000f-5000-8000-1f666e24940c',
        saved: false,
        status: 'inactive',
        title: 'Bank card *0004',
        card: [Object]
      },
      captured_at: '2024-12-11T03:26:18.606Z',
      created_at: '2024-12-11T03:25:24.941Z',
      test: true,
      refunded_amount: { value: '0.00', currency: 'RUB' },
      paid: true,
      refundable: true,
      metadata: { cms_name: 'yookassa_sdk_python' },
      authorization_details: {
        rrn: '624262362313834',
        auth_code: '404142',
        three_d_secure: [Object]
      }
    }
  }