import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
    state: () => {
        return { count: 0 }
    },
    actions: {
        Increment() {
            this.count++
        },
    },
    getters: {
        showCount(): any {
            return 'O valor do count é:' + this.count
        }
    }
})