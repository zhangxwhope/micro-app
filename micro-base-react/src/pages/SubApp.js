/** @jsxRuntime classic */
/** @jsx jsxCustomEvent */
import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event'

export default function SubApp () {
  const data = {
    test: 'From Base React'
  }
  return (
    <div className="sub-app">
      <h1>子应用1【app1】-React子应用</h1>
      <micro-app 
        name='app1' 
        url='http://localhost:3000/' 
        baseroute='/sub-app'
        data={data}
      ></micro-app>
      <h1>子应用2【app2】-Vue子应用</h1>
      <micro-app 
        name='app2' 
        url='http://localhost:8082/' 
        baseroute='/sub-app'
        data={data}
        onDataChange={(e) => console.log(e.detail.data)}
      ></micro-app>
    </div>
  )
}