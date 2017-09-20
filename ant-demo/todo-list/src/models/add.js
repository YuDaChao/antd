/**
 * Created by apple on 2017/9/4.
 */
export default {
  namespace: 'inputs',
  state: {
    input: ''
  },
  reducers: {
    change(state, {payload: name}){
      return {input: name}
    }
  }
}
