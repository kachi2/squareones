<!DOCTYPE html>
<html lang="en">

<head>

</head>
<body>

<script 
src="https://assets.complycube.com/web-sdk/v1/complycube.min.js"
></script>
<link 
rel="stylesheet"
href="https://assets.complycube.com/web-sdk/v1/style.css"
/>

<!-- Place this in your </body> tag -->
<div id="complycube-mount"></div>

<button onClick="startVerification()">
Start verification
</button>

<script>
var complycube = {};

function startVerification() {
complycube = ComplyCube.mount({
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjoiWXpNek9HUTJORE5pWkdJelpUZ3hOR1JrTXpjelpqQTRPR0pqTWpJd1lUTmhZbVJpWmpZNE1qY3laakE1TURSaFpERmhPV1kwTXpObE1tWXpaR014Tm1FeVptVmhNRFl6TTJGaE5tVTBOemswWWpVMk5tVXdPRGhrWldGa1lUUXhOMkZoTmpnM05qWXlaVFUxWVdKbU5EY3dNRGN3WWpSalltWTVORGN6TnpsaE4yWmhNRGxsTW1NNFl6bGxaRFk0TURSaFkySmpNbU0zTURBelpqZ3dOVFJoTlRZM1ptRXpOalJqTjJFeU9XWTNObVEwTWpsallXTXdNVEppTTJaaU9UWTVPR1psWlRFek1UWmtaRFEyWmpKak1EQm1aVEZtWm1NME9EQTFaVFpoTURjMk5qSXdaRGd4TnpNME1HWTVNRGd6WkRWbFpXRTJaVFpqTVRObE1USmpZek0wTmpNd1kyRmpOamhpT0RCbVlXSTBaVGMyWVRCbE9HUXlZemhrIiwidXJscyI6eyJhcGkiOiJodHRwczovL2FwaS5jb21wbHljdWJlLmNvbSIsInN5bmMiOiJ3c3M6Ly94ZHMuY29tcGx5Y3ViZS5jb20iLCJjcm9zc0RldmljZSI6Imh0dHBzOi8veGQuY29tcGx5Y3ViZS5jb20ifSwib3B0aW9ucyI6eyJoaWRlQ29tcGx5Q3ViZUxvZ28iOmZhbHNlLCJlbmFibGVDdXN0b21Mb2dvIjp0cnVlLCJlbmFibGVUZXh0QnJhbmQiOnRydWUsImVuYWJsZUN1c3RvbUNhbGxiYWNrcyI6dHJ1ZSwiZW5hYmxlTmZjIjpmYWxzZSwiaWRlbnRpdHlDaGVja0xpdmVuZXNzQXR0ZW1wdHMiOjUsImRvY3VtZW50SW5mbGlnaHRUZXN0QXR0ZW1wdHMiOjIsIm5mY1JlYWRBdHRlbXB0cyI6NSwiZW5hYmxlQWRkcmVzc0F1dG9jb21wbGV0ZSI6dHJ1ZSwiZW5hYmxlV2hpdGVMYWJlbGluZyI6dHJ1ZX0sImlhdCI6MTcxMTg0NDMwMSwiZXhwIjoxNzExODQ3OTAxfQ.ipQlJEx76y3LrOps_rpNQkkyAet6WKNt57xL4AKTuyA",
  onComplete: function(data) {
    console.log("Capture complete", data)
  },
});
}
</script>
</body>
</html>
