//   import { defineEventHandler, readBody } from 'h3';

const client_db = useStorage('clients')

//   import axios from 'axios';

const TELEGRAM_TOKEN = 'ваш_токен_бота'; // Телеграм токен
const CHAT_ID = 'ваш_chat_id'; // Ваш Chat ID
const SECRET_KEY = 'ваш_секретный_ключ_из_юкассы'; // Секретный ключ из ЮKassa


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
                  await client_db.setItem(id, object)
                  const storedObject = await client_db.getItem(id);
console.log('id ->', id, 'amount -->', amount, 'metadata ->>>', metadata)
console.log('\n данные из хранилища --------------- >', storedObject)
}

//       try {
//           // Читаем тело запроса
//           const body = await readBody(event);
  
//           // Проверяем подпись уведомления
//           const signature = event.req.headers['authorization'];
//           if (!validateSignature(body, signature, SECRET_KEY)) {
//               return {
//                   status: 403,
//                   message: 'Invalid signature',
//               };
//           }
  
//           // Обработка события из ЮKassa
//           const { event: eventType, object } = body;
  
//           if (eventType === 'payment.succeeded') {
//               const { id, amount, metadata } = object;
  
//               // Формируем сообщение для Телеграма
//               const message = `
//               ✅ Успешный платеж!
//               💰 Сумма: ${amount.value} ${amount.currency}
//               👤 User ID: ${metadata.user_id || 'N/A'}
//               🔑 Платеж ID: ${id}`;
  
//               // Отправляем сообщение в Телеграм
//               await axios.post(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
//                   chat_id: CHAT_ID,
//                   text: message,
//               });
  
//               return { status: 200, message: 'Notification processed successfully' };
//           }
  
//           return { status: 400, message: 'Unhandled event' };
//       } catch (error) {
//           console.error('Ошибка при обработке уведомления:', error);
//           return {
//               status: 500,
//               message: 'Internal Server Error',
//           };
//       }
  })
  
  /**
   * Проверка подписи уведомления
   * @param {object} body - тело запроса
   * @param {string} signature - заголовок Authorization
   * @param {string} secret - секретный ключ
   * @returns {boolean}
   */
  function validateSignature(body, signature, secret) {
      const payload = JSON.stringify(body);
      const hash = crypto.createHmac('sha256', secret).update(payload).digest('base64');
      return signature === `Bearer ${hash}`;
  }
  



  id -> 2eeb31fd-000f-5000-8000-1e0aeb00a6c0 
  amount --> 
  { value: '12.00', currency: 'RUB' }
   metadata ->>> {
    pay_from: 'telegram',
    user_id: '561085449',
    cms_name: 'yookassa_sdk_python'
  }