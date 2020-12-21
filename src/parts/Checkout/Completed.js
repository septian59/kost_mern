import React from 'react'
import Fade from 'react-reveal/Fade'
import CompletedIlustration from 'assets/images/completed.jpg'

export default function Completed() {
    return (
        <Fade>
            <div className="container" style={{marginBottom: 30}}>
                <div className="row justify-content-center text-center">
                    <div className="col-4">
                        <img 
                        src={CompletedIlustration} 
                        className="img-fluid" 
                        alt="completed checkout apartemen"
                        />

                        <p className="text-gray-500">
                        Kami akan mengirimkan email
                        ke anda setelah transaksi diterima
                        </p>
                    </div>
                </div>
            </div>
        </Fade>
    )
}
