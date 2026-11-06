import axod from '../axios'


export default function getUsers (page: number) {
    return axod.get(`/admin/user/${page}`)

}