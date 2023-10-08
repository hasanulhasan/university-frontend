import { Empty } from "antd";

const NotFoundPage = () => {
  return (
    <Empty description={
      <span>
        404! Page Not Found
      </span>
    } style={{
     marginTop: '300px'
    }}/>
  )
}

export default NotFoundPage;