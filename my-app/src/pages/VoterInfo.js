import React from "react";

const VoterInfo = () => {
  return (
    <div className="infoPage">
      <div>
        <h1>Register to Vote</h1>
        <ol>
          <li>
            Check If You Are Registered To Vote
            <p>Make sure your address and contact information is correct and that you are officially in the system to vote this election period<br></br>
            <a href="https://vt.ncsbe.gov/RegLkup">Use this link</a></p>
          </li>
          <li>
            If not registered, follow any of these 3 steps:
            <ol>
              <li>
                Register Online (Easiest and Recommended Method)
                <ol>
                  <li>Go to this link: <a href="http://payments.ncdot.gov">PAYMENTS.NCDOT.GOV</a></li>
                  <li>Select: Continue as guest</li>
                  <li>Click: Voter Registration Application</li>
                  <li>
                    Enter:
                    <ul>
                      <li>Your NC Driver’s License ID or DMV-Issued ID Card Number</li>
                      <li>Your Social Security Number</li>
                      <li>Date of Birth</li>
                    </ul>
                  </li>
                  <li>Register to Vote, Change Your Address, or Update Party Affiliation</li>
                </ol>
              </li>
              <li>Register With Paper Form (Deadline Fri Oct 9, 5pm)</li>
                <ol>
                  <li><a href="https://s3.amazonaws.com/dl.ncsbe.gov/Voter_Registration/NCVoterRegForm_06W.pdf">Voter Registration Form</a></li>
                  <li>
                    Complete Form and Review it Carefully
                    <ol>
                      <li>Spell out name as it is listed on official ID</li>
                      <li>If you do not have an ID or Social Security Card, provide the documents indicated on the form</li>
                      <li>Make sure to put phone number on form, it will be used by election officials to call you if you have missing information</li>
                    </ol>
                  </li>
                  <li>
                    Submit Form
                    <ul>
                      <li>In Person or mail to your <a href="https://vt.ncsbe.gov/BOEInfo">County Board of Elections</a></li>
                    </ul>
                  </li>
                </ol>
              <li>
                Register On-Site During Early Voting (Oct 15-31st)
                <ul>
                  <li><a href="https://vt.ncsbe.gov/ossite">Early Voting Sites Locations</a></li>
                </ul>
              </li>
            </ol>
          </li>
        </ol>
      </div>
      <div>
        <h1>Absentee Voting Information</h1>
        <h2>When should I vote by Mail?</h2>
        <p>Experts recommend to vote 2 weeks prior to these formal deadlines to ensure your vote is counted (request by Oct 13th and submit by Oct 20th)</p>
        <h2>Deadline to request ballot: Tuesday, Oct. 27th 5pm</h2> 
        <h2>Deadline to submit ballot: Tuesday, Nov 3rd 5 pm</h2>
        <h2>Easy Steps to Vote By Mail:</h2>
        <ol>
          <li>
            Submit Absentee Request Form (Deadline: Tuesday Oct 27, 5 pm)
            <ol>
              <li>
                Complete Absentee Request Form
                <ol>
                  <li><a href="https://votebymail.ncsbe.gov/app/home">Online</a></li>
                  <li>
                    Download and Print
                    <ul>
                      <li><a href="https://s3.amazonaws.com/dl.ncsbe.gov/Forms/NCAbsenteeBallotRequestForm.pdf">English</a></li>
                      <li><a href="https://s3.amazonaws.com/dl.ncsbe.gov/Forms/AbsenteeBallotRequestFormcbeSpanish.pdf">Español</a></li>
                    </ul>
                  </li>
                </ol>
              </li>
              <li>
                Return Form
                <ul>
                  <li>Through Online Portal</li>
                  <li><a href="https://vt.ncsbe.gov/BOEInfo/PrintableVersion">Mail to County Board of Elections Office</a></li>
                </ul>
              </li>
            </ol>
          </li>
          <li>
            Vote Your Absentee Ballot
            <ol>
              <li>
                Once your receive the absentee ballot that was mailed to the address you provided in your request form:
                <ul>
                  <li>Mark the form in the presence of 1 witness</li>
                </ul>
              </li>
              <li>
                Once the ballot is filled out:
                <ol>
                  <li>Seal the ballot in the return envelope provided</li>
                  <li>Complete and sign the Absentee Application Certificate on the Return Envelope</li>
                  <li>Have the witness sign the envelope in the space designated: Witness’s Certification</li>
                </ol>
              </li>
            </ol>
          </li>
          <li>
            Submit Your Absentee Ballot (Deadline: Tuesday Nov 3, 5pm)
            <p>3 Ways to Submit Ballot:</p>
            <ol>
              <li><a href="https://vt.ncsbe.gov/BOEInfo/PrintableVersion">Deliver in Person</a> to County Board of Elections by Tues Nov 3, 5pm:</li>
              <li><a href="https://vt.ncsbe.gov/ossite">Deliver in Person to Early Voting Site</a> During Early Voting Period (Oct 15-31):</li>
              <li>
                Mail it in Person to County Board of Elections
                <ol>
                  <li>Use a 55 cent stamp</li>
                  <li>Must be postmarked 5pm Nov 3</li>
                  <li><span style={{fontWeight: "bold"}}>Do not give it to someone else to return:</span> Only the voter, their legal guardian, or Multipartisan Assistance Team can return it on your behalf</li>
                </ol>
              </li>
            </ol>
          </li>
        </ol>
        <h1><a href="https://northcarolina.ballottrax.net/voter">Track Your Absentee Ballot</a></h1>
      </div>
    </div>
  );
};

export default VoterInfo;
