import Image from 'next/image'
import styles from './card.module.css'

interface Props{
    venueName: string;
    imgSrc: string;
}

export default function Card(card:Props){
    return (
        <div className={styles.card}>
            <div className={styles.cardimg}>
                <Image src={card.imgSrc} 
                    alt="Card Picture"
                    fill={true}
                    priority
                    // objectFit='cover'
                    style={{ objectFit: 'cover' }} 
                />
            </div>
            <div className={styles.cardtext}>
                <h4 className='font-semibold'>{card.venueName}</h4>
                {/* <p>A stunning bouquet hall where love blossoms and unforgettable memories are made.</p> */}
            </div>
        </div>
    )
}