function generateTOC() {
    var tocContainer = document.querySelector(".chap-toc");
    var headings = document.querySelectorAll("h2");
    var subheadings = document.querySelectorAll("h3");
    var tocList = document.createElement("ol");
    headings.forEach(function (heading) {
        var tocListItem = document.createElement("li");
        var tocLink = document.createElement("a");
        tocLink.textContent = heading.textContent;
        tocLink.href = "#" + heading.id;
        tocListItem.appendChild(tocLink);
        var subheadingElements = heading.nextElementSibling.querySelectorAll("h3");
        if (subheadingElements.length > 0) {
            var subList = document.createElement("ol");
            subheadingElements.forEach(function (subheading) {
                var subListItem = document.createElement("li");
                var subLink = document.createElement("a");
                subLink.textContent = subheading.textContent;
                subLink.href = "#" + subheading.id;
                subListItem.appendChild(subLink);
                subList.appendChild(subListItem);
            });
            tocListItem.appendChild(subList);
        }
        tocList.appendChild(tocListItem);
    });
    tocContainer.appendChild(tocList);
}

document.addEventListener("DOMContentLoaded", generateTOC);
