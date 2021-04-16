import styles from './Search.module.css'
import Coins from "../Coins"

function CoinList({filteredCoins}) {
  return (
    <div className={styles.coin_container}>
      <div className={styles.coin_row}>
        <div className={styles.coin_col}>Coin</div>
        <div className={styles.coin_col}>Price</div>
        <div className={styles.coin_col}>Volume</div>
        <div className={styles.coin_col}>24h</div>
        <div className={styles.coin_col}>Market Cap</div>
      </div>
      {filteredCoins.map(coin => {
        return (
          <Coins 
            key={coin.id}
            name={coin.name}
            id={coin.id}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            volume={coin.total_volume}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        )
      })}
    </div>
  )
}

export default CoinList
