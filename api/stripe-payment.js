const stripe = require('stripe')('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');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { amount, currency = 'usd', description } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100),
      currency: currency,
      description: description,
      automatic_payment_methods: { enabled: true }
    });

    return res.status(200).json({ 
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}