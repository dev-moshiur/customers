import './profile.scss'
import { useLocation } from "react-router-dom";
import { useState,useEffect } from "react";
import styles from "./Desktop10.module.css";
const Desktop10= () => {
    const {search} = useLocation()
    console.log(search)
    const [person, setPerson] = useState()
    const [age, setAge] = useState(0)
    useEffect(() => {
        fetch(`https://fba52cb3-bc44-4df8-8483-c90b23931d85.mock.pstmn.io/api/v1/dashboard/customer/${search.split('=')[1]}/details`,{
            headers:{"x-api-key":"PMAK-641aa0e926dce84132b278dd-39882e4e5be8287ec6e539865649638afc"}
        })
        .then(res=>res.json())
        .then(data=>{setPerson(data);console.log(data);getAge(data.currentAge)})
        .catch(err=>console.log(err))

    }, [])
    const getAge =(age)=>{
        // Assuming your birth date is in the format "YYYY-MM-DD"
const birthDate = new Date(age);
const currentDate = new Date();

// Calculate the age in years
let ageInYears = currentDate.getFullYear() - birthDate.getFullYear();

// Calculate the difference in months and days
const monthsDiff = currentDate.getMonth() - birthDate.getMonth();
const daysDiff = currentDate.getDate() - birthDate.getDate();

// Adjust the age if the current month and day haven't been reached yet
if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
  ageInYears--;
}

// Calculate the remaining months and days
const remainingMonths = (12 + monthsDiff) % 12;
const remainingDays = (daysDiff < 0) ? (30 + daysDiff) : daysDiff;

setAge(ageInYears + " Years " + remainingMonths + " Months " + remainingDays + " days");


    }
  return (
    <>
    {/* <div className={styles.desktop10}>
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
      <div className={styles.div}>{person?.applicantNameInBangla}</div>
      <div className={styles.applicantsNameEnglish}>
        Applicant’s Name (English)
      </div>
      <div className={styles.abdulJalilMiya}>{person?.applicantNameInEnglish}</div>
      <div className={styles.userVerifiedParent}>
        <div className={styles.userVerified}>User {person?.status}</div>
        <img
          className={styles.checkVerified03Icon}
          alt=""
          src="/checkverified03.svg"
        />
      </div>
      <div className={styles.personalInformation}>Personal Information</div>
      <div className={styles.nidCard}>NID Card</div>
      <div className={styles.fathersNameEnglish}>Father’s Name (English)</div>
      <div className={styles.ahsanSikder}>{person?.fatherName}</div>
      <div className={styles.mothersNameEnglish}>Mother’s Name (English)</div>
      <div className={styles.fahmedaKhan}>{person?.motherName}</div>
      <div className={styles.gender}>Gender</div>
      <div className={styles.male}>{person?.gender}</div>
      <div className={styles.div1}>{new Date(person?.dob).toLocaleDateString()}</div>
      <div className={styles.dateOfBirth}>{`Date of birth `}</div>
      <div className={styles.frontPart}>Front part</div>
      <div className={styles.backPart}>Back part</div>
      <div className={styles.nidCardNumber}>NID Card Number</div>
      <div className={styles.div2}>{person?.nidCardNumber}</div>
      <div className={styles.desktop10Child2} />
      <img className={styles.groupIcon1} alt="" src="/group.svg" />
      <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
      <div className={styles.desktop10Child3} />
      <div className={styles.years2Months}>{age }</div>
      <div className={styles.currentAge}>Current Age</div>
    </div> */}
    <div className="profile">
      <div className="container">

      
        <div className="top">
          <div className="imageContainer">
            <img src="/mask-group@2x.png" alt="" />

          </div>
          <div className="nameAndVery">
            <div className="name">
              <div className="title">
              Applicant’s Name (Bangla)

              </div>
              <div className="value">
              
              {person?.applicantNameInBangla}
                
              </div>
              <div className="title">
              Applicant’s Name (English)

              </div>
              <div className="value">
              {person?.applicantNameInEnglish}

              </div>
            </div>
            <div className="very">
              <img src="/checkverified03.svg" alt="" />
              <div className="status">
                User {person?.status}
              </div>
            </div>
          </div>
          <div className="age">
            <div className="topp">
            Current Age
            </div>
            <div className="botttom">
{age}
            </div>
            

          </div>

        </div>
        <div className="head">
        Personal Information

        </div>
        <div className="middle">
          <div className="item">
            <div className="title">
            Father’s Name (English)

            </div>
            <div className="value">
              {person?.fatherName}
              
            </div>
          </div>
          <div className="item">
            <div className="title">
            Gender

            </div>
            <div className="value">
            {person?.gender}

            </div>
          </div>
          <div className="item">
            <div className="title">
            NID Card Number

            </div>
            <div className="value">
            {person?.nidCardNumber}

            </div>
          </div>
          <div className="item">
            <div className="title">
            Mother’s Name (English)

            </div>
            <div className="value">
            {person?.motherName}

            </div>
          </div>
          <div className="item">
            <div className="title">
            Date of birth

            </div>
            <div className="value">
            {new Date(person?.dob).toLocaleDateString()}

            </div>
          </div>

        </div>
        <div className="head">
        NID Card
        </div>
        <div className="bottom">
          <div className="imgContainer">
            <div className="name">
            Front part

            </div>
            {person?.nidCardFront && 
            <img src={`data:image/jpg;base64,${person?.nidCardFront}`} alt="" />}
          </div>
          <div className="imgContainer">
            <div className="name">
            Back part

            </div>
            {person?.nidCardBack && 
            <img src={`data:image/jpg;base64,${person?.nidCardBack}`} alt="" />}
          </div>

        </div>
      </div>
      
    </div>
    </>
  );
};

export default Desktop10;