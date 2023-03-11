<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0c7f63a (updates)
document.addEventListener('DOMContentLoaded', function() {
    const headings = document.querySelectorAll('h2, h3');
    var toc_list = document.createElement('ol');
    for (let i = 0; i < headings.length; i++)
    {
        const heading = headings[i];
        const level = parseInt(heading.tagName.charAt(1));
        var list_item = document.createElement('li');
        const section_anchor = document.createElement('a');
        section_anchor.textContent = heading.textContent;
        section_anchor.href = "#" + heading.id;
        list_item.appendChild(section_anchor);
        if (level === 2)
        {
            toc_list.appendChild(list_item);
<<<<<<< HEAD
        }
        else if (level === 3)
        {
            var parent_list = toc_list.lastChild.querySelector('li > ol')
            if (parent_list === null)
            {
                parent_list = document.createElement('ol');
                toc_list.lastChild.appendChild(parent_list);
            }
            parent_list.appendChild(list_item);
        }
    }
    const container = document.querySelector('.chap-toc');
    container.appendChild(toc_list);
});
=======
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
>>>>>>> bca2f63 (updates)
=======
        }
        else if (level === 3)
        {
            var parent_list = toc_list.lastChild.querySelector('li > ol')
            if (parent_list === null)
            {
                parent_list = document.createElement('ol');
                toc_list.lastChild.appendChild(parent_list);
            }
            parent_list.appendChild(list_item);
        }
    }
    const container = document.querySelector('.chap-toc');
    container.appendChild(toc_list);
});
>>>>>>> 0c7f63a (updates)
