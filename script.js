function processEmergency() {
  const area = document.getElementById("area").value;
  const type = document.getElementById("emergencyType").value;

  if (area === "" || type === "") {
    alert("Please select both area and emergency type.");
    return;
  }

  let guidance = "";
  let shelter = "";
  let mapQuery = "";
  let helplines = [];

  // Area-based shelters
  if (area === "AGIRIPALLI") {
    shelter = "Chukkapalli High School";
    mapQuery = "Chukkapalli High School Agiripalli";
  } else if (area === "VIJAYAWADA") {
    shelter = "Indira Gandhi Municipal Stadium";
    mapQuery = "Indira Gandhi Municipal Stadium Vijayawada";
  } else if (area === "GANNAVARAM") {
    shelter = "Gannavaram Government Degree College";
    mapQuery = "Gannavaram Government Degree College";
  } else if (area === "GUNTUR") {
    shelter = "Guntur Municipal Corporation Office";
    mapQuery = "Guntur Municipal Corporation Office";
  }

  // Guidance + helplines
  if (type === "Flood") {
    guidance =
      "Floods can escalate rapidly. Move to higher ground immediately and avoid flooded roads. Turn off electrical appliances if safe and carry essential items such as medicines and documents.";
    helplines = ["112 – National Emergency", "108 – Disaster Response", "100 – Police"];
  } else if (type === "Cyclone") {
    guidance =
      "Cyclones bring strong winds and heavy rain. Stay indoors away from windows, secure loose items, and evacuate only when instructed by authorities.";
    helplines = ["112 – National Emergency", "108 – Disaster Response", "101 – Fire Services"];
  } else if (type === "Earthquake") {
    guidance =
      "During an earthquake, drop, cover, and hold. After shaking stops, move to open areas away from buildings and power lines.";
    helplines = ["112 – National Emergency", "108 – Medical Emergency"];
  } else if (type === "Bomb Threat") {
    guidance =
      "Evacuate the area calmly without panic. Do not touch suspicious objects and follow police instructions strictly.";
    helplines = ["112 – National Emergency", "100 – Police"];
  } else if (type === "Suspicious Activity") {
    guidance =
      "Avoid the area and do not confront anyone. Report the activity immediately to authorities and follow official guidance.";
    helplines = ["112 – National Emergency", "100 – Police"];
  }

  // Update UI
  document.getElementById("decisionText").innerHTML =
    "<b>Area:</b> " + area +
    "<br><b>Emergency Type:</b> " + type +
    "<br><br>" + guidance;

  document.getElementById("shelterText").innerHTML =
    "Nearest Safe Location: " + shelter;

  document.getElementById("guidanceCard").style.display = "block";
  document.getElementById("helplineCard").style.display = "block";

  // Helplines
  const helplineList = document.getElementById("helplineList");
  helplineList.innerHTML = "";
  helplines.forEach(h => {
    const li = document.createElement("li");
    li.textContent = h;
    helplineList.appendChild(li);
  });

  // Map
  document.getElementById("mapFrame").src =
    "https://www.google.com/maps?q=" +
    encodeURIComponent(mapQuery) +
    "&z=14&output=embed";
}

/* ClickSpark Effect (React-like) */
document.addEventListener("click", function (e) {
  const sparkCount = 8;
  const sparkRadius = 15;
  const sparkSize = 10;
  const duration = 400;

  for (let i = 0; i < sparkCount; i++) {
    const spark = document.createElement("div");
    spark.className = "spark";
    spark.style.width = sparkSize + "px";
    spark.style.height = sparkSize + "px";

    const angle = (2 * Math.PI * i) / sparkCount;
    spark.style.left = e.clientX + Math.cos(angle) * sparkRadius + "px";
    spark.style.top = e.clientY + Math.sin(angle) * sparkRadius + "px";

    document.body.appendChild(spark);
    setTimeout(() => spark.remove(), duration);
  }
});
