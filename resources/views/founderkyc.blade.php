<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
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
                      <div class="fw-bold small">Welcome to SquareOne</div>
                      <div class="main-name">Hon Kong Company Limited by Shares</div>
                      <div class="row justify-content-center">
                        <div class="col-lg-8">
                          <div class="text-muted">
                            This Kyc verifications will take approximately 2-5 munites to complete
                          
                          </div>
                          <div class="text-muted mt-2">
                            Before you start, please make sure you have the following documents ready
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
                                  Card (Must have a photograph bearing the person.) </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="row g-0">
                              <div class="col-1"><i class="bi bi-award"></i></div>
                              <div class="col">
                                <span class="fw-bold color-thick">Address Proof</span>
                                <div class="text-muted"> Your latest residential address proof showing your name(e.g uitility
                                  bill or bank statement issued within the last 3 months.) </div>
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
                    <button class="btn btn-primary w-100" onClick="startVerification()"> <i class="bi bi-arrow-right"></i>Start verification</button>
               
                </div>
              </div>
            </div>
          </div>
    </div>
    
    <script>
let founderKey = {!!  json_decode($founder->user_token) !!}
  ComplyCube.mount({
  token: founderKey,
  containerId: 'complycube-mount',
  onComplete: function(data) {
    // Using the data attributes returned, request your
    // backend server to perform the necessary ComplyCube checks
    console.info('Capture complete');
  },
  onModalClose: function() {
    // Handle the modal closure attempt
  },
  onError: function ({ type, message }) {
    if (type === 'token_expired') {
      // Request a new SDK token
    } else {
      // Handle other errors
      console.err(message);
    }
  }
});
      </script>
</body>
</html>