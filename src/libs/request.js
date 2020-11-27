import axios from 'axios'

export default async function(options) {
  let result = null,
    err = null,
    data = null
  try {
    options.headers = options.headers || {}
    options.headers.token = localStorage.getItem('t')
    result = await axios(options)
    data = result.data
    if (data.code !== 'A000000') {
      if (data.code === 'E000004') {
        localStorage.removeItem('d')
        localStorage.removeItem('u')
        localStorage.removeItem('t')
        location.href = '/#/login'
        location.reload()
        return
      }
      err = data
      data = null
    } else {
      data = data.data
    }
  } catch (e) {
    err = {
      code: -1,
      message: '网络错误，请稍后重试'
    }
  }
  return { data, err }
}
