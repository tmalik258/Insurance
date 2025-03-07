"use client"

import { useState } from "react"
import { CreditCard, BanknoteIcon as Bank, ChevronRight, Info } from "lucide-react"

import styles from "./style.module.css"

const Payment = () => {
  const [maintenanceVisible, setMaintenanceVisible] = useState(true);

  return (
    <div className={styles.container}>
      <div className={styles.breadcrumb}>
        <a href="#" className={styles.breadcrumbLink}>
          HOME
        </a>
        <span className={styles.breadcrumbSeparator}>/</span>
        <a href="#" className={styles.breadcrumbLink}>
          CUSTOMER
        </a>
        <span className={styles.breadcrumbSeparator}>/</span>
        <span className={styles.breadcrumbCurrent}>CHOOSE YOUR PAYMENT METHOD</span>
      </div>

      <main className={styles.main}>
        <h1 className={styles.pageTitle}>Choose Your Payment Method</h1>

        {maintenanceVisible && (
          <div className={styles.notice}>
            <div className={styles.noticeHeader}>NOTICE</div>
            <div className={styles.noticeContent}>
              <p>
                Scheduled system maintenance will occur beginning at 12:00 AM EST, Saturday, March 15, 2025, through
                12:00 PM EST, Sunday, March 16, 2025. During this time, payment functionalities will be unavailable. We
                appreciate your understanding and apologize for any inconvenience this may cause.
              </p>
              <button className={styles.closeButton} onClick={() => setMaintenanceVisible(false)}>
                ×
              </button>
            </div>
          </div>
        )}

        <div className={styles.contentLayout}>
          <div className={styles.paymentOptions}>
            <section className={styles.paymentSection}>
              <h2 className={styles.sectionTitle}>Make a One-Time Payment</h2>
              <p className={styles.sectionDescription}>
                Use either your credit/debit card or choose EFT to have funds withdrawn from your checking/savings
                account.
              </p>
              <div className={styles.paymentButtons}>
                <button className={styles.paymentButton}>
                  <CreditCard className={styles.buttonIcon} />
                  Credit / Debit Card
                </button>
                <button className={styles.paymentButton}>
                  <Bank className={styles.buttonIcon} />
                  Bank Account (EFT)
                </button>
              </div>
            </section>

            <section className={styles.paymentSection}>
              <h2 className={styles.sectionTitle}>Automate your payments with EZPay</h2>
              <div className={styles.ezpayContent}>
                <div className={styles.ezpayIcon}>
                  <Info size={32} />
                </div>
                <p className={styles.sectionDescription}>
                  With EZPay, a withdrawal is made from your bank account, or charged to your credit card. We let you
                  pick the date of the month for the payment. Once EZPay begins, you will stop receiving invoices by
                  mail.
                </p>
              </div>
              <button className={styles.enrollButton}>Enroll in EZPay Now</button>
            </section>

            <section className={styles.paymentSection}>
              <h2 className={styles.sectionTitle}>Pay by Phone</h2>
              <p className={styles.sectionDescription}>
                Call us at:{" "}
                <a href="tel:1-800-543-2644" className={styles.phoneLink}>
                  1-800-543-2644
                </a>
              </p>
            </section>

            <section className={styles.paymentSection}>
              <h2 className={styles.sectionTitle}>Mail in Your Payment</h2>
              <div className={styles.mailingInfo}>
                <p className={styles.mailingHeader}>Payments delivered via USPS:</p>
                <p className={styles.mailingAddress}>
                  American Modern Insurance Group
                  <br />
                  PO Box 740167
                  <br />
                  Cincinnati, OH 45274-0167
                </p>

                <p className={styles.mailingHeader}>Payments delivered via UPS or Fedex (overnight):</p>
                <p className={styles.mailingAddress}>
                  Fifth Third Bank
                  <br />
                  5050 Kingsley Drive
                  <br />
                  Cincinnati, Ohio 45227
                  <br />
                  Attn: LMOCIN – Rlbx 740167
                </p>
                <p className={styles.mailingNote}>
                  Please write your policy number on your check, and include the payment coupon.
                </p>
              </div>
            </section>
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.serviceOptions}>
              <h3 className={styles.serviceTitle}>Customer service options</h3>
              <ul className={styles.serviceList}>
                <li className={styles.serviceItem}>
                  <a href="#" className={styles.serviceLink}>
                    File a claim
                    <ChevronRight className={styles.chevron} />
                  </a>
                </li>
                <li className={styles.serviceItem}>
                  <a href="#" className={styles.serviceLink}>
                    Change your policy
                    <ChevronRight className={styles.chevron} />
                  </a>
                </li>
                <li className={styles.serviceItem}>
                  <a href="#" className={styles.serviceLink}>
                    Manage your account
                    <ChevronRight className={styles.chevron} />
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.learnMore}>
              <h3 className={styles.learnMoreTitle}>Learn More</h3>
              <div className={styles.learnMoreContent}>
                <h4 className={styles.learnMoreSubtitle}>Understanding electronic banking</h4>
                <p className={styles.learnMoreText}>
                  Banks and credit unions offer electronic payment services for both one-time and recurring bills. It is
                  convenient, but the timing of the payment is not the same as the withdrawal from your account.
                </p>
                <p className={styles.learnMoreText}>
                  For example, suppose that your insurance bill is due on the 5th, and you request that you bank process
                  the payment that same day. The bank will likely charge your account on the 5th, but the payment to
                  American Modern typically will be made several days later; even up to two weeks later is common.
                </p>
                <p className={styles.learnMoreText}>
                  As such, because we did not receive payment by the due date, your payment will be considered late,
                  even if your bank has charged your account on the due date. Please keep that in mind if you opt to
                  have your payment routed electronically. Give yourself some lead time.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLinks}>
            <div className={styles.footerColumn}>
              <h4 className={styles.footerTitle}>Customer</h4>
              <ul className={styles.footerList}>
                <li>
                  <a href="#" className={styles.footerLink}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.footerLink}>
                    Customer center
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.footerLink}>
                    Make a payment
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.footerLink}>
                    File a claim
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.footerLink}>
                    Change your policy
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.footerLink}>
                    Manage your account
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.footerColumn}>
              <h4 className={styles.footerTitle}>Insurance solutions</h4>
              <ul className={styles.footerList}>
                <li>
                  <a href="#" className={styles.footerLink}>
                    Mobile home
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.footerLink}>
                    Vacation home
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.footerLink}>
                    Collector car
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.footerLink}>
                    Motorcycle
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.footerLink}>
                    Snowmobile
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.footerLink}>
                    Full-time home
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.footerColumn}>
              <h4 className={styles.footerTitle}>Company</h4>
              <ul className={styles.footerList}>
                <li>
                  <a href="#" className={styles.footerLink}>
                    Company overview
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.footerLink}>
                    Newsroom
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.footerLink}>
                    Media resources
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.footerLink}>
                    Management team
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.footerLink}>
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.footerLink}>
                    Company values
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.footerDisclaimer}>
            <p>
              Coverage is subject to policy terms, conditions, limitations, exclusions, underwriting review and
              approval, and may vary or not be available for all risks or in all states. Rates, discounts vary and are
              determined by many factors, and are subject to change. Policies are written by one of the licensed
              insurers of American Modern Insurance Group, Inc.
            </p>
            <p>© 2025 American Modern Insurance Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Payment;