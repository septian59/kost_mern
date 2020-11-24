import React from 'react'

import ImageHero from 'assets/images/banner-hero.png'
import IconAgen from 'assets/images/icons/icon-agen.svg'
import IconUser from 'assets/images/icons/icon-user.svg'
import IconKost from 'assets/images/icons/icon-kost.svg'

import Button from 'elements/Button'

import formatNumber from 'utils/formatNumber'

export default function Hero(props) {

    function showMostPicked() {
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop - 30,
            behavior: "smooth"
        });
    }

    

    return (
        <section className="container pt-4">
            <div className="row align-items-center">
                <div className="col-auto pr-8" style={{ width: 560 }}>
                    <h1 className="font-weight-bold line-height-1 mb-3">
                        Situs cari kost, <br />
                        mudah dan terpercaya
                    </h1>
                    <p className="mb-4 font-weight-light text-gray-500 w-75" style={{lineHeight:"170%"}}>
                        Kami menyediakan segala kebutuhan tentang
                        pencarian kost sesuai kriteria anda.
                    </p>
                    <Button className="btn px-5" hasShadow isPrimary onClick={showMostPicked}>
                        Show Me
                    </Button>

                    <div className="row" style={{ marginTop: 55 }}>
                        <div className="col-auto" style={{ marginRight:35 }}>
                            <img
                                width="36"
                                height="36"
                                src={IconUser}
                                alt={` ${props.data.user}User`} />
                            <h6 className="mt-3">
                                {formatNumber(props.data.user)}{" "}
                                <span className="text-gray-500 font-weight-light">user</span>
                            </h6>
                        </div>
                        <div className="col-auto" style={{ marginRight:35 }}>
                            <img
                                width="36"
                                height="36"
                                src={IconKost}
                                alt={` ${props.data.kost}Kost`} />
                            <h6 className="mt-3">
                                {formatNumber(props.data.kost)}{" "}
                                <span className="text-gray-500 font-weight-light">kost</span>
                            </h6>
                        </div>
                        <div className="col-auto">
                            <img
                                width="36"
                                height="36"
                                src={IconAgen}
                                alt={` ${props.data.agen}Agen`} />
                            <h6 className="mt-3">
                                {formatNumber(props.data.agen)}{" "}
                                <span className="text-gray-500 font-weight-light">agen</span>
                            </h6>
                        </div>
                    </div>
                </div>
            <div className="col-6 pl-5">
                <div style={{ width: 520, height: 410}}>
                    <img src={ImageHero} alt="Room With" className="img-fluid position-absolute" style={{ margin: '-30px 0 0 -30px', zIndex: 1 }} />
                </div>
            </div>
            </div>
        </section>
    )
}
