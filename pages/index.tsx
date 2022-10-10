import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import { useState } from 'react';

import styles from '../styles/index.module.scss';

import EmailForm from '../components/EmailForm';
import NavBar from '../components/Navbar';
import MobileMenu from '../components/MobileMenu';

import envelopeIcon from '../assets/invite.svg';
import collectCoinsIcon from '../assets/collect-coins.svg';
import voucherIcon from '../assets/voucher.svg';
import chromeStore from '../assets/app-stores/chrome.svg';
import appleStore from '../assets/app-stores/apple.svg';
import ratepunkLogo from '../assets/logo.svg';
import facebookIcon from '../assets/social/facebook.svg';
import instagramIcon from '../assets/social/instagram.svg';
import linkedinIcon from '../assets/social/linkedin.svg';
import tiktokIcon from '../assets/social/tiktok.svg';
import twitterIcon from '../assets/social/twitter.svg';
import emailFooterIcon from '../assets/email-footer.svg';

const Home: NextPage = () => {
  const [isMobileMenuOn, setIsMobileMenuOn] = useState(false);
  const redirectPage = (url: string) => {
    window.location.href = url;
  };
  return (
    <div>
      <Head>
        <title>RatePunk landing page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta
          name="description"
          content="RatePunk - Refer your friends to us and earn hotel booking vouchers "
        />
        <link rel="icon" href="ratepunk-landing-page-nextjs/favicon.ico" />
      </Head>

      <div className={isMobileMenuOn ? styles.outline : ''}>
        <section
          className={`${styles.navbarSection} ${isMobileMenuOn ? '' : styles.navbarSectionDesktop}`}
        >
          <div className={styles.container}>
            <NavBar mobileMenuState={isMobileMenuOn} stateChanger={setIsMobileMenuOn} />
          </div>
        </section>

        <section>
          <MobileMenu mobileMenuState={isMobileMenuOn} stateChanger={setIsMobileMenuOn} />
        </section>
      </div>

      {!isMobileMenuOn ? (
        <>
          <section className={styles.mainSection}>
            <div className={styles.container}>
              <div className={styles.mainFlexContainer}>
                <div className={styles.emailFormContainer}>
                  <EmailForm />
                </div>
                <div className={styles.logoAndTextContainer}>
                  <div className={styles.logoAndTextItem}>
                    <div className={`${styles.envelopeIcon} ${styles.genericStepImage}`}>
                      <Image src={envelopeIcon} alt="Envelope with a coin" />
                    </div>
                    <div>
                      <p>Step 1</p>
                      <p>Invite friends</p>
                      <p>Refer friends with your unique referral link.</p>
                    </div>
                  </div>
                  <div className={styles.logoAndTextItem}>
                    <div>
                      <p>Step 2</p>
                      <p>Collect coins</p>
                      <p>
                        Get 1 coin for each friend that installs our extension using your referral
                        link.
                      </p>
                    </div>
                    <div className={`${styles.collectCoinsIcon} ${styles.genericStepImage}`}>
                      <Image src={collectCoinsIcon} alt="Collect coins icon" />
                    </div>
                  </div>
                  <div className={styles.logoAndTextItem}>
                    <div className={`${styles.voucherIcon} ${styles.genericStepImage}`}>
                      <Image src={voucherIcon} alt="Voucher icon" />
                    </div>
                    <div>
                      <p>Step 3</p>
                      <p>Get voucher</p>
                      <p>Redeem for a $20 hotel booking voucher once you collect 20 coins.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.appStoreSection}>
            <div className={styles.container}>
              <div className={styles.appStoreContainer}>
                <div
                  className={styles.appStoreContainerItem}
                  onClick={() =>
                    redirectPage(
                      'https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck?utm_source=ratepunk'
                    )
                  }
                >
                  <Image src={chromeStore} alt="Chrome icon" />
                  <div>
                    <p>available in the</p>
                    <p>chrome web store</p>
                  </div>
                </div>
                <div
                  className={styles.appStoreContainerItem}
                  onClick={() => redirectPage('https://apps.apple.com/app/ratepunk/id1607823726')}
                >
                  <Image src={appleStore} alt="Apple icon" />
                  <div>
                    <p>available in the</p>
                    <p>apple app store</p>
                  </div>
                </div>
                <p className={styles.rating}>
                  <span>&#9733; &#9733; &#9733; &#9733; &#9733;</span> Chrome Store reviews
                </p>
              </div>
            </div>
          </section>

          <section className={styles.footerSection}>
            <div className={styles.container}>
              <div className={styles.footerContainer}>
                <div className={styles.footerContainerDescription}>
                  <div>
                    <Image src={ratepunkLogo} alt="RatePunk logo" />
                    <p>
                      Ratepunk compares hotel room prices across the major online travel agencies.
                      When you search for a room, Ratepunk extension scans the top booking sites and
                      runs a price comparison, so you can be confident in knowing you&apos;re
                      getting the best deal!
                    </p>
                  </div>
                  <p className={styles.footerCopyright}>© 2022 Ratepunk. All Rights Reserved.</p>
                </div>
                <div className={styles.footerContainerQuickLinks}>
                  <h2>QUICK LINKS</h2>
                  <ul>
                    <li>Price Comparison</li>
                    <li>Chrome Extension</li>
                    <li>How It Works</li>
                    <li>Ratepunk Blog</li>
                    <li>Privacy Policy</li>
                  </ul>
                </div>
                <div className={styles.footerContainerContact}>
                  <div>
                    <h2>CONTACT</h2>
                    <div className={styles.contactIconAndEmail}>
                      <Image src={emailFooterIcon} alt="Email icon" />
                      <p>hi@ratepunk.com</p>
                    </div>
                  </div>
                  <div>
                    <h2>SOCIAL</h2>
                    <div className={styles.socialIcons}>
                      <div className={styles.socialIcon}>
                        <Image src={instagramIcon} alt="Instagram icon" />
                      </div>
                      <div className={styles.socialIcon}>
                        <Image src={facebookIcon} alt="Facebook icon" />
                      </div>
                      <div className={styles.socialIcon}>
                        <Image src={linkedinIcon} alt="LinkedIn icon" />
                      </div>
                      <div className={styles.socialIcon}>
                        <Image src={twitterIcon} alt="Twitter icon" />
                      </div>
                      <div className={styles.socialIcon}>
                        <Image src={tiktokIcon} alt="TikTok icon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export default Home;
