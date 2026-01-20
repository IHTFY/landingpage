const uploadURL = atob(
  "aHR0cHM6Ly96aXBsaW5lLmZyYW5raWVtZXJjYWRvLmNvbS9nby91cGxvYWQ=",
);
const viewURL = atob(
  "aHR0cHM6Ly9pbW1pY2guZnJhbmtpZW1lcmNhZG8uY29tL3Mvd2VkZGluZw==",
);

document.getElementById("uploadBtn").href = uploadURL;
document.getElementById("viewBtn").href = viewURL;
