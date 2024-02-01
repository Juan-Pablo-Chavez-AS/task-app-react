import api from './connection'
import { Task } from '../types/types'

export const taskService = {
    async getTasks() {
        return await api.get('/tasks')
    },
    async createTask(task: Task) {
        return await api.postForm('/tasks', task)
    },
    async updateTask(task: Task) {
        return await api.patch(`/tasks/${task.id}`, task)
    },
    async deleteTask(id: string) {
        return await api.delete(`/tasks/${id}`)
    }
}
