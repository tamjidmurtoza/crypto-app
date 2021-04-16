import Layout from '../../components/Layout'
import styles from './Coin.module.css'
function Coin({coin}) {
  return (
    <Layout title={coin.name} fabicon={coin.image.small}>
      <div className={styles.coin_page}>
        <div className={styles.coni_container}>
          <div className={styles.coni_head}>
            <div className={styles.coni_head_left}>
              <img src={coin.image.large} alt={coin.name} className={styles.coin_image}/>
            </div>
            <div className={styles.coni_head_right}>
              <h2 className={styles.coin_name}>{coin.name} <span className={styles.coin_ticker}>[{coin.symbol}]</span></h2>
              <div className={styles.coin_current}>Price: <span>{coin.market_data.current_price.usd}</span></div>
            </div>
          </div>
          <h3 className={styles.coin_section_title}>Description</h3>
          <div className={styles.coin_description} dangerouslySetInnerHTML={{ __html: coin.description.en }}/>
          <h3 className={styles.coin_section_title}>Social Link</h3>
          <div className={styles.coin_social_link}>
            <a href={`https://www.facebook.com/${coin.facebook_username}`} target="_blank">Facebook</a> 
            <a href={`https://twitter.com/${coin.twitter_screen_name}`} target="_blank">Twitter</a> 
            <a href={`${coin.subreddit_url}`} target="_blank">Reddit</a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Coin

export async function getServerSideProps(context) {
  const {id} = context.query

  const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)

  const data = await response.json()

  return {
    props: {
      coin: data
    }
  }
}
