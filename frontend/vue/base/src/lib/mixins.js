export const table = () => {
  return {
    methods: {
      onTrigger(method, row, scope) {
        this[method](row, scope)
      }
    }
  }
}

export const pagination = () => {
  return {}
}
