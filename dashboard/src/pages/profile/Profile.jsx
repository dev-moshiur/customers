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
    
    <div className="profile">
      <div className="hhh">
        User Profile
      </div>
      <div className="container">

      
        <div className="top">
          <div className="left">
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