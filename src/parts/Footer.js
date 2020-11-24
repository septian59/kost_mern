import React from 'react'

import Button from 'elements/Button'
import IconText from 'parts/IconText'
export default function Footer() {
    return (
        <footer>
           <div className="container">
               <div className="row">
                <div className="col-auto" style={{width:350}}>
                <IconText />
                <p className="brand-tagline">
                Cari kost mudah dan terpercaya
                </p>
                </div>
                <div className="col-auto mr-5">
                    <h6 className="mt-2">For Beginner</h6>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <Button type="link" href="/register">Buat Akun</Button>
                        </li>
                        <li className="list-group-item">
                            <Button type="link" href="/properties">Pesan Kost</Button>
                        </li>
                        <li className="list-group-item">
                            <Button type="link" href="/use-payment">Pembayaran</Button>
                        </li>
                    </ul>
                </div>
                <div className="col-2 mr-5">
                <h6 className="mt-2">Explore Us</h6>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <Button type="link" href="/about">About</Button>
                        </li>
                        <li className="list-group-item">
                            <Button type="link" href="/pirvacy">Privacy Policy</Button>
                        </li>
                        <li className="list-group-item">
                            <Button type="link" href="/terms">Term & Condition</Button>
                        </li>
                    </ul>
                </div>
                <div className="col-">
                <h6 className="mt-2">Contact Us</h6>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <Button isExternal type="link" href="mailto:support@kostme.com">support@kostme.com</Button>
                        </li><li className="list-group-item">
                            <Button isExternal type="link" href="tel:+6285676751998">0856 - 7675 - 1998</Button>
                        </li>
                        <li className="list-group-item">
                           <span>Purwokerto, Kabupaten Banyumas</span>
                        </li>
                    </ul>
                </div>
               </div>
            <div className="row">
                <div className="col text-center copyrights">
                Copyright 2020 • All right reserved • Kostme
                </div>
            </div>
            </div> 
        </footer>
    )
}
