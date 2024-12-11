

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
                  await client_db.setItem(id, object)
                  const storedObject = await client_db.getItem(id);
console.log('id ->', id, 'amount -->', amount, 'metadata ->>>', metadata)
console.log('\n данные из хранилища --------------- >', storedObject)
}})