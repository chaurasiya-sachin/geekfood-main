import styles from './hero.module.css'

function HeroContent(){
    return(
        <div  className={styles.heroContent} >
            <div className={styles.content}>
            <h1>Let us find your <br />
            <span>Forever Food.</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>
            <div className={styles.buttonDiv}>
                <button>Search Button</button>
                <button>Know More</button>
            </div>
            </div>
        </div>
    )
}


const HeroSection=()=>{
    return(
        <div className={styles.heroSection} >
            <HeroContent></HeroContent>
        </div>
    )
}

export default HeroSection;