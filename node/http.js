

function post(url, params) {
  try {
    const postData = JSON.stringify(params)

    const urlTool = require('url')
    const urlInfo = urlTool.parse(url)
    const port = (urlInfo.protocol === 'https:') ? '443' : '80'
    const libName = (urlInfo.protocol === 'https:') ? 'https' : 'http'
    const request = require(libName).request

    const options = {
      hostname: urlInfo.hostname,
      port,
      path: urlInfo.path,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': postData.length
      }
    }

    let data = ''

    return new Promise((resolve, reject) => {
      const req = request(options, (res) => {
        const statusCode = res.statusCode
  
        res.on('data', buffer => {
          data += buffer.toString('utf8')
        })

        res.on('end', () => {
          let json
          try {
            json = JSON.parse(data)
          } catch(e) {}
          data = json || data
          resolve({ statusCode, data })
        })
      })
  
      req.on('error', (error) => {
        reject({ error })
      })
  
      req.write(postData)
      req.end()
    })

  } catch(e) {
    const error = e.message
    return { error }
  }
}

async function main() {
  const url = 'https://postman-echo.com/post'
  const params = {
    content: 'Hello'
  }
  const response = await post(url, params)
  console.log(response)
}

main()