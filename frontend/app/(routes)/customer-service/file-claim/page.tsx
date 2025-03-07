import React from "react";
import styles from "./style.module.css";
import Image from "next/image";

const File = () => {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <Image
          src="/ins.jpg"
          alt="Woman with tablet"
          className={styles.heroImage}
          layout="responsive"
          width={700}
          height={475}
        />
        <div className={styles.heroOverlay}>
          <div className={styles.sideIcons}>
            <div className={styles.iconBox}>
              <span>$</span>
            </div>
            <div className={styles.iconBox}>
              <span>📄</span>
            </div>
            <div className={styles.iconBox}>
              <span>👤</span>
            </div>
            <div className={styles.iconBox}>
              <span>💬</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          {/* Left Column */}
          <div className={styles.leftColumn}>
            <h1 className={styles.pageTitle}>File a Claim</h1>
            <h2 className={styles.subtitle}>
              Get paid faster with digital payments
            </h2>

            <h3 className={styles.sectionTitle}>
              Information we need from you
            </h3>
            <p>
              Whether you call us at 800-375-2075, or complete{" "}
              <a href="#" className={styles.link}>
                an online claim form
              </a>
              , please have this information ready:
            </p>
            <ul className={styles.bulletList}>
              <li>Your policy number</li>
              <li>Your contact information</li>
              <li>A description of what happened/loss</li>
              <li>Date and specific time of the loss</li>
              <li>Any and all personal injuries that occurred</li>
              <li>
                Whether an ambulance, fire department, or police departments
                were notified
              </li>
              <li>Whether you believe you need to make temporary repairs</li>
            </ul>
            <p>
              Once you choose to reach us, we will work closely with you until
              your claim is settled.
            </p>

            <h3 className={styles.sectionTitle}>What you can expect from us</h3>
            <p>
              Your claim will immediately be assigned to an adjuster, who will
              contact you to gather more details about what happened. If a
              traditional inspection of the damage is necessary, your adjuster
              will work with you to schedule a time and day for that inspection.
              It may also be possible for the inspection to be handled via our
              video claims resolution tool, which allows you to virtually
              connect with your adjuster using a mobile device and your internet
              connection. If that is the case, the how-to video below shows you
              what you can expect when you use the technology.
            </p>

            <div className={styles.spacer}></div>

            <p>
              You can proceed with contacting a contractor or repair shop to fix
              what&apos;s gone wrong. In many cases, your claims adjuster can
              provide you with information about participating contractors or
              repair shops. The contractor referral program is designed to
              provide you with access to qualified participating contractors or
              repair shops in your immediate area. If the estimate provided by
              your selected contractor or repair shop is greater than our
              adjuster&apos;s total estimate, you should contact your claims
              adjuster.
            </p>
          </div>

          {/* Right Column */}
          <div className={styles.rightColumn}>
            <div className={styles.actionCard}>
              <h3 className={styles.cardTitle}>File a Claim Now</h3>
              <div className={styles.actionItem}>
                <span>File online now</span>
                <span className={styles.arrow}>›</span>
              </div>
              <div className={styles.actionItem}>
                <span>Call us at 800-375-2075</span>
                <span className={styles.arrow}>›</span>
              </div>
              <div className={styles.actionItem}>
                <span>Write or fax us</span>
                <span className={styles.arrow}>›</span>
              </div>
            </div>

            <div className={styles.actionCard}>
              <h3 className={styles.cardTitle}>Customer Service Options</h3>
              <div className={styles.actionItem}>
                <span>Make a payment</span>
                <span className={styles.arrow}>›</span>
              </div>
              <div className={styles.actionItem}>
                <span>File a claim</span>
                <span className={styles.arrow}>›</span>
              </div>
              <div className={styles.actionItem}>
                <span>Change your policy</span>
                <span className={styles.arrow}>›</span>
              </div>
              <div className={styles.actionItem}>
                <span>Manage your account</span>
                <span className={styles.arrow}>›</span>
              </div>
            </div>

            <div className={styles.actionCard}>
              <h3 className={styles.cardTitle}>Learn More</h3>
              <p className={styles.cardText}>
                American Modern employs more than 150 of its own claims
                adjusters, investing thousands of hours with hands-on training.
                For you, this means a more accurate claim resolved by someone
                who understands your policy and the type of damage that has
                occurred.
              </p>
              <p className={styles.cardText}>
                We are also implementing digital technologies to make your
                customer experience even better:
              </p>
              <ul className={styles.cardList}>
                <li>
                  a video claims resolution tool allows you to virtually connect
                  with your adjuster to easily share photos and videos about the
                  damage that has occurred
                </li>
                <li>
                  an easy online interface for reporting – and replacing – your
                  covered personal property items that were damaged
                </li>
                <li>
                  remote sensing technology that provides us with information
                  about the extent of areas impacted by catastrophes, like
                  hurricanes or tornadoes, resulting in faster claims resolution
                  for you.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerColumn}>
            <h4>About</h4>
            <ul>
              <li>
                <a href="#">Customer center</a>
              </li>
              <li>
                <a href="#">Make a payment</a>
              </li>
              <li>
                <a href="#">File a claim</a>
              </li>
              <li>
                <a href="#">Change your policy</a>
              </li>
              <li>
                <a href="#">Manage your account</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h4>Insurance solutions</h4>
            <ul>
              <li>
                <a href="#">Mobile home</a>
              </li>
              <li>
                <a href="#">Vacation home</a>
              </li>
              <li>
                <a href="#">Collector car</a>
              </li>
              <li>
                <a href="#">Motorcycle</a>
              </li>
              <li>
                <a href="#">Snowmobile</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h4>Company overview</h4>
            <ul>
              <li>
                <a href="#">Newsroom</a>
              </li>
              <li>
                <a href="#">Media resources</a>
              </li>
              <li>
                <a href="#">Management team</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Company values</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>© 2024 American Modern Insurance Group. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <a href="#">Privacy policy</a>
            <a href="#">California Consumer Privacy Rights</a>
            <a href="#">Cookie Settings</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default File;
