// Define a function to generate the TOC
function generateTOC() {
  // Get the TOC container element
  var tocContainer = document.querySelector(".chap-toc");

  // Find all the h2 tags in the document
  var headings = document.querySelectorAll("h2");

  // Create an unordered list of links to the headings
  var tocList = document.createElement("ol");
  headings.forEach(function (heading) {
    // Create a list item element
    var tocListItem = document.createElement("li");

    // Create an anchor element with a link to the heading ID
    var tocLink = document.createElement("a");
    tocLink.textContent = heading.textContent;
    tocLink.href = "#" + heading.id;

    // Add the anchor element to the list item element
    tocListItem.appendChild(tocLink);

    // Add the list item element to the TOC list
    tocList.appendChild(tocListItem);
  });

  // Insert the TOC list into the TOC container
  tocContainer.appendChild(tocList);
}

// Call the generateTOC function when the DOM is ready
document.addEventListener("DOMContentLoaded", generateTOC);
