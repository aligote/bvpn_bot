
import { kv } from '@vercel/kv';
const client_db = useStorage('clients')






let crypto;
try {
  crypto = require('node:crypto');
} catch (err) {
  console.error('crypto support is disabled!');
} 



export default defineEventHandler(async (event) => {

const body = await readBody(event) 
const { event: eventType, object } = body;


if (eventType === 'payment.succeeded') {
                  const { id, amount, metadata } = object;



  // Сохраняем данные в KV
  await kv.set('some_key', { userId: '123', name: 'John Doe' });

  // Получаем данные из KV
  const user = await kv.get('some_key');
  console.log('user ->>>>>>..', user)
                  
}})




