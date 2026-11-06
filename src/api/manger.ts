import axod from '../axios'


export default function login (username: string, password: string ) {
    return axod.post('/admin/login', {
    username,
    password
  })

}