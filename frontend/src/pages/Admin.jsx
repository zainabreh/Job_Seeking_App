import React from 'react'

const Admin = () => {
  return (
    <>
      <div class="container mt-5">
        <div class="info-section">
            <h4 style={{fontWeight:"600",color:"white",marginBlock:"25px"}}>User Info</h4>
            <div class="row">
                <div class="col-md-3">
                    <div class="info-card bg-blue">
                        <span>20</span>
                        Total Members
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="info-card bg-cyan">
                        <span>1</span>
                        Admins
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="info-card bg-cyan">
                        <span>2</span>
                        Recruiters
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="info-card bg-blue">
                        <span>17</span>
                        Applicants
                    </div>
                </div>
            </div>
        </div>
        <div class="info-section">
            <h4 style={{fontWeight:"600",color:"white",marginBlock:"25px"}}>Job Info</h4>
            <div class="row">
                <div class="col-md-3">
                    <div class="info-card bg-red">
                        <span>6</span>
                        Total Jobs
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="info-card bg-green">
                        <span>4</span>
                        Pending
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="info-card bg-purple">
                        <span>2</span>
                        Interview
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="info-card bg-red">
                        <span>0</span>
                        Declined
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Admin
