export default defineEventHandler(async (event) => {
    const yookassa__note = await readBody(event)
    console.log('yookassa__note -------> \n', yookassa__note)

    return {
      hello: 'world'
    }
  })
  
