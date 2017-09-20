/**
 * Created by apple on 2017/9/4.
 */
export default {
  namespace: 'lists',
  state: [],
  reducers: {
    add(state, {payload: name}){
      let id = state.reduce((prev, curr) => prev.id > curr.id ? prev : curr).id
      id++
      return [...state, {name, id}]
    },
    delete(state, {payload: id}){
      return state.filter(item => item.id !== id)
    }
  }
}
