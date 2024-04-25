import React from 'react';
import CustomNavbar from '../../Navbar/navbar';
import Footer from '../../footer/footer';
import './grand-theft-auto-v.css'
import { Container } from 'react-bootstrap';

function GrandTheftAutoV() {
    return (
        <div className="w-full bg-black/80 py-8 backdrop-blur-3xl md:py-16">
            <CustomNavbar />
            <Container className="w-full gap-12 text-white md:flex">
                <div className="mb-8 basis-1/5 md:mb-0">
                    <img src="https://newzoo.com/wp-content/uploads/2024/04/game--grand-theft-auto-v.png" alt="Grand Theft Auto V" className="h-auto w-2/5 rounded md:w-full" />
                </div>
                <div className="basis-4/5 text-sm">
                    <div className="mb-2 text-xs opacity-50">
                        Last updated on: <time dateTime="2024-04-05 07:08:01">April 5, 2024</time>
                    </div>
                    <h1 className="text-3xl">
                        Grand Theft Auto V
                    </h1>
                    <div id="game--summary">
                        <p className="mb-2">
                            <b>Grand Theft Auto V</b> was the <b>#5</b> most played game in <b>February 2024</b>, based on the number of monthly active users or players.
                        </p>
                        <p className="mb-2">
                            <b>Grand Theft Auto V</b> is a <b>Adventure</b> game developed by <b>Rockstar North</b> that can be played on <b>PlayStation 3, PlayStation 4, Windows, PC (Steam), Xbox One, PlayStation 5, Xbox Series X|S, Xbox 360</b>.
                        </p>
                        <p className="mb-2">
                            In <b>March 2024</b>, Grand Theft Auto V was ranked <b>#1</b> on popular streaming platform <b>Twitch</b>, based on <b>147.6M</b> hours watched.
                        </p>
                        <p>
                            The game was published by <b>Rockstar Games</b> on <b>September 17, 2013</b>.
                        </p>
                    </div>
                    <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-flow-col lg:grid-cols-12 lg:grid-rows-2">
                        <div className="col-span-1 rounded bg-white/10 p-4 lg:col-span-5">
                            <h3 className="-ml-px mb-4 text-sm font-medium text-gray-300">
                                Released on
                            </h3>
                            <div className="flex flex-wrap items-center gap-3">
                                <img src="https://newzoo.com/wp-content/themes/newzoo/images/games/platforms/playstation.svg" alt="PlayStation" />
                                <div className="h-5 w-px bg-gray-500"></div>
                                <img src="https://newzoo.com/wp-content/themes/newzoo/images/games/platforms/pc.svg" alt="PC" />
                                <div className="h-5 w-px bg-gray-500"></div>
                                <img src="https://newzoo.com/wp-content/themes/newzoo/images/games/platforms/xbox.svg" alt="Xbox" />
                            </div>
                        </div>
                        <div className="col-span-1 rounded bg-white/10 p-4 lg:col-span-5">
                            <h3 className="-ml-px mb-4 text-sm font-medium text-gray-300">
                                Developers
                            </h3>
                            <div>
                                Rockstar North
                            </div>
                        </div>
                        <div className="col-span-1 rounded bg-white/10 p-4 pb-6 lg:col-span-7 lg:row-span-2">
                            <h3 className="-ml-px mb-4 text-sm font-medium text-gray-300">
                                Release dates
                            </h3>
                            <ul className="max-h-[200px] overflow-y-auto pb-4">
                                <li className="mb-2 border-b border-gray-500 pb-2">
                                    <b>Sep 17, 2013</b> - Xbox 360, PlayStation 3
                                </li>
                                <li className="mb-2 border-b border-gray-500 pb-2">
                                    <b>Nov 18, 2014</b> - PlayStation 4, Xbox One
                                </li>
                                <li className="mb-2 border-b border-gray-500 pb-2">
                                    <b>Apr 13, 2015</b> - PC (Steam)
                                </li>
                                <li className="mb-2 border-b border-gray-500 pb-2">
                                    <b>Apr 14, 2015</b> - Windows
                                </li>
                                <li>
                                    <b>Mar 15, 2022</b> - PlayStation 5, Xbox Series X|S
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    );
}

export default GrandTheftAutoV;
