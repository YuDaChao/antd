/**
 * Created by apple on 2017/9/4.
 */
export default {
  namespace: 'count',
  state: 0,
  reducers: {
    add(count) { return count + 1 },
    minus(count) { return count - 1}
  }
}
