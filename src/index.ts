export const handler = async (event, context, callback) => {
    const itWorks: string = 'It works!'

    callback(null, itWorks)
}