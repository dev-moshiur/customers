import { FunctionComponent } from "react";
import styles from "./Desktop10.module.css";
const Desktop10: FunctionComponent = () => {
  return (
    <div className={styles.desktop10}>
      <div className={styles.desktop10Child} />
      <div className={styles.desktop10Item} />
      <div className={styles.userProfile}>User Profile</div>
      <b className={styles.admin}>Admin</b>
      <div className={styles.managment}>Managment</div>
      <div className={styles.haakimAli}>Haakim Ali</div>
      <img className={styles.desktop10Inner} alt="" src="/group-3.svg" />
      <img className={styles.iconLogOut} alt="" src="/-icon-log-out.svg" />
      <div className={styles.rectangleDiv} />
      <img className={styles.groupIcon} alt="" src="/group-18760.svg" />
      <div className={styles.desktop10Child1} />
      <img className={styles.maskGroupIcon} alt="" src="/mask-group@2x.png" />
      <div className={styles.applicantsNameBangla}>
        Applicant’s Name (Bangla)
      </div>
      <div className={styles.div}>আবদুল জলিল মিয়া</div>
      <div className={styles.applicantsNameEnglish}>
        Applicant’s Name (English)
      </div>
      <div className={styles.abdulJalilMiya}>Abdul Jalil Miya</div>
      <div className={styles.userVerifiedParent}>
        <div className={styles.userVerified}>User Verified</div>
        <img
          className={styles.checkVerified03Icon}
          alt=""
          src="/checkverified03.svg"
        />
      </div>
      <div className={styles.personalInformation}>Personal Information</div>
      <div className={styles.nidCard}>NID Card</div>
      <div className={styles.fathersNameEnglish}>Father’s Name (English)</div>
      <div className={styles.ahsanSikder}>Ahsan Sikder</div>
      <div className={styles.mothersNameEnglish}>Mother’s Name (English)</div>
      <div className={styles.fahmedaKhan}>Fahmeda Khan</div>
      <div className={styles.gender}>Gender</div>
      <div className={styles.male}>Male</div>
      <div className={styles.div1}>12-08-1993</div>
      <div className={styles.dateOfBirth}>{`Date of birth `}</div>
      <div className={styles.frontPart}>Front part</div>
      <div className={styles.backPart}>Back part</div>
      <div className={styles.nidCardNumber}>NID Card Number</div>
      <div className={styles.div2}>9786537537564</div>
      <div className={styles.desktop10Child2} />
      <img className={styles.groupIcon1} alt="" src="/group.svg" />
      <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
      <div className={styles.desktop10Child3} />
      <div className={styles.years2Months}>{`33 Years 2 Months  3 Days `}</div>
      <div className={styles.currentAge}>Current Age</div>
    </div>
  );
};

export default Desktop10;
