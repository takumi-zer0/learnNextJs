export const getStaticProps = async () => {
  return {
    props: {
      time: new Date().toISOString(),
    },
  }
}

function Ondemand({ time }) {

  return (
    <div>
      <h1>{time}</h1>
    </div>
  )
}
export default Ondemand