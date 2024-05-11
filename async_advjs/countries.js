forbiddenCountries = new Set(["RU", "BY", "AF", "VE", "IR", "CH"])

function addMessage(msg) {
  const div = document.getElementById("ip_checker")
  const p = document.createElement("p")
  const errorText = document.createTextNode(msg)
  p.appendChild(errorText)

  div.appendChild(p)
}

function ForbiddenMessage() {
  addMessage("Services are not available in your country")
}

function WelcomeMessage() {
  addMessage("Welcome to our website!")
}

async function isForbiddenIp(ip) {
  ipInfo = await fetch('https://json.geoiplookup.io/' + ip).then(x => x.json())
  console.log(ipInfo)
  console.log(ipInfo.country_code)
  return forbiddenCountryCodes.has(ipInfo.country_code)
}

async function checkIpButton() {
  for(i = 0; i < 5; i++) {
    ip = prompt()
    if (await isForbiddenIp(ip)) {
      return ForbiddenMessage()
    }
  }
  return WelcomeMessage()
}
