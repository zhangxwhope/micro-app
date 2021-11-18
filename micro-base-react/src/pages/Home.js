import microApp from '@micro-zoe/micro-app'

export default function Home() {
  microApp.setGlobalData({type: '基座应用设置的全局数据'})
  return (
    <div className="home">
      <h1>基座应用React Home Page</h1>
    </div>
  )
}