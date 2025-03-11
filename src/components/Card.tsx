import Image from 'next/image'
import styles from './card.module.css'
export default function Card(){
    return (
        <div className={styles.card}>
            <div className={styles.cardimg}>
                <Image src={"/img/card-img.png"} 
                    alt="Card Picture"
                    fill={true}
                    priority
                    // objectFit='cover'
                    style={{ objectFit: 'cover' }} 
                />
            </div>
            <div className={styles.cardtext}>
                <h4>The Bloom Pavilion</h4>
                <p>A stunning bouquet hall where love blossoms and unforgettable memories are made.</p>
            </div>
        </div>
    )
}