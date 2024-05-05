<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <link href="https://assets.complycube.com/web-sdk/v1/style.css" rel="stylesheet">

    <title>SquareOne Kyc Verifications</title>
</head>
<body>

    <div class="container">

        <div class="bg-white pb-5">
            <div class="container">
              <div class="row g-3 justify-content-center align-items-center">
                <div class="col-md-11">
                  <div class="card bg-transparent border-0">
                    
                    <div class="card-body justify-content-center text-center ">
                      <div class="p-3">
                        <img class="email-logo" src="{{asset('squareone-light-logo.png')}}" alt="logo" style="height: 40px; background:#555454;max-width: 100%;vertical-align:middle;">
                      </div>
                      <div class="fw-bold ">Welcome to SquareOne</div>
                      <div class="main-name">Hon Kong Company Limited by Shares</div>
                      <div class="row justify-content-center">
                        <div class="col-lg-8 p-3">
                          <div class="text-muted">
                            This Kyc verifications will take approximately 2-5 munites to complete
                          
                          </div>
                          <div class="text-muted mt-2">
                            Before you start, please make sure you the documents below ready
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
        
                <div class="col-md-8">
                  <div class="card border-0 bg-transparent">
                    <div class="card-body">
                      <section>
                        <div class="text-muted h6">ONE OF THIS DOCUMENT CAN USED FOR THIS PURPOSE</div>
                        <div class="row g-3 mt-1">
                          <div class="col-md-6">
                            <div class="row g-0">
                              <div class="col-1"><i class="bi bi-person-vcard"></i></div>
                              <div class="col">
                                <span class="fw-bold color-thick">Identification Proof</span>
                                <div class="text-muted"> Hong Kong Indentity Card / Passport / Travel Document / National
                                  Identity
                                  Card </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="row g-0">
                              <div class="col-1"><i class="bi bi-award"></i></div>
                              <div class="col">
                                <span class="fw-bold color-thick">Residential Permit</span>
                                <div class="text-muted"> An Active Residential Permit from the government of country you currently resides </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
        
                
                    </div>
                  </div>
                </div>
        
                <div class="col-12">

                    <div id="complycube-mount"></div>
                </div>
        
                <div class="col-md-4 col-lg-3">
                    <button class="btn btn-primary w-100 "  id="closeoncompleted" type="button" onClick="startVerification()"> Start verification</button>
               <small id="erro"></small>
                </div>
              </div>
            </div>
          </div>
    </div>
    
    <script>
let founderKey = {!!  json_encode($founder->user_token) !!}
let status = {!!  json_encode($founder->kyc_status) !!}


window.addEventListener("load", (event) => {
  if(status == 'pending'){
    document.getElementById('closeoncompleted').innerHTML = "CLose Window"
    document.getElementById('closeoncompleted').disabled = true
    document.getElementById('erro').innerHTML = "You have already submitted document, Kindly wait while we review your documents"
  }


})

function startVerification() {
    console.log(founderKey);

    const complycube = ComplyCube.mount({
        containerId: 'complycube-mount',
        token: founderKey,
        onComplete: function (data) {
            setTimeout(()=>{
                complycube.unmount()
                document.getElementById('closeoncompleted').innerHTML = "Close window"
                document.getElementById('closeoncompleted').disabled = true

            },3000)

          
            console.log("Capture complete", data)
        },
        onModalClose: function () {
            complycube.unmount()
        },
        onError: function (error) {
            if (error.type === 'token_expired') {
                // Request a new SDK token
            } else {
                // Handle other errors
                console.log(error.message);
            }
        }
    });
}

      </script>
<script src="https://assets.complycube.com/web-sdk/v1/complycube.min.js"></script>
{{-- <script src="https://sdk.complycube.com/latest/complycube.js"></script>  --}}
</body>
</html>