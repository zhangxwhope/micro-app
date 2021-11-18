export default function Home() {
  const data = window.microApp?.getData()
  function dataListener (data) {
    console.log('子应用app1获取全局数据', data)
  }
  
  /**
   * 绑定监听函数
   * dataListener: 绑定函数
   * autoTrigger: 在初次绑定监听函数时有缓存数据，是否需要主动触发一次，默认为false
   */
  window.microApp?.addGlobalDataListener(dataListener, true)
  window.microApp?.setGlobalData({type: '子应用app1设置的全局数据'})
  return (
    <div className="home">
      <p>React子应用【app1】 Home Page</p>
      <p>来自React基座应用的数据：{ data.test }</p>
    </div>
  )
}