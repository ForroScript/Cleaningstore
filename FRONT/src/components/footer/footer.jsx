import styles from "./footer.module.css"

export default function Footer() {
    return(
        <>
            <div className={styles.footer}>
                <div className={styles.containerFooter}>
                    <div className={styles.containerMark}>
                        <h1>Cleaningstore</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat minima maiores quod vel inventore labore harum accusamus, dolor voluptates reiciendis iure recusandae, mollitia libero dolore praesentium!</p>
                        <i className={styles.containerIcons}>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 32 32">
                                <path fill="white" d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z"></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="white" d="M 4.4042969 3 C 3.7572969 3 3.3780469 3.7287656 3.7480469 4.2597656 L 9.7363281 12.818359 L 3.7246094 19.845703 C 3.3356094 20.299703 3.6578594 21 4.2558594 21 L 4.9199219 21 C 5.2129219 21 5.4916406 20.871437 5.6816406 20.648438 L 10.919922 14.511719 L 14.863281 20.146484 C 15.238281 20.680484 15.849953 21 16.501953 21 L 19.835938 21 C 20.482937 21 20.862187 20.272188 20.492188 19.742188 L 14.173828 10.699219 L 19.900391 3.9902344 C 20.232391 3.6002344 19.955359 3 19.443359 3 L 18.597656 3 C 18.305656 3 18.027891 3.1276094 17.837891 3.3496094 L 12.996094 9.0097656 L 9.3945312 3.8554688 C 9.0205313 3.3194687 8.4098594 3 7.7558594 3 L 4.4042969 3 z"></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 32 32">
                                <path fill="white" d="M 7.5 5 C 6.132813 5 5 6.132813 5 7.5 L 5 24.5 C 5 25.867188 6.132813 27 7.5 27 L 24.5 27 C 25.867188 27 27 25.867188 27 24.5 L 27 7.5 C 27 6.132813 25.867188 5 24.5 5 Z M 7.5 7 L 24.5 7 C 24.785156 7 25 7.214844 25 7.5 L 25 24.5 C 25 24.785156 24.785156 25 24.5 25 L 7.5 25 C 7.214844 25 7 24.785156 7 24.5 L 7 7.5 C 7 7.214844 7.214844 7 7.5 7 Z M 10.4375 8.71875 C 9.488281 8.71875 8.71875 9.488281 8.71875 10.4375 C 8.71875 11.386719 9.488281 12.15625 10.4375 12.15625 C 11.386719 12.15625 12.15625 11.386719 12.15625 10.4375 C 12.15625 9.488281 11.386719 8.71875 10.4375 8.71875 Z M 19.46875 13.28125 C 18.035156 13.28125 17.082031 14.066406 16.6875 14.8125 L 16.625 14.8125 L 16.625 13.5 L 13.8125 13.5 L 13.8125 23 L 16.75 23 L 16.75 18.3125 C 16.75 17.074219 16.996094 15.875 18.53125 15.875 C 20.042969 15.875 20.0625 17.273438 20.0625 18.375 L 20.0625 23 L 23 23 L 23 17.78125 C 23 15.226563 22.457031 13.28125 19.46875 13.28125 Z M 9 13.5 L 9 23 L 11.96875 23 L 11.96875 13.5 Z"></path>
                            </svg>
                        </i>
                    </div>
                    <div className={styles.containerData}>
                        <div className={styles.containerInformation}>
                            <h3>Information</h3>
                            <ul className={styles.optionFooter}>
                                <li><a href="/">About Cleaningstore</a></li>
                                <li><a href="/">security</a></li>
                                <li><a href="/">my orders</a></li>
                                <li><a href="/">work with us</a></li>
                            </ul>
                        </div>
                        <div className={styles.containerCategories}>
                            <h3>Categories</h3>
                            <ul className={styles.optionFooter}>
                                <li><a href="/">cleaning and bath</a></li>
                                <li><a href="/">cleaning</a></li>
                                <li><a href="/">bath</a></li>
                                <li><a href="/">automotive</a></li>
                            </ul>
                        </div>
                        <div className={styles.containerCategories}>
                            <h3>Contact</h3>
                            <ul className={styles.optionFooter}>
                                <li><a href="/">Av. Eusébio de Queiroz, 1999 - Centro, Eusébio - CE, 61760-000</a></li>
                                <li><a href="/">Phone: (85) 1234-5678</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className={styles.copyrigth}>
                    <h5>@2025 ForróScript</h5>
                </div>
            </div>
        </>
    )
}