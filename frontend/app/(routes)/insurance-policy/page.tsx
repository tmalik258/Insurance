import Image from "next/image";
import { ArrowRight } from "lucide-react";

import styles from "./style.module.css";

const InsurancePolicy = () => {
  return (
    <div className={styles.container}>
      {/* Banner */}
      <div className={styles.banner}>
        <Image
          src="/placeholder.svg"
          alt="Customer service representatives"
          width={1200}
          height={300}
          className={styles.bannerImage}
        />
        <h1 className={styles.bannerTitle}>Change Your Policy</h1>
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        <div className={styles.leftColumn}>
          <section className={styles.section}>
            <h2>Change your coverage</h2>
            <p>
              We recommend contacting your agent for any change that affects
              your coverage limits, or the deductible. A contact number for your
              agent is printed on your policy&apos;s declarations page. You can
              also call our Customer Center at 1- 800-543-2644, Monday to
              Friday, 8 a.m. to 8 p.m. Eastern.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Renew your policy</h2>
            <p>
              A lot can change in just one year. It&apos;s worth a few minutes
              of your time to make sure your protection is right for your needs,
              and your current budget. You&apos;ll also want to make sure we
              have your most up-to-date contact information. Talk to your agent.
              He or she knows your area and is specially trained for a detailed
              discussion about your particular changes and coverage options. You
              can also call our Customer Center at 1-800-543-2644, Monday to
              Friday, 8 a.m. to 8 p.m. Eastern.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Cancel your policy</h2>
            <p>
              It&apos;s best to discuss a cancellation with your agent to make
              sure you retain your protection for as long as it is needed, and
              that you replace it with something else.
            </p>
            <p>
              You can also deal directly with American Modern. However, your
              cancellation request must be in writing including your signature.{" "}
              <a href="#">Download and fill out this form</a> before sending it
              to us by mail or fax.
            </p>
          </section>

          <section className={styles.contactSection}>
            <div className={styles.contactMethod}>
              <h3>MAIL</h3>
              <p>American Modern Insurance Group</p>
              <p>PO Box 5323</p>
              <p>Cincinnati, OH 45201-5323</p>
            </div>

            <div className={styles.contactMethod}>
              <h3>FAX</h3>
              <p>800-217-2150</p>
            </div>
          </section>

          <div className={styles.warningBox}>
            <p>We cannot accept a cancellation request submitted by email.</p>
          </div>

          <section className={styles.section}>
            <h2>Other policy changes</h2>
            <p>
              <a href="#">Request a free copy of your policy documents &gt;</a>
            </p>
          </section>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.purpleBox}>
            <h3>Change Your Policy</h3>
            <div className={styles.linkWithArrow}>
              <p>
                Talk to your agent or
                <br />
                call us at 866-580-8651
              </p>
              <ArrowRight className={styles.arrowIcon} />
            </div>
            <div className={styles.linkWithArrow}>
              <p>Learn about American Modern</p>
              <ArrowRight className={styles.arrowIcon} />
            </div>
          </div>

          <div className={styles.purpleBox}>
            <h3>Customer Service Options</h3>
            <div className={styles.serviceLink}>
              <p>Make a payment</p>
              <ArrowRight className={styles.arrowIcon} />
            </div>
            <div className={styles.serviceLink}>
              <p>File a claim</p>
              <ArrowRight className={styles.arrowIcon} />
            </div>
            <div className={styles.serviceLink}>
              <p>Change your policy</p>
              <ArrowRight className={styles.arrowIcon} />
            </div>
            <div className={styles.serviceLink}>
              <p>Manage your account</p>
              <ArrowRight className={styles.arrowIcon} />
            </div>
          </div>

          <div className={styles.purpleBox}>
            <h3>Learn More</h3>
            <p className={styles.learnMoreItem}>Insurance term to understand</p>
            <p className={styles.learnMoreItem}>
              <strong>Settlement option</strong>
            </p>
            <p className={styles.learnMoreText}>
              A settlement is the fulfillment by the insurance company of the
              terms of its policy following a covered loss. In the event of a
              partial loss, this is the repair of the damage. For a total loss,
              the settlement is based on a choice you make when you enter into
              the policy. One of the benefits of specialty insurance is that you
              often have multiple choices, including actual cash value,
              replacement cost and agreed value. The policy will pay up to the
              maximum value listed on the policy, so it is important to
              understand the replacement cost of your home or insured vehicle.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerColumn}>
            <h4>Home</h4>
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
              <li>
                <a href="#">Full-time home</a>
              </li>
              <li>
                <a href="#">Vacant property</a>
              </li>
              <li>
                <a href="#">Boat</a>
              </li>
              <li>
                <a href="#">ATV & UTV</a>
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
              <li>
                <a href="#">Company history</a>
              </li>
              <li>
                <a href="#">Location directions</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Adjuster training</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.legalFooter}>
          <p>
            Coverage is subject to policy terms, conditions, limitations,
            exclusions, underwriting review and approval, and may vary or not be
            available for all risks or in all states. Rates, discounts and
            underwriting rules vary and are subject to change. American Modern
            Insurance Group products are underwritten by the companies of
            American Modern Insurance Group, including but not limited to
            American Modern Home Insurance Company and/or in CA as American
            Modern Insurance Company, Lic. No 2222-8, and American Modern
            Property and Casualty Insurance Company (CA Lic. No 6129-1).
          </p>
          <p>
            American Modern Insurance Group, American Modern, AMsuite,
            modernLINK and Homeowners FLEX are trademarks or registered
            trademarks of American Modern Insurance Group, Inc.
          </p>
          <p>
            All other names, logos, and brands described herein are trademarks
            or registered trademarks of their respective holders, and use herein
            does not imply affiliation with or sponsorship or endorsement by
            them of American Modern, its products, or its services.
          </p>
          <p>
            Corporate office | 7000 Midland Blvd | Amelia, OH 45102 |{" "}
            <a href="mailto:info@amig.com">info@amig.com</a>
            <br />
            Mailing address | PO Box 5323 | Cincinnati, OH 45201-5323
          </p>
          <p>
            © 2024 American Modern Insurance Group, Inc. All rights reserved.
          </p>
          <div className={styles.privacyLinks}>
            <a href="#">Privacy policy</a> |{" "}
            <a href="#">California Consumer Privacy Rights</a> |{" "}
            <a href="#">Cookie Settings</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InsurancePolicy;
