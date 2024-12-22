import styles from './heroSection2.module.css';

function LeftContainer(){
    return(
        <div className={styles.leftContainer}>
            <img src="src\assets\home1.avif" />
        </div>
    )
}

function RightContainer(){
    return(
        <div className={styles.rightContainer}>
            <div className={styles.content}>
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.

            Get in Touch</p>
            <button>Get In Touch</button>
            </div>
        </div>
    )
}

function ContentContainer(){
    return(
        <div className={styles.contentContainer}>
        <LeftContainer />
        <RightContainer />
        </div>
    )
}

const HeroSection2 = ()=>{
    return(
        <div className={styles.heroSection2}>
        <ContentContainer />
        </div>
    )
}

export default HeroSection2;
