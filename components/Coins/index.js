import styles from './Coins.module.css'
import Link from 'next/link'

function Coins({id, name, price, symbol, marketcap, volume, image, priceChange }) {
  return (
    <Link href='/coin/[id]' as={`/coin/${id}`}>
      <div className={styles.coin_row}>
        <div className={styles.coin_col}>
          <div className={styles.coin_wrap}>
            <img className={styles.coin_image} src={image}/>
            <h2>{name} <span className={styles.coin_symbol}>[{symbol}]</span></h2>
          </div>
        </div>
        <div className={styles.coin_col}>
          <div className={styles.coin_price}>{price}</div>
        </div>
        <div className={styles.coin_col}>
          <div className={styles.coin_volume}>{volume.toLocaleString()}</div>
        </div>
        <div className={styles.coin_col}>
          {priceChange < 0 ? (
            <div className={styles.coin_percent, styles.red}>{priceChange.toFixed(2)}%</div>
          ):(
            <div className={styles.coin_percent, styles.green}>{priceChange.toFixed(2)}%</div>
          )}
        </div>
        <div className={styles.coin_col}>
          <div className={styles.coin_market_cap}>{marketcap.toLocaleString()}</div>
        </div>
      </div>
    </Link>
  )
}

export default Coins
