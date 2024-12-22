import styles from './cardSection.module.css'

const UserDetails =()=>{
    return(
        <div className={styles.userDetails}>
            <img src="src\assets\lady.avif" />
            <div>
                <p style={{fontWeight:700}}>Gladis Lennon</p>
                <p style={{fontWeight:400,fontSize:14}}>Head of SEO</p>
            </div>
        </div>
    )
}


const FeedBack =({msg})=>{
    // console.log("message :" , {message});
    return(
        <div className={styles.feedBack}>
            <p className={styles.messageBox}>{msg}</p>                      
            <UserDetails />

        </div>
    )
}
const CardSection = ()=>{
    return(
        <div className={styles.cardSection}>
        <FeedBack  msg = {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis.'} />
        <FeedBack  msg = {'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a voluptatum quidem nulla quisquam natus velit provident earum esse, odio numquam labore recusandae similique sunt.'} />
        <FeedBack  msg = {'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a voluptatum quidem nulla quisquam natus velit provident earum esse, odio numquam labore recusandae similique sunt.'} />
        <FeedBack  msg = {'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel quo deserunt quos expedita minima incidunt sed tempora, a architecto consectetur reprehenderit, in repellat voluptatum.'} />
        

        <FeedBack  msg = {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!'} />
        <FeedBack  msg = {'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut necessitatibus, repudiandae qui dolor minima.'} />
        </div>
        
    )
}

export default CardSection;